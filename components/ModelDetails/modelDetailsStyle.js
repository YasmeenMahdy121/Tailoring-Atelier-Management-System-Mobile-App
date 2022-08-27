import * as React from 'react';
import { StyleSheet } from 'react-native';

const Detalis = StyleSheet.create({
  logo: {
    height: 400,
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.5,
        backgroundColor: '#c3453c',
    paddingVertical: 7,
    paddingRight:120,
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 23,
    color:'white',
  },
  customRatingBarStyle: {
    justifyContent: 'right',
    marginRight: 10,
    flexDirection: 'row-reverse',
    marginVertical: 12,
  },
  starImageStyle: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    marginTop:15
  },
  paragraph1: {
    marginVertical: 8,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginRight: 10,
    color: 'brown',
    fontSize: 22,
    letterSpacing: 1,
  },
  paragraph2: {
    fontWeight: 'bold',
    marginRight: 14,
    fontSize: 20,
    color: 'brown',
    
  },
  paragraph3: {
    fontWeight: 'bold',
    marginRight: 14,
     color: 'gray',
  },
});

export default Detalis;
