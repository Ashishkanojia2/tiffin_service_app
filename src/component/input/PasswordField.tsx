import { Image, TextInput, TouchableOpacity, } from 'react-native'
import React, { forwardRef, useState } from 'react'
import InputField, { InputProps } from './InputField'
import { Icons } from '../../assets/icons';

const PasswordField = forwardRef<TextInput, InputProps>((props, ref) => {
    const [isSecure, setIsSecure] = useState<boolean>(true);
    return (
        <InputField
            {...props}
            ref={ref}
            autoCapitalize='none'
            textContentType="password"
            spellCheck={false}
            autoCorrect={false}
            secureTextEntry={isSecure}
            returnKeyType={props.returnKeyType || 'done'}
            right={
                <TouchableOpacity
                    activeOpacity={0.6} onPress={() => setIsSecure((prev) => !prev)}>
                    <Image source={isSecure ? Icons.SHOW : Icons.HIDE} style={{ height: 15, width: 23 }} />
                </TouchableOpacity>
            }
        />

    )
})

export default PasswordField;

