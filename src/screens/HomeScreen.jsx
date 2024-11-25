import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/font';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    const handleSignup = () => {
        navigation.navigate("Signup");
    };

  return (
    <View style={styles.container}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
        <Image source={require("../assets/images/man.webp")} style={styles.man}/>
        <Text style={styles.title}>Welcome to our app</Text>
        <Text style={styles.subTitle}>an online video platform offering variety of Telugu content from ETV Network channels as well as original productions, with many attractive features</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper, 
            { backgroundColor: colors.primary }
            ]} onPress={handleLogin}
            >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

            <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup} >
                <Text style={styles.signupButtonText}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1, 
    },
    logo:{
        width:120,
        height:120,
        marginVertical : 20,
        alignSelf:'center'     
    },
    man:{
        height : 290,
        width : 300,
        marginVertical : 40,
        alignSelf:'center'
    },
    title:{
        fontSize: 36,
        fontFamily: fonts.SemiBold, 
        paddingHorizontal : 45,
        textAlign : 'center',
        color:colors.primary,
        marginTop :0,
    },
    subTitle :{
        fontSize : 18,
        textAlign : 'center',
        color : colors.secondary,
        fontFamily : fonts.Medium,
        paddingHorizontal : 30,
        marginVertical : 10
    },
    buttonContainer:{
        marginTop : 20,
        flexDirection : "row",
        // backgroundColor:'red',
        marginHorizontal:20, 
        justifyContent:'space-between',
        alignSelf:'center',
        borderWidth : 2,
        borderColor : colors.primary,
        width : '80%',
        height : 60,
        borderRadius : 100,
    },
    loginButtonWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            width: "50%",
            borderRadius: 98,
    },
    loginButtonText:{
        color : colors.white,
        fontSize : 18,
        fontFamily: fonts.SemiBold,
    },
    signupButtonText:{
        fontSize: 18,
        fontFamily : fonts.SemiBold,
    }
});