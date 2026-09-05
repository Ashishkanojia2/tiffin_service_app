import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'

type ContainerPropsType = TouchableOpacityProps & {
    lable?: string,
    leftElement?: ReactNode,
    rightElement?: ReactNode,
    containerStyle?: ViewStyle,
    onPress?: () => void
    lableStyle?: TextStyle

}

const Container = ({
    lable,
    leftElement,
    rightElement,
    containerStyle,
    onPress,
    lableStyle,
    ...rest
}: ContainerPropsType) => {
    return (
        <TouchableOpacity {...rest} style={[styles.container, containerStyle]} activeOpacity={0.8} onPress={onPress}>
            {
                leftElement && leftElement
            }
            <Text style={[styles.textStyle, lableStyle]}>{lable}</Text>
            {
                rightElement && rightElement
            }
        </TouchableOpacity>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow - Android
        elevation: 2,
        ...CommonStyle.flexStyle,
        gap: 3,
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.border, overflow: "hidden",
    },
    textStyle: {
        fontFamily: Fonts.Inter.Regular,
        fontSize: 12,
        color: Colors.textSecondary
    }

})