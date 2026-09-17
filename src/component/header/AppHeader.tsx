import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Icons } from '../../assets/icons'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import IconContainer from '../other/IconContainer'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { useNavigation } from '@react-navigation/native'


export type AppHeaderPropsType = {
    subTitlePress?: () => void,
    leftPress?: () => void,
    title?: string,
    SubTitle?: string,
    showDoubleTitle?: Boolean
    rightElement?: ReactNode,
    showLeftElement?: Boolean,
    customeSubTitle?: ReactNode,
    containerStyle?: ViewStyle
}

const AppHeader = ({
    subTitlePress,
    title = "title",
    SubTitle = "subTitle",
    showDoubleTitle = true,
    rightElement,
    leftPress,
    showLeftElement = true,
    customeSubTitle,
    containerStyle

}: AppHeaderPropsType) => {
    const navigation = useNavigation()
    const handleBackPress = () => leftPress ? leftPress() : navigation.canGoBack() ? navigation.goBack() : undefined

    return (
        <View style={[styles.rootContainer, containerStyle]}>
            <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                {
                    showLeftElement &&
                    <IconContainer source={Icons.LeftArrow} style={{ height: 20, width: 20 }} onPress={handleBackPress} />
                }

                <View>
                    <Text style={styles.title}>{title}</Text>
                    {
                        showDoubleTitle && (
                            customeSubTitle ? customeSubTitle :
                                <TouchableOpacity activeOpacity={0.8} onPress={subTitlePress}>
                                    <Text style={styles.subTilte}>{SubTitle}</Text>
                                </TouchableOpacity>
                        )
                    }
                </View>
            </View>
            {
                rightElement ? rightElement : <View style={{ height: 20, width: 20 }} />
            }
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    rootContainer: {
        paddingVertical: 7,
        ...CommonStyle.flexStyle,
        justifyContent: "space-between"
    },
    title: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 18,
        color: Colors.textPrimary
    },
    subTilte: {
        fontFamily: Fonts.Inter.Medium,
        fontSize: 12,
        color: Colors.textSecondary
    }
})
