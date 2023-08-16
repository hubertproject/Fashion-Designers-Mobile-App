import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
  } from "react-native";
  import React, { useRef, useState } from "react";
  import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
  import { firebaseConfig } from "../config";
  import firebase from "firebase/compat/app";
  import "firebase/compat/auth";  
  
  const Otp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [verificationId, setVerificationId] = useState("");
    const recaptchaVerifier = useRef(null);
  
    const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then((verificationId) => setVerificationId(verificationId))
        .catch((error) => {
           //error hangling
          console.log("Error sending verification:", error);
        });
    };
  
    const confirmCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          setCode("");
          Alert.alert("Login successful. Welcome to Homepage");
        })
        .catch((error) => {
          //error hangling
          console.log("Error confirming verification code:", error);
          alert("Error confirming verification code.");
        });
    };
  
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>Login Using OTP</Text>
        <TextInput
          placeholder="Enter Phone Number with country code"
          onChangeText={setPhoneNumber}  
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <TextInput
          placeholder=" Confirm Code"
          onChangeText={setCode}  
          keyboardType="number-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
          <Text style={styles.buttonText}>Confirm Verification</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Otp;
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'#000',
          alignItems:'center',
          justifyContent:'center'
      },
      textInput: {
          paddingTop: 40,
          paddingBottom: 20,
          paddingHorizontal:20,
          fontSize: 24,
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
          marginBottom: 20,
          textAlign: 'center',
          color: '#fff'
  
      },
      sendVerification: {
          padding: 20,
          backgroundColor:'#3498db',
          borderRadius:10,
  
      },
      sendCode:{
          padding: 20,
          backgroundColor:'#9b59b6'
      },
      buttonText:{
          textAlign:'center',
          color:'#fff',
          fontWeight:'bold',
      },
      otpText:{
          fontSize:24,
          fontWeight:'bold',
          color:'#fff',
          margin:20
      }
  });
  