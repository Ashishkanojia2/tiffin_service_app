import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import AppButton from '../button/AppButton'

export type MenuContainerPropsType = {
    data: MenuDataPropsType,
    RatePress?: () => void,

}
export type MenuDataPropsType = {
    id?: string
    KitchenName?: string,
    foodItem?: string,
    date?: string,
    amount?: string,
    isRated?: boolean,
    onPress?: () => void,
    image?: ImageSourcePropType
}

const MenuContainer = ({
    data,
    RatePress
}: MenuContainerPropsType) => {
    return (
        <TouchableOpacity style={styles.rootContainer} activeOpacity={0.8} onPress={data.onPress} key={data.id}>
            <View style={[CommonStyle.flexStyle, { gap: 5, flex: 5, }]}>
                <Image source={data?.image} style={{ height: 70, width: 70, borderRadius: 15, alignSelf: "flex-start" }} resizeMode='cover' />
                <View style={{ flex: 1 }}>
                    <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", }]}>
                        <Text style={styles.titleTxtStyle}>{data.KitchenName}</Text>
                        <View style={[styles.dotContaner, {
                            backgroundColor: "#def9e5",
                        }]}>
                            <View style={styles.dot} />
                            <Text style={styles.mealTypeTxtStyle}>Veg</Text>
                        </View>
                    </View>
                    <Text style={styles.subTitle}>{data.foodItem}</Text>
                    <Text style={styles.amtStyle}>₹ {data.amount}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default MenuContainer

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        ...CommonStyle.shadowStyle,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        ...CommonStyle.flexStyle,
        justifyContent: "space-between",
    },
    amtStyle: {
        fontSize: 16,
        color: Colors.primary,
        fontFamily: Fonts.Poppins.SemiBold
    },
    ratedTxtStyle: {
        fontSize: 14,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Regular
    },
    titleTxtStyle: {
        fontSize: 15,
        color: Colors.textPrimary,
        fontFamily: Fonts.Poppins.SemiBold,
        flex: 1
    },
    subTitle: {
        fontSize: 14,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Medium
    },
    rateBtn: {
        width: 60,
        height: 27,
        backgroundColor: Colors.background,
        ...CommonStyle.shadowStyle,
        borderWidth: 1,
        borderColor: Colors.border
    },
    dotContaner: {
        ...CommonStyle.flexStyle,
        justifyContent: "space-between",
        gap: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignSelf: "flex-start"
    },
    dot: {
        width: 10, height: 10,
        backgroundColor: Colors.vegDot,
        borderRadius: 20,
    },
    mealTypeTxtStyle: {
        fontSize: 11,
        color: Colors.vegDot,
        fontFamily: Fonts.Poppins.Medium
    },

})