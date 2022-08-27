import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Shadow } from 'react-native-shadow-2';
import styles from './UserModelsStyle';
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';

export default function UserModel({ navigation }) {
  const [userModels, SetUserModel] = useState([]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection('usersModels')
          .doc(user.uid)
          .collection('userModels')
          .onSnapshot((data) => {
            let models = [];
            data.forEach((e) => {
              models.push(e.data());
            });
            SetUserModel(models);
          });
      } else {
        navigation.replace('SignIn');
      }
    });
    return unsubscribe;
  }, [navigation]);

  function DeleteModel(uId,modelId) {
    firestore.collection('usersModels').doc(uId).collection('userModels').doc(modelId).delete();
    firestore.collection('pending').doc(modelId).delete();
  }

  return (
    <View>
      <View style={{ paddingHorizontal: 25, paddingVertical: 30 }}>
        {userModels.map((model) => (
          <Shadow
            style={{
              marginBottom: 30,
              backgroundColor: 'white',
              width: '100%',
              shadowColor: '#52006A',  
    elevation: 20,  
            }}>
            <View style={styles.card}>
              <Image style={styles.img} source={{ uri: model.img }} />
              <View style={styles.viewTxtStyle,{width:'60%'}}>
                <Text style={{fontSize:17,fontWeight:500,marginTop:10}}>{model.modelType}</Text>
                <Text style={{marginTop:5}}>
                  <Text style={{fontSize:20,fontWeight:700}}>{model.price}</Text>  جنيه  
                </Text>
                {model.state == 'pending' ? (
                  <View style={{}}>
                    <View style={styles.spanStyle}>
                      <Text style={styles.txtStyle}>معلق</Text>
                    </View>
                    <View style={styles.deleteStyle}>
                      <Text
                        style={styles.txtStyle}
                        onPress={() => DeleteModel(model.clientInfo.clientId,model.modelId)}>
                        حذف
                      </Text>
                    </View>
                  </View>
                ) : null}
                {model.state == 'implemented' ? (
                  <View style={styles.spanStyle}>
                    <Text style={styles.txtStyle}>تم التنفيذ</Text>
                  </View>
                ) : null}
                {model.state == 'confirmed' ? (
                  <View style={styles.spanStyle}>
                    <Text style={styles.txtStyle}>تحت التنفيذ</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </Shadow>
        ))}
      </View>
    </View>
  );
}
