import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { auth, firestore } from '../../firebase';
import ModelCard from '../modelCard/modelCard'
import cardStyle from '../modelCard/modelCardStyle';
import { Card, Button } from 'react-native-paper';

const { width } = Dimensions.get('window'); 

export default function Home({navigation}) {
    const [models, setModels] = useState([])
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          firestore
          .collection('models')
          .onSnapshot((data) => {
            let models = [];
            data.forEach((e) => {
              models.push(e.data());
            });
            setModels(models);
          });
        }
        else{
          navigation.replace("SignIn")
        }
      });

      return unsubscribe;
    }, [navigation]);
  return (
    <View>
      <View style={styles.imgHeader}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://img.freepik.com/premium-vector/tailoring-atelier-flat-illustration-with-professional-tailor-taking-measurements-from-client_1284-58857.jpg?w=996',
          }}
        />
      </View>
      {
        models.map(model=>{
          return(
            <View style={cardStyle.card}>
            <Card style={cardStyle.cardContent}>
            <ModelCard model={model}/>
                <Text 
                onPress={() => navigation.navigate('ModelDetails', { id: model.modelId })}
                style={cardStyle.text1}>للحجز و الإستعلام</Text>
            </Card>
          </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: width,
    height: 180,
  },
  imgHeader: {
    alignItems: 'center',
  },
});