import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import AppHeader from '../../../component/header/AppHeader'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import { Colors } from '../../../theme/Colors'
import { Images } from '../../../assets/images'
import { Fonts } from '../../../assets/fonts'
import { Icons } from '../../../assets/icons'
import AppButton from '../../../component/button/AppButton'




const PlanTab = ({ navigation }: any) => {
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        showLeftElement={false}
                        title="My Subscriptions"
                        SubTitle='1 plan'
                    />
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10, gap: 10 }}>
                        <View style={styles.rootContainer}>
                            <View style={[CommonStyle.flexStyle, { gap: 5, flex: 5, }]}>
                                <Image source={Images.KITCHEN_1} style={{ height: 70, width: 70, borderRadius: 15, alignSelf: "flex-start" }} resizeMode='cover' />
                                <View style={{ flex: 1 }}>
                                    <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", }]}>
                                        <Text style={styles.titleTxtStyle}>KitchenName</Text>
                                        <View style={[styles.dotContaner, { backgroundColor: "#def9e5" }]}>
                                            <View style={styles.dot} />
                                            <Text style={styles.mealTypeTxtStyle}>Veg</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.subTitle}>foodItem</Text>
                                </View>

                            </View>

                            <View style={styles.middleContainer}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.lableStyle}>1</Text>
                                    <Text style={styles.subLableStyle}>Meal left</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.lableStyle}>₹80</Text>
                                    <Text style={styles.subLableStyle}>Meal left</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.lableStyle}>Aug 29</Text>
                                    <Text style={styles.subLableStyle}>Meal left</Text>
                                </View>
                            </View>
                            <View style={[CommonStyle.flexStyle, { gap: 10, borderBottomColor: Colors.border, borderBottomWidth: 1, paddingBottom: 10 }]}>
                                <Image source={Icons.CALENDAR} style={{ height: 15, width: 15 }} resizeMode='contain' />
                                <Text>Today</Text>
                                <Text style={styles.pendingTxtStyle}>Pending</Text>
                            </View>
                            <View style={[CommonStyle.flexStyle, { flex: 1, gap: 10, paddingVertical: 10 }]}>
                                <AppButton lable='Skip today' buttonStyle={styles.skipButtonStyle} textStyle={[styles.buttonTextStyle, { color: Colors.textPrimary }]} />
                                <AppButton lable='Pause plan' buttonStyle={styles.pauseButtonStyle} textStyle={styles.buttonTextStyle} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaFile>
        </View>
    )
}

export default PlanTab

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        // ...CommonStyle.shadowStyle,

        // shadowColor: '#323232',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,

        // // Shadow - Android
        // elevation: 2,
        borderRadius: 15,

        borderWidth: 1,
        borderColor: Colors.border,

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
    middleContainer: {
        borderTopColor: Colors.border,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        ...CommonStyle.flexStyle,
        justifyContent: "space-around",
        paddingVertical: 10,
        marginVertical: 10
    },
    lableStyle: {
        fontSize: 14,
        color: Colors.textPrimary,
        fontFamily: Fonts.Poppins.SemiBold
    },
    subLableStyle: {
        fontSize: 14,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Medium
    },
    pendingTxtStyle: {
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 12,
        color: Colors.textSecondary,
        fontFamily: Fonts.Poppins.Regular,
        paddingVertical: 1
    },
    skipButtonStyle: {
        flex: 1,
        height: 40,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.border,
        ...CommonStyle.shadowStyle
    },
    pauseButtonStyle: {
        flex: 1,
        height: 40,
        ...CommonStyle.shadowStyle,
        backgroundColor: Colors.green
    },
    buttonTextStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 14
    }

})