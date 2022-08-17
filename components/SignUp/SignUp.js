import * as React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth, firestore } from '../../firebase';

export default function SignUp({navigation}) {
  const signUp = (userName, email, phone, password)=>{
          auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          firestore.collection('mrTailorClients').doc(user.uid).set({
            clientId:user.uid,
            name:userName,
            email:email,
            phone:phone,
            password:password,
            dateJoined:new Date().toDateString(),
          })
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
                    style={{width:"100%",height:"30%",marginTop:20}}
                />

                <Formik
                  initialValues={{ userName:'', email: '', phone:'', password:'' }}
                   validationSchema={Yup.object({
                     userName:Yup.string().required('الاسم مطلوب').matches(/^[\u0600-\u06FF]{2,} [\u0600-\u06FF]{2,}$/, "اسم المستخدم غير صحيح"),
                     email: Yup.string().required('البريد الالكتروني مطلوب').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "الاميل يجب ان يكون بهذا الشكل Example@go.com "),
                     phone:Yup.string().required('رقم الهاتف مطلوب').matches(/^(01)(0|1|2|5)[0-9]{8}$/, "ادخل رقم هاتف صحيح "),
                     password: Yup.string().required('الرقم السري مطلوب').min(8,'الرقم السري على الاقل 8 '),
                  })}
                  onSubmit={values => signUp(values.userName, values.email, values.phone, values.password)}
                >
                  {(props) => (
                    <View>
                    <View style={{
                    flexDirection:"row-reverse",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:40,
                    paddingHorizontal:10,
                    borderColor:"#c3453c",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="user" color="#c3453c" size={20}/>
                    <TextInput 
                        onChangeText={props.handleChange('userName')}
                        onBlur={props.handleBlur('userName')}
                        value={props.values.userName}
                        style={{
                          textAlign:'right',
                          width:'96%',
                          paddingHorizontal:10,
                          outlineStyle: 'none',
                        }}
                    />

                    

                </View>
                {props.touched.userName && props.errors.userName ? (
                      <Text 
                      style={{
                        color:'#c3453c',
                        marginHorizontal:55,
                        }}>
                        {props.errors.userName}
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
                    <Icon name="phone" color="#c3453c" size={20}/>
                    <TextInput 
                        onChangeText={props.handleChange('phone')}
                        onBlur={props.handleBlur('phone')}
                        value={props.values.phone}
                        style={{
                          textAlign:'right',
                          width:'96%',
                          paddingHorizontal:10,
                          outlineStyle: 'none',
                        }}
                    />

                    

                </View>
                {props.touched.phone && props.errors.phone ? (
                      <Text 
                      style={{
                        color:'#c3453c',
                        marginHorizontal:55,
                        }}>
                        {props.errors.phone}
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
                    انشاء حساب
                </Text>
                    </View>
                  )}
                </Formik>

                <Text
                style={{
                    alignSelf:"center",
                    paddingVertical:30,
                    fontSize:12
                }}
                >هل لديك حساب؟
                <Text          
                onPress={()=>navigation.navigate('SignIn')}       
                style={{
                    alignSelf:"center",
                    color:"#c3453c",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                    paddingRight:5
                }}>قم بتسجيل الدخول</Text>
                </Text>
            </View>
        )
}
