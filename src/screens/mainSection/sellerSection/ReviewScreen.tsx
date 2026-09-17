import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../../component/header/AppHeader'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import ReviewMessageContainer from '../../../component/container/ReviewMessageContainer'
import { Colors } from '../../../theme/Colors'
import { Icons } from '../../../assets/icons'
import { Fonts } from '../../../assets/fonts'

const ReviewScreen = () => {
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        title="Reviews"
                        showDoubleTitle={false}
                    />
                    <View style={styles.mainReviewContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.titleStyle}>4.7</Text>
                            <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <Image key={index} source={Icons.STAR_FILLED} tintColor={Colors.accent}
                                            style={{ height: 15, width: 15 }}
                                            resizeMode='contain' />
                                    ))
                                }
                            </View>
                            <Text style={styles.lableStyle}>128 Reviews</Text>
                        </View>
                        <View style={styles.RightContainer}>
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <View key={index} style={CommonStyle.flexStyle}>
                                        <Text>{index + 1}</Text>
                                        <View style={styles.unfilledProgress}>
                                            <View style={styles.filledProgress} />
                                        </View>
                                    </View>
                                ))}
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10, gap: 10 }}>
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <ReviewMessageContainer key={index} />

                            ))
                        }
                    </ScrollView>
                </View>
            </SafeAreaFile>
        </View>
    )
}

export default ReviewScreen

const styles = StyleSheet.create({
    mainReviewContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 15,
        ...CommonStyle.shadowStyle,
        gap: 5,
        flexDirection: "row"
    },
    leftContainer: { gap: 10, alignItems: "center", flex: 1 },
    RightContainer: {
        flex: 2,
        gap: 4
    },
    titleStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 20,
        color: Colors.textPrimary,

    },
    lableStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 14,
        color: Colors.textSecondary,
    },
    unfilledProgress: {
        borderRadius: 15,
        width: "100%",
        backgroundColor: Colors.yellow,
        height: 10,
    },
    filledProgress: {
        borderRadius: 15,
        width: "40%",
        backgroundColor: Colors.accent,
        height: 10,
    }

})