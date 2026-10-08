import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseModal from './BaseModal'
import AppButton from '../button/AppButton'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { LogoutApi } from '../../network/AuthApi'
import { STORE_KEY } from '../../storage/StoreKey'
import localStorage from '../../storage/LocalStorage'
type LogoutProps = {
    isVisible: boolean;
    onClose: () => void;
    onLogout: () => void
}
const LogoutModal = (
    { isVisible = true,
        onClose,
        onLogout, }: LogoutProps
) => {
    const loginuser = localStorage.getItem(STORE_KEY.USERTYPE)
    const isBuyer = loginuser === 'buyer';
    const appName = isBuyer
        ? 'TiffinWala'
        : 'Kitchen';

    const logoutMessage = isBuyer
        ? 'Your subscriptions and orders stay saved. Login again with your phone number.'
        : 'Your menu and customers stay saved. Login again with your phone number.';

    const logoutHandler = async () => {
        try {
            const res = await LogoutApi()
            if (res.success) {
                localStorage.deleteAll()
                onLogout()
                onClose()
            }
        } catch (error) {
            console.log("Logout Error:", error)
        }
    }
    return (
        <BaseModal isVisible={isVisible} onClose={onClose}  >
            <Text style={styles.headerTxtStyle}>
                Logout from your {appName}
            </Text>
            <Text style={styles.labelTxt}>
                {logoutMessage}
            </Text>
            <View style={{ flexDirection: "row", gap: 10, alignSelf: "flex-end", width: "70%" }}>
                <AppButton lable="Cancel" buttonStyle={styles.button} buttonType="OUTLINE" onPress={onClose} />
                <AppButton lable="Logout" buttonStyle={styles.button} onPress={logoutHandler} />
            </View>
        </BaseModal>
    )
}

export default LogoutModal

const styles = StyleSheet.create({
    headerTxtStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 18,
        color: Colors.textPrimary,
    },
    labelTxt: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
    },
    button: { flex: 1, height: 40, }
})