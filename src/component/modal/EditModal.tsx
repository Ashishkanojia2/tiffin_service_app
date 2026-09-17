import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { Icons } from '../../assets/icons'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import InputField from '../input/InputField'
import AppButton from '../button/AppButton'
const { height } = Dimensions.get('window');
type EditModalProps = BaseModalProps & {
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


const EditModal = ({
    isVisible,
    onClose,
}: EditModalProps) => {
    const [preferenceType, setPreferenceType] = useState("Veg")
    return (
        <BaseModal isVisible={isVisible} onClose={onClose}  >
            <Text style={styles.headerTxtStyle}>Edit Meal</Text>
            <View style={{ gap: 15 }}>
                <View style={styles.imageContainer}>
                    <Image source={Icons.CAMERA} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    <Text
                        style={[
                            styles.imageContainerText,
                            { fontFamily: Fonts.Poppins.SemiBold, fontSize: 15 },
                        ]}
                    >
                        Upload today's meal photo
                    </Text>
                </View>
                <InputField
                    label='Meal*'
                    placeholder='Enter meal name'
                />
                <InputField
                    label='Price per meal (₹)*'
                    placeholder='Enter meal price'
                />
                <View>
                    <Text style={styles.labelTxt}>Meal type</Text>
                    <View style={[CommonStyle.flexStyle, { justifyContent: "space-evenly", gap: 10 }]}>
                        {
                            foodPreference.map((item) => (
                                <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => setPreferenceType(item.mealType)}
                                    style={[styles.mealContainer, preferenceType === item.mealType ? styles.selectedMealContainer : undefined]}
                                >
                                    <Text style={[styles.mealTxtStyle, { color: preferenceType == item.mealType ? Colors.primary : undefined }]}>{item.mealType}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
                <AppButton lable='Save menu' />
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
        ...CommonStyle.shadowStyle,
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