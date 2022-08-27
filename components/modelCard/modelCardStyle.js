import * as React from 'react';
import { StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
       backgroundColor: '#c3453c',
    paddingVertical: 7,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 23,
    alignItems: 'center',
    paddingRight:55,
  },

  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    marginVertical: 12,
  },
  starImageStyle: {
    width: 20,
    height: 18,
    resizeMode: 'cover',
  },
  paragraph1: {
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
    letterSpacing: 1,
  },
  paragraph2: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
  },
  logo: {
    height: 128,
    width: 128,
  },
  cardUP: {
    alignItems: 'center',
  },
  cardContent: {
    marginHorizontal: 15,
    marginVertical: 7,
    padding: 10,
    borderRadius: 6,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: 'black',
  },
  card: {
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
  },
});
export default cardStyle;
