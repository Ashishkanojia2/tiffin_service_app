import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle';
import AppHeader from '../../../component/header/AppHeader';
import { Colors } from '../../../theme/Colors';
import { Fonts } from '../../../assets/fonts';
import { Icons } from '../../../assets/icons';
import InputField from '../../../component/input/InputField';
import Segement from '../../../component/segement';
import AppButton from '../../../component/button/AppButton';
import KeyboardWrapper from '../../../utils/KeyboardWrapper';
import MultilineContainer from '../../../component/container/MultilineContainer';
import MediaPicker from '../../../utils/MediaPicker';
import { RegisterKitchenRequest } from '../../../network/AuthApi';
import { showSuccessToast } from '../../../utils/Toast';
import type { KitchenRegistrationForm } from '../../../types/ApiRequestType';
import { useKitchenStore } from '../../../store/kitchenStore';
import localStorage from '../../../storage/LocalStorage';
import { STORE_KEY } from '../../../storage/StoreKey';

const { height } = Dimensions.get('window');
const deliveryTypeData = [
    {
        id: "homeDelivery",
        lable: "Home Delivery",
    },
    {
        id: "selfPickup",
        lable: "Self Pickup"
    }
]
const KitchenRegisterScreen = ({ navigation }: any) => {
    const { setKitchenData } = useKitchenStore()
    const [data, setData] = useState<KitchenRegistrationForm>({
        kitchenName: '',
        ownerName: '',
        location: '',
        price: '',
        mealTime: '',
        aboutKitchen: '',
        mealType: [],
        deliveryType: 'homeDelivery',
        kitchenPhoto: null,
        landMark: '',
        pinCode: '',
    });
    const handleChange = <Key extends keyof KitchenRegistrationForm>(
        key: Key,
        value: KitchenRegistrationForm[Key],
    ) => {
        setData(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    const handleMealType = (type: 'veg' | 'non-veg') => {
        setData(prev => ({
            ...prev,
            mealType: prev.mealType.includes(type)
                ? prev.mealType.filter(item => item !== type)
                : [...prev.mealType, type],
        }));
    }
    const handleMediaPicker = async (type: 'camera' | 'library') => {
        try {
            const result = await MediaPicker(type);
            if (!result?.uri) return;

            setData(prev => ({
                ...prev,
                kitchenPhoto: result,
            }));
        } catch (error) {
            console.error('Error selecting media:', error);
        }
    };
    const handleKitchenRegister = async () => {
        const formData = new FormData();
        formData.append('kitchenName', data.kitchenName);
        formData.append('ownerName', data.ownerName);
        formData.append('address', data.location);
        formData.append('pricePerMeal', data.price);
        formData.append('foodType', JSON.stringify(data.mealType));
        formData.append('deliveryOption', data.deliveryType);
        formData.append('mealTime', data.mealTime);
        formData.append('aboutKitchen', data.aboutKitchen);
        formData.append('landMark', data.landMark);
        formData.append('pinCode', data.pinCode);
        if (data.kitchenPhoto?.uri) {
            const photo = {
                uri: data.kitchenPhoto.uri,
                type: data.kitchenPhoto.type ?? 'image/jpeg',
                name: data.kitchenPhoto.fileName ?? `kitchen_${Date.now()}.jpg`,
            };
            formData.append('kitchenPhoto', photo as unknown as Blob);
        }
        try {
            const response = await RegisterKitchenRequest(formData)
            if (response?.result && response.success) {
                showSuccessToast({
                    text1: "Kitchen Register Successful",
                })
                setKitchenData(response?.result)
                localStorage.setItem(STORE_KEY.KITCHEN_ID, response?.result?._id ?? '')
                localStorage.setItem(STORE_KEY.KITCHEN_DASHBOARD_ID, response?.result?.kitchenDashboardId ?? '')
                navigation.navigate("MainNavigator")
            }
        } catch (error) {
            console.log("error api calling:", error)
            throw error
        }
    }
    return (
        <View style={CommonStyle.appBorderSpacing}>
            <KeyboardWrapper>
                <AppHeader
                    title="Register your Kitchen"
                    SubTitle="Free listing takes 5 minutes"
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="interactive"
                >

                    <TouchableOpacity activeOpacity={0.7} onPress={() => handleMediaPicker("library")
                    } style={styles.imageContainer}>
                        {data.kitchenPhoto ? (
                            <Image source={{ uri: data.kitchenPhoto.uri }} style={{ height: '100%', width: '100%', borderRadius: 15 }} resizeMode="cover" />
                        ) : (
                            <>
                                <Image source={Icons.CAMERA} style={{ height: 35, width: 35 }} resizeMode="contain" />
                                <Text
                                    style={[
                                        styles.imageContainerText,
                                        { fontFamily: Fonts.Poppins.SemiBold, fontSize: 15 },
                                    ]}
                                >
                                    Upload kitchen photo
                                </Text>
                                <Text style={styles.imageContainerText}>
                                    Bright photo of your food or kitchen work best
                                </Text>
                            </>
                        )}
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, gap: 20 }}>
                        <InputField
                            label='Kitchen name*'
                            placeholder='Enter kitchen name'
                            value={data.kitchenName}
                            onChangeText={(txt: string) =>
                                handleChange('kitchenName', txt)
                            }
                        />
                        <InputField
                            label='Owner name*'
                            placeholder='Enter owner name'
                            value={data.ownerName}
                            onChangeText={(txt: string) =>
                                handleChange('ownerName', txt)
                            }
                        />
                        <InputField
                            label='Area/ Locality*'
                            placeholder='Enter area/locality'
                            value={data.location}
                            onChangeText={(txt: string) =>
                                handleChange('location', txt)
                            }
                        />

                        <View style={[CommonStyle.flexStyle, {}]}>
                            <InputField
                                label='Landmark'
                                placeholder='Enter landmark'
                                value={data.landMark}
                                onChangeText={(txt: string) =>
                                    handleChange('landMark', txt)
                                }
                                inputContainerStyle={{ flex: 1 }}
                            />
                            <InputField
                                label='Pincode'
                                placeholder='Enter pincode'
                                value={data.pinCode}
                                onChangeText={(txt: string) =>
                                    handleChange('pinCode', txt)
                                }
                                inputContainerStyle={{ flex: 1 }}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: "flex-end" }}>
                            <InputField
                                label='Price per meal(₹)*'
                                placeholder='Enter Price per meal'
                                keyboardType='number-pad'
                                inputContainerStyle={{ flex: 2 }}
                                value={data.price}
                                onChangeText={(txt: string) =>
                                    handleChange('price', txt)
                                }
                            />
                            <AppButton lable='Veg' buttonStyle={{ flex: 1 }} textStyle={{ fontSize: 14 }} buttonType={data.mealType.includes('veg') ? "FIELD" : "OUTLINE"} onPress={() => handleMealType('veg')} />
                            <AppButton lable='Non-Veg' buttonStyle={{ flex: 1 }} textStyle={{ fontSize: 14 }} buttonType={data.mealType.includes('non-veg') ? "FIELD" : "OUTLINE"} onPress={() => handleMealType('non-veg')} />
                        </View>

                        <InputField
                            label='Meal time*'
                            placeholder='Enter Meal time'
                            value={data.mealTime}
                            onChangeText={(txt: string) =>
                                handleChange('mealTime', txt)
                            }
                        />
                        <Segement segementData={deliveryTypeData}
                            selectedValue={(txt: string) => {
                                if (txt === 'homeDelivery' || txt === 'selfPickup') {
                                    handleChange('deliveryType', txt);
                                }
                            }}
                            containerStyle={{ backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.border, height: 50 }}
                            lable='Delivery option'
                        />
                        <MultilineContainer lable='About your kitchen' placeholder='Enter information about your kitchen'
                            value={(txt: string) =>
                                handleChange('aboutKitchen', txt)
                            }
                        />
                        <AppButton lable="Register Kitchen" buttonStyle={{ marginBottom: 15 }}
                            onPress={handleKitchenRegister} />
                    </View>
                </ScrollView>
            </KeyboardWrapper>
        </View >
    );
};

export default KitchenRegisterScreen;

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 5,
        width: '100%',
        marginTop: 20,
        gap: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.border,

    },
    imageContainerText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: Colors.textSecondary,
        textAlign: "center"
    },
    mealTypeContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        ...CommonStyle.shadowStyle,
        alignSelf: 'flex-end',
        paddingVertical: 15,
        justifyContent: 'center',
    },
    mealTypeText: {
        fontSize: 15,
        fontFamily: Fonts.Inter.Regular,
        color: Colors.white,
    }
});
