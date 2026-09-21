import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputField, { InputProps } from './InputField'
import { Icons } from '../../assets/icons'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'

type DropDownInputProps = InputProps & {
}

const DropDownInput = ({
    label,
    editable = false
}: DropDownInputProps) => {

    const [toogle, setToogle] = useState(false);
    const [selectedOption, setSelectedOption] = useState('')

    const options = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    return (<View >
        <InputField
            value={selectedOption}
            label={label}
            editable={editable}
            right={
                <TouchableOpacity onPress={() => setToogle(!toogle)}>
                    <Image source={Icons.LeftArrow} style={{ height: 25, width: 25, transform: [{ rotateZ: toogle ? "90deg" : '270deg' }] }} />
                </TouchableOpacity>
            }
        />
        {toogle && (
            <ScrollView
                style={styles.optionsContainer}
                nestedScrollEnabled
                scrollEnabled
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:10}}
            >
                {options.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                        setSelectedOption(item)
                        setToogle(false)
                    }}>
                        <Text style={styles.optionTxtStyle}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )}
    </View>
    )
}

export default DropDownInput

const styles = StyleSheet.create({
    optionsContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.border,
        padding: 10,
        zIndex: 100,
        height: 100,
    },
    optionsContent: {
        flexGrow: 0,
    },
    optionTxtStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 15,
        color: Colors.textPrimary
    }
})