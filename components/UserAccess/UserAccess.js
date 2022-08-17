import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from '@expo/vector-icons/AntDesign';
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import { auth, firestore } from '../../firebase';

const Stack = createNativeStackNavigator();

export default function UserAccess({navigation}) {
    
  const logOut = ()=>{
      auth.signOut().then(() => {
        navigation.replace("SignIn")
      })
      .catch(error => alert(error.message))
  }
  return (
    <View>
      <View
      style={{
        flexDirection:"row-reverse",
        justifyContent:'space-between',
        alignItems:'center',
        width:"100%",
        height:50,
        backgroundColor:"#c3453c",
        paddingHorizontal:15
      }}
      >
       
          <Icon 
          onPress={()=>navigation.navigate('UserAccess', { screen: 'Home' })}   
          name="home" 
          color="#fff" 
          size={24}
          />
          <Icon 
          onPress={()=>navigation.navigate('UserAccess', { screen: 'Profile' })}   
          name="user" 
          color="#fff" 
          size={24}
          />
          <Icon 
          onPress={()=>logOut()}  
          name="logout" 
          color="#fff" 
          size={18} 
          style={{transform: [{ rotateY: '180deg' }]}}
          />
      </View>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
        headerShown: false
        }}
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
        headerShown: false
        }}
        />
      </Stack.Navigator>
    </View>
  );
}
