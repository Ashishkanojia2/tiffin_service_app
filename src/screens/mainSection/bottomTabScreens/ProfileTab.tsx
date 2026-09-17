import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../component/header/AppHeader'
import { Colors } from '../../../theme/Colors'
import { Fonts } from '../../../assets/fonts'
import AppButton from '../../../component/button/AppButton'
import { Icons } from '../../../assets/icons'
import LogoutModal from '../../../component/modal/LogoutModal'

type ProfileTabOptions = {
    id: string,
    option: string,
    icon: ImageSourcePropType,
    navigateTo: string
}

const ProfileTabOptions: ProfileTabOptions[] = [
    {
        id: "1",
        option: "Delivery address",
        icon: Icons.MAP_PIN,
        navigateTo: "DeliveryAddressScreen"

    }, {
        id: "2",
        option: "Order history",
        icon: Icons.ORDER,
        navigateTo: "OrderHistoryScreen"
    }, {
        id: "3",
        option: "Notifications",
        icon: Icons.BELL,
        navigateTo: "NotificaionScreen"
    }, {
        id: "4",
        option: "Help & Support",
        icon: Icons.HELP_SUPPORT,
        navigateTo: "HelpAndSupportScreen"
    }, {
        id: "5",
        option: "Term & privacy",
        icon: Icons.SHIELD,
        navigateTo: "TermScreen"
    },
]


const ProfileTab = ({navigation}:any) => {
    const [isNotificationEnable, setIsNotificationEnable] = useState(false)
      const [logoutVisible, setLogoutVisible] = useState(false)
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        showLeftElement={false}
                        title="Profile"
                        showDoubleTitle={false}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                        <View style={styles.topProfileContainer}>
                            <View style={styles.profile}>
                                <Text style={styles.profileText}>R</Text>
                            </View>
                            <View >
                                <Text style={styles.titleStyle} numberOfLines={1}>Rahul Kumar</Text>
                                <Text style={styles.subTitleStyle}>+91 8003989125</Text>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: Colors.white,
                            marginVertical: 20,
                            borderRadius: 15,
                            ...CommonStyle.shadowStyle,
                            paddingHorizontal: 10
                        }}>
                            {
                                ProfileTabOptions.map((item, index) => (
                                    <TouchableOpacity style={{
                                        borderBottomWidth: index == 5 ? 0 : 1,
                                        paddingVertical: 18,
                                        borderBottomColor: Colors.border,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        flex: 1
                                    }}
                                        activeOpacity={0.7}
                                    >
                                        <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                                            <Image source={item.icon} style={{ height: 20, width: 20 }} tintColor={Colors.textSecondary} resizeMode='contain' />
                                            <Text style={styles.optionTxtStyle}>{item.option}</Text>

                                        </View>
                                        <View style={[CommonStyle.flexStyle]}>
                                            {item.id == "1" && <Text style={styles.valueTxtStyle}>Sector 12 pg block</Text>}
                                            {
                                                item.id == "3" ?
                                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsNotificationEnable(!isNotificationEnable)}>
                                                        <Image source={isNotificationEnable ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF} style={{ height: 18, width: 32 }} resizeMode='center' />
                                                    </TouchableOpacity>
                                                    : <Image source={Icons.LeftArrow} style={{ height: 18, width: 18, transform: [{ rotateZ: "180deg" }] }} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>

                        <AppButton
                            lable='Logout'
                            buttonType='OUTLINE'
                            buttonStyle={{
                                backgroundColor: Colors.background
                            }}
                            textStyle={{
                                color: Colors.error,
                                fontFamily: Fonts.Poppins.Medium
                            }}
                            onPress={() => setLogoutVisible(true)}
                        />
                        <Text style={styles.appVerionTextStyle}>
                            TiffinWala v1.0 • Made in India
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaFile>
            <LogoutModal isVisible={logoutVisible}
                onClose={() => setLogoutVisible(false)}
                onLogout={() => navigation.navigate("AuthNavigator")}
            />
        </View>
    )
}

export default ProfileTab

const styles = StyleSheet.create({
    topProfileContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        ...CommonStyle.flexStyle,
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow - Android
        elevation: 2,
    },
    profile: {
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: Colors.primaryDark,
        justifyContent: "center",
        alignItems: "center",

    },
    profileText: {
        fontFamily: Fonts.Poppins.Bold,
        color: Colors.white,
        fontSize: 20,
    },
    titleStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        color: Colors.textPrimary,
        fontSize: 17,
    },
    subTitleStyle: {
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        fontSize: 14,
    },
    appVerionTextStyle: {
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        fontSize: 14,
        textAlign: "center",
        marginVertical: 20
    },
    optionTxtStyle: {
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textPrimary,
        fontSize: 14,
    },
    valueTxtStyle: {
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
        fontSize: 12,
    }
})