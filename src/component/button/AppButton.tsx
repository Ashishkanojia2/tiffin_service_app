import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'

type AppButtonStyle = {
    buttonStyle?: ViewStyle,
    textStyle?: TextStyle,
    onPress?: () => void,
    outlineStyle?: boolean,
    lable: string,
    buttonType?: "FIELD" | "OUTLINE",
    prefix?: ReactNode
    sufix?: ReactNode
}

const AppButton = ({
    buttonStyle,
    textStyle,
    onPress,
    lable = 'App_Button',
    prefix,
    sufix,
    buttonType = "FIELD"
}: AppButtonStyle) => {
    let isFieldButton = buttonType == "FIELD"
    return (
        <TouchableOpacity style={[styles.baseButtonStyle,
        isFieldButton ? styles.fieldButton : styles.outlineButton, buttonStyle]} activeOpacity={0.7} onPress={onPress}>
            {
                prefix && <View>{prefix}</View>
            }
            <Text style={[styles.txtStyle, { color: isFieldButton ? Colors.background : Colors.primary }, textStyle]}>{lable}</Text>
            {
                sufix && <View>{sufix}</View>
            }
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    baseButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,
        flexDirection: "row",
        width: '100%',
        height: 50,
    },

    fieldButton: {
        backgroundColor: Colors.primary,

    },
    outlineButton: {
        borderWidth: 2,
        borderColor: Colors.border,
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
    txtStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 16,
    }
})