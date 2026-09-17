import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Icons } from '../../assets/icons'
import { Colors } from '../../theme/Colors';


type IconContainerPropsType = {
    source: ImageSourcePropType,
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>
    size?: number,
    disablePress?: boolean,
    onPress?: () => void
}

const IconContainer = ({
    source,
    style,
    size,
    containerStyle,
    disablePress = false,
    onPress
}: IconContainerPropsType) => {
    return (
        <TouchableOpacity activeOpacity={0.8} disabled={disablePress} onPress={onPress} style={[styles.rootContainer, containerStyle]}>
            <Image source={source} style={style ? style : { height: size, width: size }} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default IconContainer

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        borderRadius: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.border
    }
})