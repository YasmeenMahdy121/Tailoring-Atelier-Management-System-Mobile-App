import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './UserDataStyle';

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
      <View style={{ marginTop: 10 }}>
        <View style={{ padding: 20 }}>
          <Shadow style={styles.elevation}>
            {
              <View style={styles.viewData}>
                <FontAwesome name="user" style={styles.styleIcon} />
                <Text style={styles.styleText2}>{userData.name}</Text>
              </View>
            }
          </Shadow>
          <Shadow style={styles.elevation}>
            <View style={styles.viewData}>
              <FontAwesome name="phone" style={styles.styleIcon} />
              <Text style={styles.styleText2}>{userData.phone}</Text>
            </View>
          </Shadow>
          <Shadow style={styles.elevation}>
            <View style={styles.viewData}>
              <FontAwesome name="envelope" style={styles.styleIcon} />
              <Text style={styles.styleText2}>{userData.email}</Text>
            </View>
          </Shadow>

          <Shadow style={styles.elevation}>
            <View style={styles.viewData}>
              <FontAwesome name="calendar-o" style={styles.styleIcon} />
              <Text style={styles.styleText2}>{userData.dateJoined}</Text>
            </View>
          </Shadow>
        </View>
      </View>
 
  );
}
