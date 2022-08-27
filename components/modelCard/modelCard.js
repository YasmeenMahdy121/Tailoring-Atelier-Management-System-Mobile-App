import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import cardStyle from './modelCardStyle';

export default function ModelCard({model,navigation}) {
  let base = (model.rateOut1+model.rateOut2+model.rateOut3+model.rateOut4+model.rateOut5)
  let modelRate = 0;
  if(base){
    modelRate = Math.round(((model.rateOut1*1)+(model.rateOut2*2)+(model.rateOut3*3)+(model.rateOut4*4)+(model.rateOut5*5))/base)
  }
  // To set the max number of Stars
  const ratings = [1, 2, 3, 4, 5];

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  const CustomRatingBar = () => {
    return (
      <View style={cardStyle.customRatingBarStyle}>
        {ratings.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              >
              <Image
                style={cardStyle.starImageStyle}
                source={
                  item <= modelRate
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={cardStyle.cardUP}>
      <Image
        style={cardStyle.logo}
        source={{ uri: model.img }}
      />
      <Text style={cardStyle.paragraph1}>{model.modelType}</Text>
      <Text style={cardStyle.paragraph2}>{model.price} ج</Text>
      <View style={cardStyle.rate}>
        <CustomRatingBar/>
      </View>
    </View>
  );
}
