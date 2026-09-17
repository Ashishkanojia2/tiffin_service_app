import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import { Icons } from '../../assets/icons'

const ReviewMessageContainer = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.topCopntainer}>
                <Text style={styles.titleStyle}>Ashish Kanojia</Text>
                <Text style={styles.lableStyle}>24 Aug</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <Image key={index} source={Icons.STAR_FILLED} tintColor={Colors.accent}
                            style={{ height: 15, width: 15 }}
                            resizeMode='contain' />
                    ))
                }
            </View>
            <Text style={styles.lableStyle}>Roti soft and food always on time. Feels like home.</Text>
        </View>
    )
}

export default ReviewMessageContainer

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 15,
        ...CommonStyle.shadowStyle,
        gap: 5

    }, topCopntainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 17,
        color: Colors.textPrimary,
        flex:3
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 14,
        color: Colors.textSecondary,
    }
})