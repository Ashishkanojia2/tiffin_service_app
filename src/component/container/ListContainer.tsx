import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Images } from '../../assets/images'
import { Fonts } from '../../assets/fonts'
import AppButton from '../button/AppButton'

export type ListContainerPropsType = {
    data: ListDataPropsType,
    RatePress?: () => void,

}
export type ListDataPropsType = {
    id?: string
    KitchenName?: string,
    foodItem?: string,
    date?: string,
    amount?: string,
    isRated?: boolean,
    onPress?: () => void,
    image?: ImageSourcePropType
}

const ListContainer = ({
    data,
    RatePress
}: ListContainerPropsType) => {
    return (
        <TouchableOpacity style={styles.rootContainer} activeOpacity={0.8} onPress={data.onPress} key={data.id}>
            <View style={[CommonStyle.flexStyle, { gap: 5, flex: 5, }]}>
                <Image source={data?.image} style={{ height: 60, width: 60, borderRadius: 15 }} resizeMode='cover' />
                <View style={{ flex: 1 }}>
                    <Text style={styles.titleTxtStyle}>{data.KitchenName}</Text>
                    <Text style={styles.subTitle}>{data.foodItem}</Text>
                    <Text style={styles.subTitle}>{data.date}</Text>
                </View>

            </View>
            <View style={{ flex: 1, alignItems: "flex-end", gap: 5 }}>
                <Text style={styles.amtStyle}>₹ {data.amount}</Text>
                {
                    data.isRated ?
                        <Text style={styles.ratedTxtStyle}>Rated</Text>
                        :
                        <AppButton
                            lable='Rate'
                            buttonStyle={styles.rateBtn}
                            textStyle={{ color: Colors.textPrimary, fontFamily: Fonts.Inter.Regular , fontSize:14}}
                            onPress={RatePress}
                        />
                }
            </View>
        </TouchableOpacity>
    )
}

export default ListContainer

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        // ...CommonStyle.shadowStyle,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,

        // // Shadow - Android
        // elevation: 4,
        borderWidth: 1,
        borderColor: Colors.border,
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
        fontFamily: Fonts.Poppins.SemiBold
    },
    subTitle: {
        fontSize: 11,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Medium
    },
    rateBtn: {
        width: 50,
        height: 25,
        backgroundColor: Colors.background,
        // ...CommonStyle.shadowStyle,
        borderWidth: 1,
        borderColor: Colors.border
    }

})