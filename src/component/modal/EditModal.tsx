import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { Icons } from '../../assets/icons'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import InputField from '../input/InputField'
import AppButton from '../button/AppButton'
import DropDownInput from '../input/DropDownInput'
import { AddMealFormDataProps } from '../../types/ApiRequestType'
import MediaPicker from '../../utils/MediaPicker'
import { addMealApi, editMealApi, mealListApi } from '../../network/ClientApi'
import { showSuccessToast } from '../../utils/Toast'
import localStorage from '../../storage/LocalStorage'
import { STORE_KEY } from '../../storage/StoreKey'
import { MealListResponseProps } from '../../types/ApiResponseType'
const { height } = Dimensions.get('window');
type EditModalProps = BaseModalProps & {
    modalType?: "EDIT_MEAL" | "ADD_MEAL",
    mealData?: MealListResponseProps
}
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
const foodTime = [
    {
        id: "lunch",
        mealTime: "Lunch"
    },
    {
        id: "dinner",
        mealTime: "Dinner"
    },
]
const EditModal = ({
    isVisible,
    onClose,
    modalType = "EDIT_MEAL",
    mealData
}: EditModalProps) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<AddMealFormDataProps>({
        mealImage: null,
        mealName: '',
        mealPrice: '',
        mealDay: '',
        mealType: '',
        mealTime: '',
    });
    useEffect(() => {
        if (mealData) {
            setData({
                mealImage: mealData.mealImage
                    ? {
                        uri: mealData.mealImage.url,
                    }
                    : null,
                mealName: mealData.mealName ?? '',
                mealPrice:
                    mealData.price !== undefined && mealData.price !== null
                        ? String(mealData.price)
                        : '',
                mealDay: mealData.mealDay ?? '',
                mealType: mealData.mealType ?? '',
                mealTime: mealData.mealTime ?? '',
            });
        } else {
            setData({
                mealImage: null,
                mealName: '',
                mealPrice: '',
                mealDay: '',
                mealType: '',
                mealTime: '',
            });
        }
    }, [mealData, isVisible]);


    const handleChange = <Key extends keyof AddMealFormDataProps>(
        key: Key,
        value: AddMealFormDataProps[Key],
    ) => {
        setData(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    const handleMediaPicker = async (type: 'camera' | 'library') => {
        try {
            const result = await MediaPicker(type);
            if (!result?.uri) return;
            setData(prev => ({
                ...prev,
                mealImage: result,
            }));
        } catch (error) {
            console.error('Error selecting media:', error);
        }
    };
    const AddMealHandler = async (type: string) => {
        try {
            setLoading(true)
            const kitchenId = localStorage.getItem(STORE_KEY.KITCHEN_ID)
            const formData = new FormData();
            formData.append('kitchenId', kitchenId)
            formData.append('mealName', data?.mealName ?? '');
            formData.append('price', data?.mealPrice ?? '');
            formData.append('mealDay', data?.mealDay ?? '');
            formData.append('mealType', data?.mealType ?? '');
            formData.append('mealTime', data?.mealTime ?? '');
            if (data.mealImage?.uri) {
                const photo = {
                    uri: data.mealImage.uri,
                    type: data.mealImage.type ?? 'image/jpeg',
                    name: data.mealImage.fileName ?? `kitchen_${Date.now()}.jpg`,
                };
                formData.append('mealImage', photo as unknown as Blob);
            }


            const response = await addMealApi(formData)



            if (response.success) {
                await mealListApi()
                showSuccessToast({
                    text1: response.message,
                })
                setTimeout(() => {
                    onClose?.()
                    setData({
                        mealDay: "",
                        mealImage: null,
                        mealName: "",
                        mealPrice: "",
                        mealTime: "",
                        mealType: ""
                    })
                }, 3000)
            }
        } catch (error) {
            console.log("error api calling:", error)
            throw error
        } finally {
            setLoading(false)
        }
    }
    return (
        <BaseModal isVisible={isVisible} onClose={onClose}>
            <Text style={styles.headerTxtStyle}> {modalType == "ADD_MEAL" ? "Add meal" : "Edit Meal"}</Text>
            <View style={{ gap: 15 }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => handleMediaPicker("library")} style={styles.imageContainer}>
                    {
                        data.mealImage ?
                            <Image source={{ uri: data.mealImage?.uri?.replace('http://', 'https://') }} style={{ height: '100%', width: '100%', borderRadius: 15 }} resizeMode="cover" />
                            :
                            <>
                                <Image source={Icons.CAMERA} style={{ height: 35, width: 35 }} resizeMode="contain" />
                                <Text
                                    style={[
                                        styles.imageContainerText,
                                        { fontFamily: Fonts.Poppins.SemiBold, fontSize: 15 },
                                    ]}
                                >
                                    {
                                        modalType == "ADD_MEAL" ? "Upload meal photo" :
                                            "Update meal photo"
                                    }
                                </Text>
                            </>
                    }
                </TouchableOpacity>
                <InputField
                    label='Meal*'
                    placeholder='Enter meal name'
                    value={data.mealName}
                    onChangeText={(txt: string) =>
                        handleChange('mealName', txt)
                    }
                />
                <InputField
                    label='Price per meal (₹)*'
                    placeholder='Enter meal price'
                    value={data.mealPrice}
                    onChangeText={(txt: string) =>
                        handleChange('mealPrice', txt)
                    }
                />
                {
                    modalType == "ADD_MEAL" &&
                    <DropDownInput
                        label='Meal day'
                        placeholder='Enter meal price'
                        selectedItem={(txt: string) => handleChange('mealDay', txt)}
                    />
                }
                <View>
                    <Text style={styles.labelTxt}>Meal type</Text>
                    <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                        {
                            foodPreference.map((item) => (
                                <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => {
                                    handleChange("mealType", item.mealType)
                                    // setPreferenceType(item.mealType)
                                }}
                                    style={[styles.mealContainer, data.mealType === item.mealType ? styles.selectedMealContainer : undefined]}
                                >
                                    <Text style={[styles.mealTxtStyle, { color: data.mealType == item.mealType ? Colors.primary : undefined }]}>{item.mealType}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
                {
                    modalType == "ADD_MEAL" &&
                    <View>
                        <Text style={styles.labelTxt}>Meal time</Text>
                        <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                            {
                                foodTime.map((item) => (
                                    <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => {
                                        handleChange("mealTime", item.mealTime)
                                    }}
                                        style={[styles.mealContainer, data.mealTime === item.mealTime ? styles.selectedMealContainer : undefined]}
                                    >
                                        <Text style={[styles.mealTxtStyle, { color: data.mealTime == item.mealTime ? Colors.primary : undefined }]}>{item.mealTime}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                }
                <AppButton lable='Save menu' onPress={() => modalType == "ADD_MEAL" ? AddMealHandler(modalType) : {}} loading={loading} />
            </View>
        </BaseModal>
    )
}

export default EditModal

const styles = StyleSheet.create({
    headerTxtStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 18,
        color: Colors.textPrimary,

    },
    imageContainer: {
        backgroundColor: Colors.background,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 7,
        width: '100%',
        marginTop: 20,
        // ...CommonStyle.shadowStyle,
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
    mealTxtStyle: {
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
        backgroundColor: Colors.light_primary_shade
    },
    labelTxt: {
        fontSize: 16,
        marginBottom: 4,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
    },
})