import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppLogo from '../../component/other/AppLogo'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import MobileInputField from '../../component/input/MobileInputField'
import AppButton from '../../component/button/AppButton'
import Segement from '../../component/segement'
import Storage from '../../utils/Storage'

const loginUser = [
    {
        id: "buyer",
        lable: "Login as Buyer",
    },
    {
        id: "seller",
        lable: "Login as Seller"
    }
]
const LoginScreen = ({ navigation }: any) => {
    const [selectedUser, setSelectedUser] = useState("buyer")

    const loginHandler = async () => {
        try {
            await Storage.setItem({ key: 'userType', value: selectedUser })
            navigation.navigate("OtpVerificationScreen")
        } catch (error) {
            throw error
        }
    }

    return (
        <View style={CommonStyle.appBorderSpacing}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppLogo size={100} />
                <Text style={styles.titleStyle}>Welcome to TiffinWala</Text>
                <Text style={styles.subTitle}>Login with your mobile number to continue</Text>
                <Segement segementData={loginUser} selectedValue={(txt: string) => setSelectedUser(txt)} containerStyle={{ marginTop: 30 }} />
                <MobileInputField containerStyle={{ marginVertical: 20 }} />
            </ScrollView>
            <AppButton lable='Send OTP' onPress={loginHandler} />
            <Text style={styles.policyMsg}>By continuing you agree to our Terms & Privacy Policy</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.textPrimary
    },
    subTitle: {
        fontSize: 14,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        marginTop: 10
    },
    userContainer: {
        borderRadius: 15,
        backgroundColor: Colors.light_yellow,
        padding: 3,
        flexDirection: "row",
        gap: 5,
        marginTop: 30
    },
    baseOptionContainerStyle: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow - Android
        elevation: 2,
    },
    selectedOption: {
        backgroundColor: Colors.white,
    },
    unSelectedOption: {
    },
    optionTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: Colors.primary
    },
    policyMsg: {
        fontSize: 12,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        marginTop: 10,
        textAlign: "center"
    }
})