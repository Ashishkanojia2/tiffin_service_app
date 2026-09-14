import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle';
import AppHeader from '../../../component/header/AppHeader';
import { Colors } from '../../../theme/Colors';
import { Fonts } from '../../../assets/fonts';
import { Icons } from '../../../assets/icons';
import InputField from '../../../component/input/InputField';
import Container from '../../../component/container/Container';
import Segement from '../../../component/segement';
import AppButton from '../../../component/button/AppButton';

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

const KitchenRegisterScreen = () => {
    const [mealType, setMealtype] = useState<string[]>([])
    const [DeliveryType, setDeliveryType] = useState<string>("homeDelivery")

    const handleMealType = (type: string) => {
        const isExists = mealType.includes(type);
        if (isExists) {
            let newMealType = mealType.filter((item) => item != type)
            setMealtype(newMealType)
        } else {
            setMealtype([...mealType, type])
        }
    }
    return (
        <View style={CommonStyle.appBorderSpacing}>
            <AppHeader
                title="Register your Kitchen"
                SubTitle="Free listing takes 5 minutes"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={styles.imageContainer}>
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
                </View>
                <View style={{ marginTop: 20, gap: 20 }}>
                    <InputField
                        label='Kitchen name*'
                        placeholder='Enter kitchen name'
                    />
                    <InputField
                        label='Owner name*'
                        placeholder='Enter Owner name'
                    />
                    <InputField
                        label='Area/ Locality*'
                        placeholder='Enter Area/ Locality'
                    />
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <InputField
                            label='Price per meal(₹)*'
                            placeholder='Enter Price per meal'
                            keyboardType='number-pad'
                            inputContainerStyle={{ flex: 3 }}
                        />
                        <Container
                            containerStyle={[
                                styles.mealTypeContainer,
                                {
                                    backgroundColor: mealType.includes('veg')
                                        ? Colors.success
                                        : Colors.hightLighted_green
                                },
                            ]}
                            lable="Veg"
                            lableStyle={styles.mealTypeText}
                            onPress={() => handleMealType('veg')}
                        />

                        <Container
                            containerStyle={[
                                styles.mealTypeContainer,
                                {
                                    backgroundColor: mealType.includes('non-veg')
                                        ? Colors.error
                                        : Colors.hightLighted_red
                                },
                            ]}
                            lable="Non-Veg"
                            lableStyle={styles.mealTypeText}
                            onPress={() => handleMealType('non-veg')}
                        />
                    </View>
                    <InputField
                        label='Meal time*'
                        placeholder='Enter Meal time'
                    />
                    <Segement segementData={deliveryTypeData}
                        selectedValue={(txt: string) => setDeliveryType(txt)}
                        containerStyle={{ backgroundColor: Colors.background }}
                        lable='Delivery option'
                    />
                    <InputField
                        label='About your kitchen*'
                        placeholder='Enter information about your kitchen'
                        multiline
                    />
                    <AppButton lable="Register Kitchen"/>
                </View>
            </ScrollView>
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
