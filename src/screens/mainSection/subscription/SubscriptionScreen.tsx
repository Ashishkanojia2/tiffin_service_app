import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../component/header/AppHeader'
import ViewAllComponent from '../../../component/other/ViewAllComponent'
import { Icons } from '../../../assets/icons'
import { Colors } from '../../../theme/Colors'
import { Fonts } from '../../../assets/fonts'
import AppButton from '../../../component/button/AppButton'
import { chooseMealPlanApi, planDetailsApi } from '../../../network/ClientApi'
import { PlanDetailResponseProps } from '../../../types/ApiResponseType'
import { ChoosePlanProps } from '../../../types/AppTypes'
import DatePickerInput from '../../../component/input/DatePickerInput'
import MultiLineInput from '../../../component/input/MultiLineInput'
import { showErrorToast } from '../../../utils/Toast'

const SubscriptionScreen = ({ navigation }: any) => {
    const [planDetails, setPlanDetails] = useState<PlanDetailResponseProps | null>(null)
    const [loading, setLoading] = useState(false)
    const [choosePlan, setChoosePlan] = useState<ChoosePlanProps>({
        kitchenId: '',
        planType: null,
        mealType: null,
        foodPerference: "",
        deliveryMode: "",
        startingDate: '',
        note: "",
    })

    const apiHandler = async () => {
        try {
            const res = await planDetailsApi()
            if (res.success && res.result) {
                setPlanDetails(res?.result)
                setChoosePlan({
                    kitchenId: res.result.kitchenId,
                    planType: res.result.plans?.[0] ?? null,
                    mealType: res.result.mealType?.[0] ?? null,
                    foodPerference: res.result.foodPerference?.[0]?.label ?? '',
                    deliveryMode: res.result.deliveryType?.[0].title ?? null,
                    startingDate: "",
                    note: '',
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apiHandler()
    }, [])
    const handleChange = <Key extends keyof ChoosePlanProps>(
        key: Key,
        value: ChoosePlanProps[Key],
    ) => {
        setChoosePlan(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    const calculateFinalAmount = () => {
        const charge = Number(planDetails?.deliveryCharge ?? 0);
        const planPrice = Number(choosePlan.planType?.price ?? 0);

        const isBothMeal = choosePlan.mealType?.lable === "Both";
        const isOneDay = choosePlan.planType?.plan === "OneDay";
        const isHomeDelivery =
            choosePlan.deliveryMode === "Home/PG delivery";

        const mealCount = isBothMeal ? 2 : 1;

        const deliveryCharge =
            isOneDay && isHomeDelivery
                ? charge * mealCount
                : 0;

        return planPrice * mealCount + deliveryCharge;
    };
    const validationChecker = (data: ChoosePlanProps) => {
        if (!data.kitchenId) {
            showErrorToast({ text2: "kitchenId missing" })
            return false
        } else if (!data.startingDate) {
            showErrorToast({ text2: "Please choose starting date." })
        } else return true
    }
    const handleChoosePlan = async () => {
        setLoading(true)
        try {
            const finalAmt = calculateFinalAmount()
            if (!validationChecker(choosePlan)) return false
            const request = {
                ...choosePlan,
                finalAmount: finalAmt,
            }
            const res = await chooseMealPlanApi(request)
            if (res.success) {
                navigation.navigate('SubscriptionConfirmedScreen', { "subscribeMeal": res.result })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader title='Choose Your Plan' SubTitle={planDetails?.kitchenName} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ViewAllComponent lable='Plan type' ContaineStyle={styles.viewAllContainerStyle} />
                        {
                            planDetails?.plans.map((item) => (
                                <TouchableOpacity style={[styles.planContainer, choosePlan.planType?.plan == item.plan ? styles.selectedPlanContainer : undefined]}
                                    activeOpacity={0.7}
                                    onPress={() => handleChange("planType", item)} key={item.plan}>
                                    <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                                        <Image source={item.plan == "OneDay" ? Icons.TODAY : item.plan == "Weekly" ? Icons.WEEKLY : Icons.MONTHLY} style={[styles.radioImage]} resizeMode='contain' />
                                        <View>
                                            <Text style={styles.titleTxtStyle}>{item.plan}</Text>
                                            <Text style={styles.subTitleStyle}>{item.day}{'  '}{item.discount} {item.plan != "OneDay" ? (`Discount + Free delivery`) : null}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.amtTxtStyle}>₹ {item.price}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        <ViewAllComponent lable='Meal' ContaineStyle={styles.viewAllContainerStyle} />
                        <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                            {
                                planDetails?.mealType.map((item) => (
                                    <TouchableOpacity activeOpacity={0.8} key={item.lable} onPress={() => handleChange("mealType", item)}
                                        style={[styles.mealContainer, choosePlan.mealType?.lable === item.lable ? styles.selectedMealContainer : undefined]}
                                    >
                                        <Text style={[styles.mealTxtStyle, { color: choosePlan.mealType?.lable == item.lable ? Colors.white : undefined }]}>{item.lable}</Text>
                                        <Text style={[styles.mealTxtStyle, { color: choosePlan.mealType?.lable == item.lable ? Colors.white : Colors.textSecondary, fontSize: 10 }]}>{item.time}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <ViewAllComponent lable='Food preference' ContaineStyle={styles.viewAllContainerStyle} />
                        <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                            {
                                planDetails?.foodPerference.map((item) => (
                                    <TouchableOpacity activeOpacity={0.8} key={item.label} onPress={() => handleChange("foodPerference", item.label)}
                                        style={[styles.mealContainer, choosePlan.foodPerference === item.label ? styles.selectedMealContainer : undefined]}
                                    >
                                        <Text style={[styles.mealTxtStyle, { color: choosePlan.foodPerference == item.label ? Colors.white : undefined }]}>{item.label}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <ViewAllComponent lable='Delivery mode' ContaineStyle={styles.viewAllContainerStyle} />
                        {
                            planDetails?.deliveryType.map((item) => (
                                <TouchableOpacity style={[styles.planContainer, choosePlan.deliveryMode == item.title ? styles.selectedPlanContainer : undefined]} activeOpacity={0.7}
                                    onPress={() => handleChange("deliveryMode", item.title)} key={item.lable}>
                                    <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                                        <Image source={item.title == "Home/PG delivery" ? Icons.DELIVERY : Icons.SELF_PICKUP} style={[styles.radioImage]} resizeMode='contain' />
                                        <View>
                                            <Text style={styles.titleTxtStyle}>{item.title}</Text>
                                            <Text style={styles.subTitleStyle}>{item.lable}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        <DatePickerInput selectedDate={(date: string) => handleChange("startingDate", date)} />
                        <MultiLineInput lable='Note*' data={(msg: any) => handleChange("note", msg)} placeHolder='Enter note' />
                        <View style={styles.overallContainer}>
                            <ViewAllComponent lable='Price summery' />
                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                                <Text style={styles.detailsTxtStyle}>{choosePlan.planType?.plan}. {choosePlan.mealType?.lable == "Both" ? "Lunch + Dinner" : choosePlan.mealType?.lable}</Text>
                                <Text style={styles.detailsTxtStyle}>₹ {choosePlan.planType?.price} {choosePlan.mealType?.lable == "Both" ? `+ ${choosePlan.planType?.price}` : null}</Text>
                            </View>
                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                                <Text style={styles.detailsTxtStyle}>Delivery charge</Text>
                                <Text style={styles.detailsTxtStyle}>
                                    {choosePlan?.planType?.plan === "OneDay" &&
                                        choosePlan?.deliveryMode === "Home/PG delivery"
                                        ? `₹${Number(planDetails?.deliveryCharge ?? 0) *
                                        (choosePlan?.mealType?.lable === "Both" ? 2 : 1)
                                        }`
                                        : "Free"}
                                </Text>
                            </View>
                            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", borderTopColor: Colors.border, borderTopWidth: 1, paddingVertical: 10 }]}>
                                <Text style={styles.payableTxtStyle}>Total Payable</Text>
                                <Text style={[styles.payableTxtStyle, { color: Colors.primary }]}>₹ {calculateFinalAmount()}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <AppButton lable={`Confirm Subscription ₹${calculateFinalAmount()}`}
                        buttonStyle={{ marginBottom: 10 }}
                        onPress={handleChoosePlan}
                        loading={loading}
                    />

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
        // ...CommonStyle.shadowStyle,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 5,
        borderWidth: 1,
        borderColor: Colors.border
    },
    selectedPlanContainer: {
        borderWidth: 1,
        borderColor: Colors.primary
    },
    radioImage: {
        height: 25, width: 25,
        tintColor: Colors.textSecondary
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
        paddingHorizontal: 10,
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
        // ...CommonStyle.shadowStyle,
        padding: 15,
        gap: 10,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: Colors.border
    },
    detailsTxtStyle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: Colors.textSecondary
    },
    payableTxtStyle: {
        fontSize: 15,
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.textPrimary
    }
})