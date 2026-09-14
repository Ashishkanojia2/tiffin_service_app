import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppLogo from '../../component/other/AppLogo'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import AppButton from '../../component/button/AppButton'
import InputField from '../../component/input/InputField'
import Storage from '../../utils/Storage'
const OtpVerificationScreen = ({ navigation }: any) => {
    const OTP_LENGTH = 6
    const RESEND_TIME = 50
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
    const [timer, setTimer] = useState(RESEND_TIME)
    const [errorMsg, setErrorMsg] = useState('')
    const inputRefs = useRef<Array<TextInput | null>>([])
    const [userType, setUserType] = useState('')

    const getUserType = async () => {
        const userType = await Storage.getItem({ key: 'userType' })
        console.log('userType:', userType)
        setUserType(userType || '')
    }
    useEffect(() => {
        getUserType()
    }, [])

    useEffect(() => {
        if (timer === 0) {
            return
        }
        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    const handleOtpChange = (value: string, index: number) => {

        // Only allow numbers
        const numericValue = value.replace(/[^0-9]/g, '')

        const newOtp = [...otp]
        newOtp[index] = numericValue
        setOtp(newOtp)

        // Move to next input
        if (numericValue && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }
    const handleKeyPress = (
        e: any,
        index: number
    ) => {

        if (
            e.nativeEvent.key === 'Backspace' &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus()
        }
    }
    const handleResendOtp = () => {

        if (timer > 0) {
            return
        }
        setOtp(Array(OTP_LENGTH).fill(''))
        setTimer(RESEND_TIME)

        inputRefs.current[0]?.focus()
    }
    const handleContinue = () => {

        if (userType === 'buyer') {
            navigation.navigate('ChooseLocationScreen')
        } else if (userType === 'seller') {
            navigation.navigate('KitchenRegisterScreen')
        }
        // navigation.navigate('SubscriptionScreen')
        // const otpValue = otp.join('')

        // if (otpValue.length !== OTP_LENGTH) {
        //     // Show validation message
        //     console.log('Please enter complete OTP')
        //     return
        // }
        // console.log('OTP:', otpValue)
    }

    return (
        <View style={CommonStyle.appBorderSpacing}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppLogo size={100} />
                <Text style={styles.titleStyle}>Verify your number</Text>
                <Text style={styles.subTitle}>We sent a 6-digit code to +91 1234567890</Text>
                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <InputField
                            key={index}
                            ref={(ref: TextInput | null) => {
                                inputRefs
                                    .current[index] = ref
                            }}
                            inputContainerStyle={{
                                width: 58,
                                height: 54,

                            }}
                            style={{
                                textAlign: 'center',
                            }}

                            maxLength={1}
                            keyboardType="number-pad"
                            value={value}
                            onChangeText={(text) => {
                                handleOtpChange(text, index)
                            }}
                            onKeyPress={(e) => {
                                handleKeyPress(e, index)
                            }}
                        />
                    ))}

                </View>
                {
                    errorMsg !== '' ?
                        <View style={styles.labelStyle}>
                            <Text style={[styles.labelTxt, { color: Colors.error }]}>{errorMsg}dedededed</Text>
                        </View>
                        : <View />
                }
                <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", marginTop: 15 }]}>
                    <TouchableOpacity activeOpacity={0.8} onPress={handleResendOtp} disabled={timer != 0}>
                        <Text style={[styles.bottomTxt, { color: timer == 0 ? Colors.primary : Colors.textSecondary }]}>Didn't Get Verification Code?</Text>
                    </TouchableOpacity>
                    <Text style={styles.timmerTxt}>
                        00:{timer.toString().padStart(2, '0')}
                    </Text>
                </View>
            </ScrollView>
            <AppButton lable='Verify & Continue' onPress={handleContinue} />
            <Text style={styles.policyMsg}>By continuing you agree to our Terms & Privacy Policy</Text>
        </View>
    )
}

export default OtpVerificationScreen

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
    selectedOption: {
        backgroundColor: Colors.white,
    },
    unSelectedOption: {
    },
    policyMsg: {
        fontSize: 12,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        marginTop: 10,
        textAlign: "center"
    },
    otpContainer: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 50
    },
    labelTxt: {
        fontSize: 13,
        marginBottom: 4,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.black,
    },
    labelStyle: {
        flexDirection: "row",
    },
    timmerTxt: {
        fontFamily: Fonts.Inter.Regular,
        color: Colors.textSecondary,
        fontSize: 15,
        // marginTop: 28
    },
    bottomTxt: {
        fontFamily: Fonts.Inter.Regular,
        fontSize: 14,
        // marginTop: 10,
        // marginBottom: 28
    },
})