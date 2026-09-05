import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../component/header/AppHeader'
import ViewAllComponent from '../../../component/other/ViewAllComponent'
import { Icons } from '../../../assets/icons'
import { Colors } from '../../../theme/Colors'
import { Fonts } from '../../../assets/fonts'
import InputField from '../../../component/input/InputField'
import AppButton from '../../../component/button/AppButton'

const planTypeData = [
    {
        id: "1",
        plantype: "Daily",
        planPeriod: "1 day",
        offer: "",
        price: "140",
    },
    {
        id: "2",
        plantype: "Weekly",
        planPeriod: "7 days",
        offer: "save 5%",
        price: "931",
    },
    {
        id: "3",
        plantype: "Monthly",
        planPeriod: "30 days",
        offer: "save 12%",
        price: "3696",
    },
];

const deliverModeData = [
    {
        id: "1",
        title: "Home / PG delivery",
        subTitle: "Hot tiffin at your door"
    },
    {
        id: "2",
        title: "Self pickup",
        subTitle: "Collect from Rajeev Nagar, near Allen Coaching"
    },

];

const mealType = [
    {
        id: "1",
        mealType: "Lunch"
    },
    {
        id: "2",
        mealType: "Dinner"
    },
    {
        id: 3,
        mealType: "Both"
    }
]
const foodPreference = [
    {
        id: "1",
        mealType: "Veg"
    },
    {
        id: "2",
        mealType: "Non-Veg"
    },

]

const SubscriptionScreen = ({navigation}:any) => {
    const [selectedPlan, setSelectedPlan] = useState('Monthly')
    const [selectedMeal, setSelectedMeal] = useState('Both')
    const [preferenceType, setPreferenceType] = useState("Veg")
    const [selectedDeliveryMode, setSelectedDeliveryMode] = useState("1")
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}  >
                    <AppHeader title='Choose Your Plan' SubTitle='Annupurma Kitchen' />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ViewAllComponent lable='Plan type' ContaineStyle={styles.viewAllContainerStyle} />
                        {
                            planTypeData.map((item) => (
                                <TouchableOpacity style={[styles.planContainer, selectedPlan == item.plantype ? styles.selectedPlanContainer : undefined]}
                                    activeOpacity={0.7}
                                    onPress={() => setSelectedPlan(item.plantype)} key={item.id}>
                                    <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                                        <Image source={Icons.SEARCH} style={[styles.radioImage]} resizeMode='contain' />
                                        <View>
                                            <Text style={styles.titleTxtStyle}>{item.plantype}</Text>
                                            <Text style={styles.subTitleStyle}>{item.planPeriod}{'   '}{item.offer}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.amtTxtStyle}>₹ {item.price}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        <ViewAllComponent lable='Meal' ContaineStyle={styles.viewAllContainerStyle} />
                        <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                            {
                                mealType.map((item) => (
                                    <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => setSelectedMeal(item.mealType)}
                                        style={[styles.mealContainer, selectedMeal === item.mealType ? styles.selectedMealContainer : undefined]}
                                    >
                                        <Text style={[styles.mealTxtStyle, { color: selectedMeal == item.mealType ? Colors.white : undefined }]}>{item.mealType}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <ViewAllComponent lable='Food preference' ContaineStyle={styles.viewAllContainerStyle} />
                        <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                            {
                                foodPreference.map((item) => (
                                    <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => setPreferenceType(item.mealType)}
                                        style={[styles.mealContainer, preferenceType === item.mealType ? styles.selectedMealContainer : undefined]}
                                    >
                                        <Text style={[styles.mealTxtStyle, { color: preferenceType == item.mealType ? Colors.white : undefined }]}>{item.mealType}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <ViewAllComponent lable='Delivery mode' ContaineStyle={styles.viewAllContainerStyle} />
                        {
                            deliverModeData.map((item) => (
                                <TouchableOpacity style={[styles.planContainer, selectedDeliveryMode == item.id ? styles.selectedPlanContainer : undefined]} activeOpacity={0.7} onPress={() => setSelectedDeliveryMode(item.id)} key={item.id}>
                                    <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                                        <Image source={Icons.SEARCH} style={[styles.radioImage]} resizeMode='contain' />
                                        <View>
                                            <Text style={styles.titleTxtStyle}>{item.title}</Text>
                                            <Text style={styles.subTitleStyle}>{item.subTitle}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        <InputField
                            label='Start date *'
                            editable={false}
                            placeholder='01 Jan 2027'
                            right={
                                <Image source={Icons.CALENDAR} style={{ height: 20, width: 20 }} />
                            }
                            inputContainerStyle={{
                                marginVertical: 10
                            }}
                        />
                        <View style={styles.overallContainer}>
                            <ViewAllComponent lable='Price summery' />
                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                                <Text style={styles.detailsTxtStyle}>{selectedPlan}. {selectedMeal == "Both" ? "Lunch + Dinner" : selectedMeal}</Text>
                                <Text style={styles.detailsTxtStyle}>₹ 3696</Text>
                            </View>

                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                                <Text style={styles.detailsTxtStyle}>Delivery charge</Text>
                                <Text style={styles.detailsTxtStyle}>{selectedDeliveryMode == "2" ? "Free" : "20"}</Text>
                            </View>
                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", borderTopColor: Colors.border, borderTopWidth: 1 , paddingVertical:10 }]}>
                                <Text style={styles.payableTxtStyle}>Total Payable</Text>
                                <Text style={[styles.payableTxtStyle,{color:Colors.primary}]}>₹ 3696</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <AppButton lable='Confirm SubScription ₹3696' onPress={()=>navigation.navigate('SubscriptionConfirmedScreen')} />
                </View>
            </SafeAreaFile>
        </View >
    )
}

export default SubscriptionScreen

const styles = StyleSheet.create({
    planContainer: {
        ...CommonStyle.flexStyle,
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.shadowStyle,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 5
    },
    selectedPlanContainer: {
        borderWidth: 1,
        borderColor: Colors.primary
    },
    radioImage: {
        height: 15, width: 15
    },
    titleTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: Colors.textPrimary
    },
    subTitleStyle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: Colors.textSecondary
    },
    amtTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.primary
    }, mealTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: Colors.textSecondary
    },
    mealContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.border,
        borderWidth: 1,
        flex: 1,
    },
    selectedMealContainer: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary
    },
    viewAllContainerStyle: {
        marginTop: 20,
        marginBottom: 10
    },
    overallContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.shadowStyle,
        padding: 15,
        gap: 10,
        marginVertical:15
    },
    detailsTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: Colors.textSecondary
    },
    payableTxtStyle:{
         fontSize: 15,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.textPrimary
    }
})