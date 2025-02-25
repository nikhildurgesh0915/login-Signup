import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SingupScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
} 

export default App

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : 'white',
  },
});