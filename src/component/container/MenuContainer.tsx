import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import AppButton from '../button/AppButton'
import IconContainer from '../other/IconContainer'
import { Icons } from '../../assets/icons'
import Tag from '../tag/Tag'

export type MenuContainerPropsType = {
    data: MenuDataPropsType,
    isEditable?: boolean,
    onEditPress?: () => void

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
    isEditable = false,
    onEditPress
}: MenuContainerPropsType) => {
    return (
        <TouchableOpacity style={styles.rootContainer} activeOpacity={0.8} onPress={data.onPress} key={data.id}>
            <View style={[CommonStyle.flexStyle, { gap: 5, flex: 5, }]}>
                <Image source={data?.image} style={{ height: 70, width: 70, borderRadius: 15, alignSelf: "flex-start" }} resizeMode='cover' />
                <View style={{ flex: 1 }}>
                    <View style={[CommonStyle.flexStyle, { gap: isEditable ? 10 : 0 }]}>
                        <Text style={[styles.titleTxtStyle, { flex: isEditable ? 0 : 1 }]}>{data.KitchenName}</Text>
                        <Tag tagCategory='MEAL' MealType='Veg' />
                    </View>
                    <Text style={styles.subTitle}>{data.foodItem}</Text>
                    <Text style={styles.amtStyle}>₹ {data.amount}</Text>
                </View>
                {
                    isEditable &&
                    <IconContainer source={Icons.EDIT} style={{ height: 20, width: 20 }} onPress={onEditPress} />
                }

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
        // 
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