import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import React, { useState } from 'react'; // Add useState import
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/font';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true); // Correctly initialize useState

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Back button */}
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons 
                    name={"arrow-back-outline"} 
                    color={colors.primary} 
                    size={25} 
                />
            </TouchableOpacity>

            {/* Welcome text */}
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                {/* Email input */}
                <View style={styles.inputContainer}>
                    <Ionicons 
                        name={"mail-outline"} 
                        size={30} 
                        color={colors.secondary} 
                    />
                    <TextInput 
                        style={styles.textinput}
                        placeholder="Enter Your Email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                    />
                </View>

                {/* Password input */}
                <View style={styles.inputContainer}>
                    <Ionicons 
                        name={"lock-closed"} 
                        size={30} 
                        color={colors.secondary} 
                    />
                    <TextInput 
                        style={styles.textinput}
                        placeholder="Enter Your Password"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureEntry((prev) => !prev)} // Corrected function
                    >
                        <Feather 
                            name={secureEntry ? "eye" : "eye-off"} // Toggle eye icon
                            size={20} 
                            color={colors.secondary} 
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forget password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source = {require("../assets/images/google.png")} style={styles.googleImage}/>
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerText}>
                    <Text style={styles.accountText}>Don't have an account ?</Text>
                    <Text style={styles.signUpText}>Sign up</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        height: 50,
        width: 50,
        backgroundColor: colors.gray,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.semiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginVertical: 10,
    },
    textinput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: 'black',
    },
    forgotPasswordText:{
        textAlign : "right",
        color : colors.primary,
        fontFamily: fonts.semiBold,
        marginVertical : 10,
    },
    loginButtonWrapper:{
        backgroundColor : colors.primary,
        borderRadius : 100,
        marginTop : 20,
    },
    loginText:{
        color : colors.white,
        fontSize: 18,
        fontFamily: fonts.semiBold,
        textAlign: "center",
        padding: 20
    },
    continueText:{
        textAlign: "center",
        marginVertical : 20,
        fontSize : 14,
        fontFamily : fonts.regular,
        color: colors.primary,
    },
    googleButtonContainer:{
        flexDirection: 'row',
        borderWidth : 2,
        borderColor : colors.primary,
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 20,
        gap : 10
    },
    googleImage:{
        height : 20,
        width : 20,
    },
    googleText:{
        fontSize : 20,
        fontFamily : fonts.semiBold,
    },
    footerText :{
        textAlign : "center",
        justifyContent : "center",
        color : colors.primary,
        fontSize : 14,
        marginVertical : 20,
        flexDirection : 'row',
        gap : 10
    },
    accountText :{
        color : colors.primary,
        fontFamily : fonts.Regular,
    },
    signUpText :{
        color : colors.primary,
        fontFamily: fonts.Bold,
    },
});
