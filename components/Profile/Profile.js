import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import UserData from '../UserData/UserData';
import UserModels from '../UserModels/UserModels';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Profile({ navigation }) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 50,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#c3453c',
            fontWeight: 600,
            fontSize: 17,
          }}
          onPress={() =>
            navigation.navigate('Profile', { screen: 'UserData' })
          }>
          بياناتى
        </Text>
        <Text
          style={{
            color: '#c3453c',
            fontWeight: 600,
            fontSize: 17,
          }}
          onPress={() =>
            navigation.navigate('Profile', { screen: 'UserModels' })
          }>
          تصميماتي
        </Text>
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserModels"
          component={UserModels}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
