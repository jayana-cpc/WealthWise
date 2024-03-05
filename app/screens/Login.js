import React, { useState } from "react";
import { View, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { FIREBASE_AUTH } from "../../config/firebase";
import { Input, Button  } from 'tamagui'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {
    GoogleSignin,
    GoogleSigninButton,
  } from "@react-native-google-signin/google-signin";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState();
    const [userInfo, setUserInfo] = useState();
    const auth = FIREBASE_AUTH;

    //Normal Email and Password Sign In/Up
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Success!');
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check Your Emails');
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    //Google Sign In/Out
    useEffect(() => {
        GoogleSignin.configure({
          webClientId:
            "1038265631668-1hu3gkmsd8g9i9cqd2crdcdcvgs2cpt2.apps.googleusercontent.com",
        });
      }, []);
    const googleSignIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const user = await GoogleSignin.signIn();
          setUserInfo(user);
          setError();
        } catch (e) {
          setError(e);
        }
      };
    
    const googleLogOut = () => {
        setUserInfo();
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
      };
    return (
        <View>
            <KeyboardAvoidingView behavior="padding" >
                <Input  value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></Input>
                <Input  secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></Input>

                { loading ? (<ActivityIndicator size="large" color="0000ff" />
                ) : (
                <>
                    <Button onPress={signIn}> Login </Button>
                    <Button onPress={signUp}> Create Account </Button>
                </>
                )}
                <Text>{JSON.stringify(error)}</Text>
                    {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
                    {userInfo ? (
                        <Button title="Logout" onPress={googleLogOut} />
                    ) : (
                        <GoogleSigninButton
                        size={GoogleSigninButton.Size.Standard}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={googleSignIn}
                        />
                    )}
            </KeyboardAvoidingView>
        </View>
    );

}

export default Login;