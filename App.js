import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase';
import Landing from './components/Landing/Landing';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import UserAccess from './components/UserAccess/UserAccess';



import { Card } from 'react-native-paper';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Landing" 
      component={Landing} 
      options={{
      headerShown: false
      }}
      />
      <Stack.Screen 
      name="SignIn" 
      component={SignIn} 
       options={{
      headerShown: false
      }}
      />
      <Stack.Screen 
      name="SignUp" 
      component={SignUp} 
       options={{
      headerShown: false
      }}
      />
      <Stack.Screen 
      name="UserAccess" 
      component={UserAccess} 
       options={{
      headerShown: false
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

