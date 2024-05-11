import React from 'react';
import {Image, Text, View} from 'react-native';

const BirdCard = bird => {
  console.log(bird.data, 'dentro');

  return (
    <View style={{margin: 10, borderWidth: 2}}>
      <Image
        src={bird.data.images.main}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'cover',
        }}
      />
      <Text> Spanish: {bird.data.name.spanish}</Text>
      <Text> English: {bird.data.name.English}</Text>
      <Text> latin: {bird.data.name.latin}</Text>
    </View>
  );
};

export default BirdCard;
