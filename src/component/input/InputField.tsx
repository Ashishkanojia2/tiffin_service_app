import { Image, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import React, { forwardRef } from 'react';
import { Colors } from '../../theme/Colors';
import { Fonts } from '../../assets/fonts';

export type InputProps = TextInputProps & {
    inputContainerStyle?: StyleProp<ViewStyle>;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    left?: React.ReactNode;
    right?: React.ReactNode;
    labelIconRight?: any;
    inputWrapperStyle?: StyleProp<ViewStyle>;
    leftViewStyle?: StyleProp<ViewStyle>;
    showError?: boolean,
    errorMsg?: string
};

const InputField = forwardRef<TextInput, InputProps>(
    (
        {
            inputContainerStyle,
            inputWrapperStyle,
            label,
            labelStyle,
            style,
            left,
            right,
            labelIconRight,
            leftViewStyle,
            showError,
            errorMsg,
            ...rest
        },
        ref,
    ) => {
        return (
            <View style={[styles.container, inputContainerStyle]}>
                <View style={styles.labelStyle}>
                    {label && <Text style={[styles.labelTxt, labelStyle]}>{label}</Text>}
                    {labelIconRight && <Image source={labelIconRight} style={styles.updateDocIcon} />}
                </View>

                <View style={[styles.inputWrapper, inputWrapperStyle]}>
                    {left && <View style={[{ marginRight: 5, zIndex: 99 }, leftViewStyle]}>{left}</View>}

                    <TextInput
                        ref={ref as any}
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.input, style]}
                        cursorColor={Colors.primary}
                        {...rest}
                    />
                    {right && <View style={{ marginRight: 14 }}>{right}</View>}
                </View>
                {
                    showError &&
                    <View style={styles.labelStyle}>
                        <Text style={[styles.labelTxt, { color: Colors.error }]}>{errorMsg}</Text>
                    </View>
                }
            </View>
        );
    },
);

export default InputField;

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor: Colors.white,
        minHeight: 50,
        borderColor: Colors.border,
        borderWidth: 1,
        overflow: "hidden",
        // Shadow - iOS

    },
    input: {
        flex: 1,
        height: '100%',
        paddingVertical: 10,
        color: Colors.black,
        fontSize: 15,
        fontFamily: Fonts.Inter.Regular,
        paddingHorizontal: 5,
    },
    labelTxt: {
        fontSize: 16,
        marginBottom: 4,
        fontFamily: Fonts.Inter.Medium,
        color: Colors.black,
    },
    labelStyle: {
        flexDirection: "row",
    },
    updateDocIcon: {
        width: 23,
        height: 23,
        marginLeft: 5
    }
});