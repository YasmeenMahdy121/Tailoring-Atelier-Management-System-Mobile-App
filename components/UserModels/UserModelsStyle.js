import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: '30%',
    height: '80%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
    paddingLeft:10,
    paddingBottom:10,
  },
  spanStyle:{
    backgroundColor:'#ebf2fc',
    width:'100%',
    paddingHorizontal:8,
    paddingVertical:3,
    borderRadius:5, 
    marginTop:7,
    alignSelf:'center'   
  },
  deleteStyle:{
    backgroundColor:'black',
    width:'100%',
    paddingHorizontal:8,
    paddingVertical:3,
    borderRadius:5, 
    marginTop:7,
    alignSelf:'center'   
  },
  viewTxtStyle:{
    paddingHorizontal: 12,
    width:'40%',
    display:'flex',
    justifyContent:'space-evenly'
  },
  txtStyle:{
    textAlign:'center',
    color:'#c3453c',
    fontWeight:600
  }
});
export default styles ;
