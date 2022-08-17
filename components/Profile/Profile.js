import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserData from '../UserData/UserData'
import UserModels from '../UserModels/UserModels'


const Stack = createNativeStackNavigator();
export default function Profile() {
  return (
        <Stack.Navigator>
          <Stack.Screen 
          name="UserData" 
          component={UserData} 
          options={{
          headerShown: false
          }}
          />
          <Stack.Screen 
          name="UserModels" 
          component={UserModels} 
          options={{
          headerShown: false
          }}
          />
        </Stack.Navigator>
  );
}