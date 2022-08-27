import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  elevation: {
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    marginBottom: 30,
    paddingVertical: 20,
    paddingRight:10,
    paddingLeft:5,
  },
  viewData: {
    fontSize: 30,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  styleText1:{
    width:'20%',
    fontSize:20
  },
  styleText2:{
    width:'65%',
    textAlign:'right',
    fontSize:20,
    marginRight:20
  },
  styleIcon:{
    fontSize: 20,
    color:'#c3453c',
    marginLeft:10
  }
});
export default styles;