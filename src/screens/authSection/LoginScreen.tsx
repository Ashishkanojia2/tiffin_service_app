import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppLogo from '../../component/other/AppLogo'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import MobileInputField from '../../component/input/MobileInputField'
import AppButton from '../../component/button/AppButton'

const loginUser = [
    {
        id: "1",
        lable: "Login as Byuer",
    },
    {
        id: "2",
        lable: "Login as Seller"
    }
]
const LoginScreen = ({ navigation }: any) => {
    const [selectedUser, setSelectedUser] = useState("1")


    return (
        <View style={CommonStyle.appBorderSpacing}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppLogo size={100} />
                <Text style={styles.titleStyle}>Welcome to TiffinWala</Text>
                <Text style={styles.subTitle}>Login with your mobile number to continue</Text>

                <View style={styles.userContainer}>
                    {
                        loginUser.map((item) => {

                            return (
                                <TouchableOpacity key={item.id} activeOpacity={0.8}
                                    style={[styles.baseOptionContainerStyle, {
                                        backgroundColor: selectedUser === item.id ? Colors.white : "transparent"
                                    }]}
                                    onPress={() => setSelectedUser(item.id)}>
                                    <Text style={[styles.optionTxtStyle, {
                                        color: selectedUser === item.id ? Colors.primary : Colors.textSecondary
                                    }]}>{item.lable}</Text>
                                </TouchableOpacity>
                            )
                        }
                        )
                    }

                </View>
                <MobileInputField containerStyle={{ marginVertical: 20 }} />
            </ScrollView>
            <AppButton lable='Send OTP' onPress={() => navigation.navigate("OtpVerificationScreen")} />
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