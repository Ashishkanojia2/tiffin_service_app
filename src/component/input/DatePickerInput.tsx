import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import InputField from './InputField';
import { Icons } from '../../assets/icons';
import CustomeDatePicker from '../../utils/CustomeDatePicker';
type DatePickerInputProps = {
    selectedDate: (txt: string) => void
}
const DatePickerInput = ({
    selectedDate
}: DatePickerInputProps) => {
    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState('');
    // const [date, setDate] = useState(() => new Date().toLocaleDateString('en-GB', {
    //     day: '2-digit',
    //     month: 'short',
    //     year: 'numeric',
    // }));

    return (
        <>
            <InputField
                label="Start date *"
                editable={false}
                value={date}
                placeholder="Select starting date"
                right={
                    <TouchableOpacity onPress={() => setShowPicker(prev => !prev)}>
                        <Image
                            source={Icons.CALENDAR}
                            style={{ height: 20, width: 20 }}
                        />
                    </TouchableOpacity>
                }
                inputContainerStyle={{
                    marginVertical: 10,
                }}
            />

            {showPicker && (
                <CustomeDatePicker isVisible={showPicker} onClose={() => setShowPicker(false)} dateSelected={(date) => {
                    selectedDate(date)
                    setDate(date)
                }} />
            )}
        </>
    );
};

export default DatePickerInput;