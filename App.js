import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import { FIREBASE_AUTH } from "./config/firebase";
import config from "./tamagui.config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from "./app/screens/List";
import Details from "./app/screens/List";




const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Wealth Wise" component={List} />
      <InsideStack.Screen name="Details" component={Details} />

    </InsideStack.Navigator>
  );
}
export default function App() {
  const [user, setUser] = useState(null); // Removed User type annotation
  

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user: ', user);
      setUser(user)
    })
  })
  
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            {user ? (
              <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
