import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '../input/InputField';
import { Fonts } from '../../assets/fonts';
import { Colors } from '../../theme/Colors';
type MultipLineContainerProps = {
    maxTextLenght?: number,
    lableStyle?: StyleProp<TextStyle>,
    lengthTextStyle?: StyleProp<TextStyle>
    lable: string,
    placeholder: string,
    value: (txt: string) => void

}
const MultilineContainer = ({
    maxTextLenght = 200,
    lableStyle, lengthTextStyle,
    lable,
    placeholder = 'Write something here...',
    value,
}: MultipLineContainerProps) => {
    const MAX_REVIEW_LIMIT = maxTextLenght;
    const [message, setMessage] = useState('');
    return (
        <View>
            <InputField
                value={message}
                multiline
                label={lable}
                maxLength={MAX_REVIEW_LIMIT}
                style={{
                    minHeight: 150,
                }}
                inputWrapperStyle={{
                    padding: 10,
                }}
                placeholder={placeholder}
                // onFocus={() => {
                //     setTimeout(() => {
                //         scrollViewRef.current?.scrollToEnd({ animated: true });
                //     }, 250);
                // }}
                onChangeText={(txt: string) => {
                    setMessage(txt)
                    value(txt)
                }}
            />
            <Text style={[styles.bottomTxtStyle, lengthTextStyle]}>
                {MAX_REVIEW_LIMIT - message.length} remaining
            </Text>
        </View>
    )
}

export default MultilineContainer

const styles = StyleSheet.create({
    bottomTxtStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
})