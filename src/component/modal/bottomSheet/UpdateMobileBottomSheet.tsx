import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseModal, { BaseModalProps } from '../BaseModal'
import AppButton from '../../button/AppButton'
import { Fonts } from '../../../assets/fonts'
import { Colors } from '../../../theme/Colors'
import InputField from '../../input/InputField'
import MobileInputField from '../../input/MobileInputField'

type AddressModalProps = BaseModalProps & {

}

const UpdateMobileBottomSheet = ({ isVisible, onClose }: AddressModalProps) => {
    return (
        <BaseModal isVisible={isVisible} onClose={onClose} popupType='BOTTOM_SHEET'>
            <Text style={styles.headerTxtStyle}>Update mobile number </Text>
            {/* <InputField
            label='Enter your address'
    inputContainerStyle={{marginVertical:20}}
            /> */}
            <MobileInputField
                value='123456789'
                containerStyle={{ marginVertical: 20 }} 
                onChangeText={() => { }}
                
            />
            <View style={{ flexDirection: "row", gap: 10, }}>
                <AppButton lable="Cancel" buttonStyle={styles.button} buttonType="OUTLINE" onPress={onClose} />
                <AppButton lable="Logout" buttonStyle={styles.button} onPress={() => { }} />
            </View>
        </BaseModal>
    )
}

export default UpdateMobileBottomSheet

const styles = StyleSheet.create({
    headerTxtStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 18,
        color: Colors.textPrimary,
    },
    labelTxt: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
    },
    button: { flex: 1, }
})