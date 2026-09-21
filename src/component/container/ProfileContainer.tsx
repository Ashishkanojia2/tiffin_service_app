import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Images } from '../../assets/images'
import { Fonts } from '../../assets/fonts'
import Tag from '../tag/Tag'
type ProfileContainerProps = {
    onPress?: () => void,
}
const ProfileContainer = ({
    onPress,

}: ProfileContainerProps) => {
    return (
        <TouchableOpacity style={styles.rootContainer} activeOpacity={0.8} onPress={onPress}>
            <Image source={Images.KITCHEN_1} style={{ width: '100%', height: 150, borderTopRightRadius:15 , borderTopLeftRadius:15 }} />
            <View style={{ padding: 10, gap:5}}>
                <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                    <Text style={styles.titleStyle}>MealContainer</Text>
                    <Tag tagCategory='MEAL' MealType='Veg'/>
                </View>
                <Text style={styles.locationTxtStyle}>1234567890</Text>
                <Text style={styles.menuTxt}>Rajeev Nagar, near Allen Coaching</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileContainer


const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.shadowStyle,
    },
    titleStyle: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.textPrimary
    },
    locationTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Inter.Regular,
        color: Colors.textSecondary
    },
    menuTxt: {
        fontSize: 16,
        fontFamily: Fonts.Inter.Regular,
        color: Colors.textPrimary
    },
})