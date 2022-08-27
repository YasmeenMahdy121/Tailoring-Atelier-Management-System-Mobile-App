import * as React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../firebase';

export default function SignIn({navigation}) {
  const signIn = (email, password)=>{
              auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          navigation.navigate('UserAccess')
        })
        .catch((error) => alert(error.message));
  }
  return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
             <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:50
                 }}
                >مستر تايلور</Text>
                <Image source ={require('../../assets/registration.jpg')}
                    style={{width:"100%",height:200,marginTop:40}}
                />

                <Formik
                  initialValues={{ email: '', password:'' }}
                   validationSchema={Yup.object({
                     email: Yup.string().required('البريد الالكتروني مطلوب').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "الاميل يجب ان يكون بهذا الشكل Example@go.com "),
                     password: Yup.string().required('الرقم السري مطلوب').min(8,'الرقم السري على الاقل 8 '),
                  })}
                  onSubmit={values => signIn(values.email, values.password)}
                >
                  {(props) => (
                    <View>
                      <View style={{
                    flexDirection:"row-reverse",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#c3453c",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#c3453c" size={20}/>
                    <TextInput 
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        value={props.values.email}
                        style={{
                          textAlign:'right',
                          width:'96%',
                          paddingHorizontal:10,
                          outlineStyle: 'none',
                        }}
                    />

                    

                </View>
                   {props.touched.email && props.errors.email ? (
                      <Text 
                      style={{
                        color:'#c3453c',
                        marginHorizontal:55,
                        }}>
                        {props.errors.email}
                      </Text>
                    ) : null}
                <View style={{
                    flexDirection:"row-reverse",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#c3453c",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#c3453c" size={22}/>
                    <TextInput
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        value={props.values.password}
                        secureTextEntry={true}
                        style={{
                          textAlign:'right',
                          width:'96%',
                          paddingHorizontal:10,
                          outlineStyle: 'none'
                        }}
                    />

                    

                </View>
                {props.touched.password && props.errors.password ? (
                      <Text 
                      style={{
                        color:'#c3453c',
                        marginHorizontal:55
                        }}>
                        {props.errors.password}
                      </Text>
                    ) : null}
                <Text 
                onPress={props.handleSubmit} 
                style={{
                    display:'flex',
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#c3453c",
                    paddingVertical:10,
                    borderRadius:23,
                    color:"white",
                    fontFamily:"SemiBold"
                }}>
                    تسجيل الدخول
                </Text>
                    </View>
                  )}
                </Formik>

                <Text          
                onPress={()=>navigation.navigate('SignUp')}       
                style={{
                    alignSelf:"center",
                    color:"#c3453c",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                }}>انشاء حساب جديد</Text>
            </View>
        )
}
