import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './HomeScreen.styles';
import text from '../../utils/texts.json';
const homeScreen = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.titleText}>{text.home.title}</Text>
    </SafeAreaView>
  );
};

export default homeScreen;
