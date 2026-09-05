import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Images } from '../../assets/images'
import { Fonts } from '../../assets/fonts'
import { Icons } from '../../assets/icons'
type MealContainerProps = {
    onPress?: () => void
}
const MealContainer = ({
    onPress,

}: MealContainerProps) => {
    return (
        <TouchableOpacity style={styles.rootContainer} activeOpacity={0.8} onPress={onPress}>
            <Image source={Images.KITCHEN_1} style={{ width: '100%', height: 150 }} />
            <View style={{ padding: 10, gap: 10 }}>
                <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                    <Text style={styles.titleStyle}>MealContainer</Text>
                    <View style={[styles.dotContaner, {
                        backgroundColor: "#def9e5"
                    }]}>
                        <View style={styles.dot} />
                        <Text style={styles.mealTypeTxtStyle}>Veg</Text>
                    </View>
                </View>
                <Text style={styles.locationTxtStyle}>MealContainer</Text>
                <Text style={styles.menuTxt}>Today: Aloo Gobhi, Dal, Rice, 4 Roti</Text>

                <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                    <Text style={styles.priceTxtStyle}>
                        ₹ 70 <Text style={styles.mealTxtStyle}>/ meal</Text>
                    </Text>
                    <TouchableOpacity style={CommonStyle.flexStyle} activeOpacity={0.8} onPress={onPress}>
                        <Text style={styles.viewAllStyle}>View Menu</Text>
                        <Image source={Icons.RIGHT_ARROW} style={{ height: 20, width: 20 }} tintColor={Colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MealContainer

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.shadowStyle,
        overflow: "hidden"
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
    priceTxtStyle: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.primary
    },
    perMealTxt: {},
    viewAllStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: Colors.primary
    },
    dot: {
        width: 10, height: 10,
        backgroundColor: Colors.vegDot,
        borderRadius: 20,
    },
    mealTypeTxtStyle: {

    },
    mealTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: Colors.textSecondary
    },
    dotContaner: {
        ...CommonStyle.flexStyle,
        justifyContent: "space-between",
        gap: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    }
})