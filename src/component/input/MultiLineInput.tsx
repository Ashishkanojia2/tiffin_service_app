import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import InputField, { InputProps } from './InputField';
import { Fonts } from '../../assets/fonts';
import { Colors } from '../../theme/Colors';
export type MultiLineInputProps = InputProps & {
    limit?: number,
    data: (msg: string) => void,
    lable: string,
    placeHolder: string
    showBottomRemaningTxt?: boolean
}
const MultiLineInput = ({
    limit = 200,
    data,
    lable,
    placeHolder = "Write something here...",
    showBottomRemaningTxt = true,
    ...props
}: MultiLineInputProps) => {
    const scrollViewRef = useRef<React.ElementRef<typeof ScrollView>>(null);
    const [reviewMessage, setReviewMessage] = useState('');
    return (
        <View>
            <InputField
                label={lable}
                {...props}
                value={reviewMessage}
                multiline
                maxLength={limit}
                style={{
                    minHeight: 150,
                }}
                inputWrapperStyle={{
                    padding: 10,
                }}
                placeholder={placeHolder}
                onFocus={() => {
                    setTimeout(() => {
                        scrollViewRef.current?.scrollToEnd({ animated: true });
                    }, 250);
                }}
                onChangeText={(msg) => {
                    setReviewMessage(msg)
                    data(msg)
                }}
            />
            {
                showBottomRemaningTxt &&
                <Text style={styles.bottomTxtStyle}>
                    {limit - reviewMessage.length} remaining
                </Text>
            }
        </View>
    )
}

export default MultiLineInput

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 15,
        color: Colors.textSecondary,
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 15,
        color: Colors.textPrimary,
        marginTop: 20,
        marginBottom: 10,
    },
    bottomTxtStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
})