import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { auth, firestore } from '../../firebase';

export default function UserData({navigation}) {

        const [userData, SetUserData] = useState({})
        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
              if (user) {
                firestore.collection('mrTailorClients').doc(user.uid).onSnapshot((userCredentials)=>{
                  SetUserData({...userCredentials.data()})
                })
              }
              else{
                navigation.replace("SignIn")
              }
            });

            return unsubscribe;
          }, [navigation]);
  return (
    <View>
      <Text>{userData.name}</Text>
      <Text>{userData.email}</Text>
      <Text>{userData.phone}</Text>
    </View>
  );
}