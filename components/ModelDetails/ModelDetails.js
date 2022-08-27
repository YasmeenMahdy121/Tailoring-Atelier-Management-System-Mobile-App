import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Detalis from './modelDetailsStyle';
import { auth, firestore } from '../../firebase';

export default function ModelDetails({navigation, route}) {
  const modelId = route.params.id;
    const [modelDetails, setModelDetails] = useState({})
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          firestore.collection('models').doc(modelId).onSnapshot((modelCredentials)=>{
            let model = {
              ...modelCredentials.data(),
              clientInfo:{
                clientId:user.uid,
              }
              }
            setModelDetails({...model})
          })
        }
        else{
          navigation.replace("SignIn")
        }
      });

      return unsubscribe;
    }, [navigation]);
    const reserveModel = ()=>{
      firestore.collection('mrTailorClients').doc(modelDetails.clientInfo.clientId).onSnapshot((userCredentials)=>{
        let user = userCredentials.data()
        let model = {
        ...modelDetails,
        clientInfo:user,
        reservationDate: new Date().getTime(),
        state: 'pending'
      }
      firestore.collection('pending').doc(model.modelId).set(model)
      firestore.collection(`/usersModels/${model.clientInfo.clientId}/userModels`).doc(model.modelId).set(model)
      model.note='new'
      firestore.collection("notification").doc(model.modelId).set(model)
       navigation.navigate("Home")
    })
    }
 let base = (modelDetails.rateOut1+modelDetails.rateOut2+modelDetails.rateOut3+modelDetails.rateOut4+modelDetails.rateOut5)
  let modelDetailsRate = 0;
  if(base){
    modelDetailsRate = Math.round(((modelDetails.rateOut1*1)+(modelDetails.rateOut2*2)+(modelDetails.rateOut3*3)+(modelDetails.rateOut4*4)+(modelDetails.rateOut5*5))/base)
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
      <View style={Detalis.customRatingBarStyle}>
        {ratings.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}>
              <Image
                style={Detalis.starImageStyle}
                source={
                  item <= modelDetailsRate
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
    <View>
      <Image
        style={Detalis.logo}
       source={{ uri: modelDetails.img }}
      />
      <Text style={Detalis.paragraph1}>{modelDetails.modelType}</Text>
      <Text style={Detalis.paragraph2}>{modelDetails.price} ج</Text>
      <CustomRatingBar />
       <Text style={Detalis.paragraph3}>التقييم</Text>
  
        <Text 
         onPress={() =>  reserveModel()}
        style={Detalis.text1}>احجز الأن</Text>
    </View>
  );
}
