import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors } from '../../theme/Colors';
import AppButton from '../../component/button/AppButton';
import AppHeader from '../../component/header/AppHeader';
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';
import { Fonts } from '../../assets/fonts';
import { Icons } from '../../assets/icons';
import Container from '../../component/container/Container';
import InputField from '../../component/input/InputField';
import KeyboardWrapper from '../../utils/KeyboardWrapper';

const starLength = 5;
const quickResponseData = [
    {
        lable: 'Tasty',
    },
    {
        lable: 'Hot & fresh',
    },
    {
        lable: 'Good quantity',
    },
    {
        lable: 'On time',
    },
    {
        lable: 'Too oily',
    },
    {
        lable: 'Late delivery',
    },
];
const MAX_REVIEW_LIMIT = 200;
const RateScreen = ({ navigation }: any) => {
    const scrollViewRef = useRef<React.ElementRef<typeof ScrollView>>(null);
    const [selectQickFeecback, setSelectQuickFeedback] = useState<string[]>([]);
    const [starRating, setStarRating] = useState(0);
    const [reviewMessage, setReviewMessage] = useState('');
    const quickResponseHandler = (lable: string) => {
        if (!lable) return;
        const isExist = selectQickFeecback.find(item => item === lable);
        if (isExist) {
            setSelectQuickFeedback(selectQickFeecback.filter(pre => pre !== lable));
        } else {
            setSelectQuickFeedback(pre => [...pre, lable]);
        }
    };

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
                                <View style={styles.ratingStartContainer}>
                                    <Text style={styles.textStyle}>
                                        How was the food?
                                    </Text>

                                    <View
                                        style={[
                                            CommonStyle.flexStyle,
                                            {
                                                gap: 7,
                                                marginVertical: 10,
                                            },
                                        ]}
                                    >
                                        {Array.from({ length: starLength }).map((_, index) => {
                                            const rating = index + 1;

                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => setStarRating(rating)}
                                                    activeOpacity={0.8}
                                                >
                                                    <Image
                                                        source={
                                                            rating <= starRating
                                                                ? Icons.STAR_FILLED
                                                                : Icons.STAR_OUTLINE
                                                        }
                                                        style={{
                                                            height: 30,
                                                            width: 30,
                                                        }}
                                                        resizeMode="contain"
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>

                                <Text style={styles.lableStyle}>
                                    Quick feedback
                                </Text>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        gap: 10,
                                    }}
                                >
                                    {quickResponseData.map(item => (
                                        <Container
                                            key={item.lable}
                                            lable={item.lable}
                                            onPress={() =>
                                                quickResponseHandler(item.lable)
                                            }
                                            containerStyle={{
                                                backgroundColor:
                                                    selectQickFeecback.includes(item.lable)
                                                        ? Colors.primary
                                                        : Colors.background,
                                            }}
                                            lableStyle={{
                                                color:
                                                    selectQickFeecback.includes(item.lable)
                                                        ? Colors.white
                                                        : Colors.textSecondary,
                                                fontSize: 14,
                                            }}
                                        />
                                    ))}
                                </View>

                                <Text style={styles.lableStyle}>
                                    Write a review (Optional)
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

export default RateScreen;

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
    ratingStartContainer: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
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
});
