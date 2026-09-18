import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import { Icons } from '../../assets/icons'

export type ReviewDataPropType = {
    id?: string
    name?: string,
    userRating: number,
    message?: string,
    date: string

}
export type ReviewContainerType = {
    data: ReviewDataPropType,
}

const ReviewContainer = ({
    data,
}: ReviewContainerType) => {
    return (
        <View style={styles.rootContainer} key={data.id}>
            <View style={[CommonStyle.flexStyle, { gap: 5, flex: 5, }]}>
                <View style={{ flex: 1 }}>
                    <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", }]}>
                        <Text style={styles.titleTxtStyle}>{data.name}</Text>
                        <Text style={styles.dateStyle}>{data.date}</Text>
                    </View>
                    <View style={[CommonStyle.flexStyle, { marginVertical: 5, gap: 2 }]}>
                        {Array.from({ length: 5 }).map((_, index) => {
                            const rating = index + 1;
                            return (
                                <Image
                                    source={
                                        rating <= data.userRating || 0
                                            ? Icons.STAR_FILLED
                                            : Icons.STAR_OUTLINE
                                    }
                                    style={{ height: 13, width: 13 }}
                                    resizeMode="contain"
                                />
                            );
                        })}
                    </View>
                    <Text style={styles.subTitle}>{data.message}</Text>
                </View>
            </View>
        </View>
    )
}

export default ReviewContainer

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
    dateStyle: {
        fontSize: 11,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Medium
    },

})