import * as React from 'react';
import { Text, View, Image, Touchableopacity } from 'react-native';
import Constants from 'expo-constants';

export default function Landing({navigation}) {
  return (
    <View  style={{backgroundColor:'#fff',height:'100%'}}> 
      <Image 
        source ={require('../../assets/tailorMan.png')}
        style={{width:"100%",height:250,marginTop:60}}
        resizeMode = 'contain'
      />
      <Text 
      style = { { fontSize : 40 , fontweight : 'bold', marginHorizontal:'auto',marginTop:30 } } > مرحبا !
      </Text > 
      <Text 
        style = { { 
        fontSize : 16 , 
        color : ' gray ' , 
        textAlign : ' center ' , 
        marginHorizontal : 20 
        } } > مرحبا بكم في موقع اتيليه مستر تايلور لتصميم و تنفيذ ملابس السيدات
      </Text > 
      <View 
      style = { { 
        flexDirection : 'row-reverse' , 
        justifyContent:'space-between',
        margin : 20 ,
        marginTop:40 
         } } >
                    
        <Text 
        onPress={()=>navigation.navigate('SignIn')}  
        style = { { 
          backgroundColor : '#c3453c' , 
          padding : 10 , 
          width : 140 , 
          borderRadius : 30 , 
          display:'flex',
          justifyContent:"center",
          alignItems:"center",
          color : '#FFF' , 
          fontSize : 15
          } } >
          تسجيل الدخول
        </Text >
        <Text 
        onPress={()=>navigation.navigate('SignUp')}  
        style = { { 
          backgroundColor : '#fff' , 
          padding : 10 , 
          width : 140 , 
          borderRadius : 30 , 
          display:'flex',
          justifyContent:"center",
          alignItems:"center",
          color : '#c3453c' , 
          fontSize : 15,
          borderWidth:2,
          borderColor:'#c3453c'
          } } >
          انشاء حساب
        </Text >
        
      </View>
      
    </View >
  );
}

// display:'flex',
                    // marginHorizontal:55,
                    // alignItems:"center",
                    // justifyContent:"center",
                    // marginTop:30,
                    // backgroundColor:"#c3453c",
                    // paddingVertical:10,
                    // borderRadius:23,
                    // color:"white",
                    // fontFamily:"SemiBold"
