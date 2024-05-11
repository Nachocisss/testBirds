import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './HomeScreen.styles';
import text from '../../utils/texts.json';
import BirdCard from '../../components/BirdCard/BirdCard';
const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        if (!response.ok) {
          throw new Error('Error en llamada');
        }
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.titleText}>{text.home.title}</Text>
      {data.length > 0 &&
        data.map((bird, index) => {
          return <BirdCard data={bird} key={index} />;
        })}
    </SafeAreaView>
  );
};

export default HomeScreen;
