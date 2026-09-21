import { Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../component/header/AppHeader'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import InputField from '../../component/input/InputField'
import MobileInputField from '../../component/input/MobileInputField'
import AppButton from '../../component/button/AppButton'
import KeyboardWrapper from '../../utils/KeyboardWrapper'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import UpdateAddressBottomSheet from '../../component/modal/bottomSheet/UpdateAddressBottomSheet'
import UpdateMobileBottomSheet from '../../component/modal/bottomSheet/UpdateMobileBottomSheet'

const EditProfileScreen = () => {
    const [isAddressModalVisible, setIsAddressModalVisible] = useState(false)
    const [isMobileMdoalVisible, setIsMobileModalVisible] = useState(false)
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <KeyboardWrapper>

                    <View style={CommonStyle.appBorderSpacing}>
                        <AppHeader
                            title="Edit profile"
                            showDoubleTitle={false}
                        />
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                            <InputField
                                label='Name'
                                value='Rahul Verma'
                            />
                            <MobileInputField
                                value='123456789'
                                containerStyle={{ marginVertical: 20 }} editable={false} onChangeText={() => { }}
                                right={
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsMobileModalVisible(true)}>
                                        <Text style={styles.updateTxtStyle}>Update</Text>
                                    </TouchableOpacity>
                                }
                            />
                            <InputField
                                label='Address'
                                editable={false}
                                value='Jaipur , Mansariovar, 302020'
                                right={
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsAddressModalVisible(true)}>
                                        <Text style={styles.updateTxtStyle}>Update</Text>
                                    </TouchableOpacity>
                                }
                            />
                        </ScrollView>
                        <AppButton lable='Update Profile' buttonStyle={{ marginBottom: 10 }} />
                    </View>
                    {
                        isAddressModalVisible &&
                        <UpdateAddressBottomSheet isVisible={isAddressModalVisible} onClose={() => setIsAddressModalVisible(false)} />
                    }
                    {
                        isMobileMdoalVisible &&
                        <UpdateMobileBottomSheet isVisible={isMobileMdoalVisible} onClose={() => setIsMobileModalVisible(false)} />
                    }
                </KeyboardWrapper>
            </SafeAreaFile>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    updateTxtStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 14,
        color: Colors.primary
    }
})