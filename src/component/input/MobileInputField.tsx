import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import InputField from './InputField'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'

type MobileInputFieldProps = {
    containerStyle?: ViewStyle,
    showError?: boolean,
    errorMsg?: string
}



const MobileInputField = ({ containerStyle, showError, errorMsg }: MobileInputFieldProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.labelStyle}>
                <Text style={[styles.labelTxt]}>Mobile number*</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10, marginBottom: 5,}}>
                <InputField inputContainerStyle={{ width: 50, borderColor: Colors.border, }}
                    style={{
                        backgroundColor: Colors.light_yellow,
                        borderRadius:18
                        
                    }}
                    inputWrapperStyle={{
                        borderRadius:18
                    }}
                    placeholder='+91'
                    placeholderTextColor={Colors.textPrimary} editable={false} />
                <InputField inputContainerStyle={{ flex: 1 }} keyboardType='decimal-pad'
                    inputWrapperStyle={{ borderColor: showError ? Colors.error : Colors.border }}
                />
            </View>
            {
                showError &&
                <View style={styles.labelStyle}>
                    <Text style={[styles.labelTxt, { color: Colors.error }]}>{errorMsg}</Text>
                </View>
            }
        </View>
    )
}

export default MobileInputField

const styles = StyleSheet.create({
    container: {
        // width: '100%',,
        flex: 1
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingLeft: 16,
        backgroundColor: Colors.white,
        minHeight: 50,
        borderColor: Colors.border,
        borderWidth: 1
    },
    input: {
        flex: 1,
        height: '100%',
        paddingVertical: 10,
        color: Colors.black,
        fontSize: 15,
        fontFamily: Fonts.Inter.Regular,
        marginRight: 5
    },
    labelTxt: {
        fontSize: 13,
        marginBottom: 4,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.textSecondary,
    },
    labelStyle: {
        flexDirection: "row",
    },
})