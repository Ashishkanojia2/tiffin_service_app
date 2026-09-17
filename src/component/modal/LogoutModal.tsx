import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BaseModal from './BaseModal'
import AppButton from '../button/AppButton'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import Storage from '../../utils/Storage'
type LogoutProps = {
    isVisible: boolean;
    onClose: () => void;
    selectedUser?: "buyer" | "seller";
    onLogout: () => void
}
const LogoutModal = (
    { isVisible = true,
        onClose,
        selectedUser,
        onLogout, }: LogoutProps
) => {
    const [loginuser, setLoginUser] = useState<string>("")

    const logoutHandler = async () => {
        try {
            await Storage.removeItem('userType')
            onLogout()
            onClose()
        } catch (error) {
            console.log("Logout Error:", error)
        }
    }
    React.useEffect(() => {
        const getuser = async () => {
            try {
                const user = await Storage?.getItem({ key: "userType" })
                setLoginUser(user)
            } catch (error) {
                console.log(error);

            }
        }
        getuser()
    }, [isVisible])
    return (
        <BaseModal isVisible={isVisible} onClose={onClose}  >
            <Text style={styles.headerTxtStyle}>Logout from your {loginuser == "buyer" ? "TiffinWala" : "Kitchen"}</Text>
            <Text style={styles.labelTxt}>Your menu and customers stay saved. Login again with your phone number.</Text>
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
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
    },
    button: { flex: 1, height: 40, }
})