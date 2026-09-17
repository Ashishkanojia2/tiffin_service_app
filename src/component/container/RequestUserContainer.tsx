import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'
import AppButton from '../button/AppButton'
type UserDataProps = {
    title?: String,
    lable?: string
    message?: string,
    tag?: string
}
type RequestUserContainerProps = {
    userData?: UserDataProps
    containerStyle?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>
    lableStyle?: StyleProp<TextStyle>
    messageStyle?: StyleProp<TextStyle>
    acceptButtonStyle?: StyleProp<ViewStyle>
    declineButtonStyle?: StyleProp<ViewStyle>
}

const RequestUserContainer = ({
    userData,
    containerStyle,
    titleStyle,
    lableStyle,
    messageStyle,
    acceptButtonStyle,
    declineButtonStyle,
}: RequestUserContainerProps) => {
    return (
        <View style={[styles.containerStyle, containerStyle]}>
            <View style={styles.innerTop}>
                <View>
                    <Text style={[styles.titleStyle, titleStyle]}>{userData?.title}</Text>
                    <Text style={[styles.lableStyle, lableStyle]}>{userData?.lable}</Text>
                </View>
                <Text style={styles.tagStyle}>{userData?.tag}</Text>
            </View>
            <Text style={[styles.lableStyle, messageStyle]}>{userData?.message}</Text>
            <View style={{ gap: 10, flexDirection: "row", marginTop: 10 }}>
                <AppButton lable='Decline'
                    buttonStyle={[styles.buttonStyle, { backgroundColor: Colors.background }, declineButtonStyle]}
                    buttonType='OUTLINE'
                    textStyle={{ color: Colors.textPrimary, fontFamily: Fonts.Poppins.Regular }}
                />
                <AppButton lable='Accept' buttonStyle={[styles.buttonStyle, acceptButtonStyle]}
                    textStyle={{ fontFamily: Fonts.Poppins.Regular }} />
            </View>
        </View>
    )
}

export default RequestUserContainer

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.white,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 15,
        gap: 7
    },
    innerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    tagStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 14,
        color: Colors.textPrimary,
        backgroundColor: Colors.light_yellow,
        paddingHorizontal: 10,
        borderRadius: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: Colors.border
    },
    titleStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 17,
        color: Colors.textPrimary,
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 14,
        color: Colors.textPrimary,
    },
    buttonStyle: {
        flex: 1,
        height: 40,

    }
})