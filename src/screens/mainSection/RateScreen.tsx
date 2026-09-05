import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import AppButton from '../../component/button/AppButton'
import AppHeader from '../../component/header/AppHeader'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../assets/fonts'
import { Icons } from '../../assets/icons'
import Container from '../../component/container/Container'
import InputField from '../../component/input/InputField'

const starLength = 5
const quickResponseData = [
    {
        lable: "Tasty",

    },
    {
        lable: "Hot & fresh"
    },
    {
        lable: "Good quantity"
    },
    {
        lable: "On time"
    },
    {
        lable: "Too oily"
    },
    {
        lable: "Late delivery"
    }
]
const RateScreen = ({ navigation }: any) => {
    const [selectQickFeecback, setSelectQuickFeedback] = useState<string[]>([])
    const [starRating, setStarRating] = useState(0)
    const quickResponseHandler = (lable: string) => {
        if (!lable) return
        const isExist = selectQickFeecback.find((item) => item === lable)
        if (isExist) {
            setSelectQuickFeedback(selectQickFeecback.filter((pre) => pre !== lable))
        } else {
            setSelectQuickFeedback((pre) => [...pre, lable])
        }
    }

    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        title="Rate your tiffin"
                        showDoubleTitle={false}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                        <View style={styles.ratingStartContainer}>
                            <Text style={styles.textStyle}>How was the food?</Text>

                            <View style={[CommonStyle.flexStyle, { gap: 7, marginVertical: 10 }]}>
                                {Array.from({ length: starLength }).map((_, index) => {
                                    const rating = index + 1;
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setStarRating(rating)}
                                            activeOpacity={0.8}
                                        >
                                            <Image
                                                source={
                                                    rating <= starRating
                                                        ? Icons.STAR_FILLED
                                                        : Icons.STAR_OUTLINE
                                                }
                                                style={{ height: 30, width: 30 }}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                        <Text style={styles.lableStyle}>Quick feedback</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                            {
                                quickResponseData.map((item) => (
                                    <Container lable={item.lable} onPress={() => quickResponseHandler(item.lable)}
                                        containerStyle={{
                                            backgroundColor: selectQickFeecback.find((i) => i == item.lable) ? Colors.primary : Colors.background
                                        }}
                                        lableStyle={{
                                            color: selectQickFeecback.find((i) => i == item.lable) ? Colors.white : Colors.textSecondary
                                        }}
                                    />
                                ))
                            }
                        </View>
                        <Text style={styles.lableStyle}>Write a review (Optional)</Text>
                        <InputField
                            multiline
                            style={{
                                minHeight: 150,
                            }}
                            inputWrapperStyle={{
                                padding: 10
                            }}
                            placeholder='Write something here...'
                        />
                    </ScrollView>
                    <AppButton
                        lable='Submit Rating'
                        buttonType='FIELD'
                    />
                </View>
            </SafeAreaFile>
        </View>
    )
}

export default RateScreen

const styles = StyleSheet.create({
    ratingStartContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.shadowStyle,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    textStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 15,
        color: Colors.textSecondary
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 15,
        color: Colors.textPrimary,
        marginTop: 20,
        marginBottom: 10
    }
})