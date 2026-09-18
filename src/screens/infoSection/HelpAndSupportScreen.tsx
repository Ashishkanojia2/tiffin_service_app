import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors } from '../../theme/Colors';
import AppButton from '../../component/button/AppButton';
import AppHeader from '../../component/header/AppHeader';
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';
import { Fonts } from '../../assets/fonts';
import InputField from '../../component/input/InputField';
import KeyboardWrapper from '../../utils/KeyboardWrapper';


const MAX_REVIEW_LIMIT = 200;
const HelpAndSupportScreen = ({ navigation }: any) => {
    const scrollViewRef = useRef<React.ElementRef<typeof ScrollView>>(null);
    const [reviewMessage, setReviewMessage] = useState('');

    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader title="Rate your tiffin" showDoubleTitle={false} />
                    <KeyboardWrapper>
                        <ScrollView
                            ref={scrollViewRef}
                            style={styles.scrollView}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={styles.scrollContent}
                            >
                                <Text style={styles.lableStyle}>
                                    Write a you query
                                </Text>
                                <InputField
                                    value={reviewMessage}
                                    multiline
                                    maxLength={MAX_REVIEW_LIMIT}
                                    style={{
                                        minHeight: 150,
                                    }}
                                    inputWrapperStyle={{
                                        padding: 10,
                                    }}
                                    placeholder="Write something here..."
                                    onFocus={() => {
                                        setTimeout(() => {
                                            scrollViewRef.current?.scrollToEnd({ animated: true });
                                        }, 250);
                                    }}
                                    onChangeText={setReviewMessage}
                                />

                                <Text style={styles.bottomTxtStyle}>
                                    {MAX_REVIEW_LIMIT - reviewMessage.length} remaining
                                </Text>
                        </ScrollView>
                                <AppButton
                                    lable="Submit Rating"
                                    buttonType="FIELD"
                                    buttonStyle={styles.submitButton}
                                />
                    </KeyboardWrapper>
                </View>
            </SafeAreaFile>
        </View>
    );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: 10,
        paddingBottom: 24,
    },
    submitButton: {
        marginTop: 20,
        marginBottom: 10,
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 15,
        color: Colors.textPrimary,
        marginBottom: 10,
    },
    bottomTxtStyle: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
});
