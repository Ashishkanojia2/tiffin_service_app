import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { DatePicker } from '@quidone/react-native-wheel-picker'
import { Colors } from '../theme/Colors'
import { Fonts } from '../assets/fonts'
import { Icons } from '../assets/icons'

const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
};

export type DatePickerProps = {
    dateSelected?: (date: string) => void;
    isVisible: boolean;
    onClose: () => void;
};
const CustomeDatePicker = ({ dateSelected, onClose, isVisible }: DatePickerProps) => {
    const [date, setDate] = useState(() => formatDate(new Date()));
    const handleDateChange = ({ date: selectedDate }: { date: string }) => {
        setDate(selectedDate);
    };

    const handleSelect = () => {
        dateSelected?.(new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }));
        onClose();
    };
    return (
        <Modal
            animationType={'fade'}
            transparent
            visible={isVisible}
        >
            <View style={styles.overlay}>
                <View style={styles.containerStyle}>
                    <TouchableOpacity style={{ alignSelf: "flex-end" }} activeOpacity={0.7} onPress={onClose}>
                        <Image source={Icons.CLOSE} style={{ height: 24, width: 24 }} resizeMode="contain" />
                    </TouchableOpacity>
                    <DatePicker
                        date={date}
                        onDateChanged={handleDateChange}
                        scrollEventThrottle={10}
                        minDate={formatDate(new Date())}
                        enableScrollByTapOnItem
                    />
                    <TouchableOpacity onPress={handleSelect} activeOpacity={0.7} style={{ alignSelf: "flex-end" }}>
                        <Text style={styles.txtStyle}>Select</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomeDatePicker

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.backDrop,
        justifyContent: "center",
        alignItems: "center"

    },
    containerStyle: {
        width: "90%",
        borderRadius: 15,
        backgroundColor: Colors.background,
        padding: 20,
        alignSelf: "center",
        alignItems: "center"
    },
    txtStyle: {
        fontSize: 16,
        color: Colors.primary,
        fontFamily: Fonts.Poppins.SemiBold
    }
})