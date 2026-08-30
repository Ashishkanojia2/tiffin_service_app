import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField, { InputProps } from './InputField'
import { Colors } from '../../theme/Colors'
import { Icons } from '../../assets/icons'
type SearchFieldProps = InputProps;
const SearchField = (props: SearchFieldProps) => {
    return (
        <InputField
            {...props}
            inputWrapperStyle={[
                styles.containerStyle,
                props.inputWrapperStyle,
            ]}
            left={
                <Image source={Icons.SEARCH} style={{ height: 20, width: 20 }} />
            }
            placeholder='Search PG, coaching or area'
        />
    )
}

export default SearchField

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.white,
        paddingHorizontal: 10
    }
})