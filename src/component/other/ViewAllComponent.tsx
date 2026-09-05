import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'

type ViewAllComponentProps = {
    rightTxt?: string
    lable: string
    onRightPress?: () => void,
    lableStyle?: TextStyle
    rightLableStyle?: TextStyle,
    ContaineStyle?: ViewStyle
}
const ViewAllComponent = ({
    rightTxt,
    onRightPress,
    lableStyle,
    rightLableStyle,
    lable,
    ContaineStyle

}: ViewAllComponentProps) => {
    return (
        <View style={[styles.rootContainer, ContaineStyle]}>
            <Text style={[styles.leftTxtStyle, lableStyle]}>{lable}</Text>
            {
                rightTxt &&
                <TouchableOpacity activeOpacity={0.8} onPress={onRightPress}>
                    <Text style={[styles.rightTxtStyle, rightLableStyle]}>{rightTxt}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default ViewAllComponent

const styles = StyleSheet.create({
    rootContainer: {
        ...CommonStyle.flexStyle,
        justifyContent: "space-between"
    },
    leftTxtStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 15,
        color: Colors.textPrimary
    },
    rightTxtStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 13,
        color: Colors.textSecondary
    }
})