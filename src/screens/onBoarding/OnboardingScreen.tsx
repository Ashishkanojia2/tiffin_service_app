import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '../../theme/Colors';
import { Fonts } from '../../assets/fonts';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';
import { Images } from '../../assets/images';
import AppButton from '../../component/button/AppButton';
import { Icons } from '../../assets/icons';
const { width, height } = Dimensions.get('window')
const OnboardingScreen = ({ navigation }: any) => {
    const scrollRef = useRef<ScrollView>(null)
    const [currentIndex, setCurrentIndex] = useState(0);

    type OnboardingDataProps = {
        id: string;
        title: string;
        subTitle: string;
    };

    const onBoardingData: OnboardingDataProps[] = [
        {
            id: "1",
            title: "Home-cooked food, delivered daily",
            subTitle: "Fresh rotis, dal and sabzi from real kitchens — not a cloud restaurant.",
        },
        {
            id: "2",
            title: "From trusted PG kitchens & home chefs near you",
            subTitle: "Browse verified kitchens in your locality, coaching area or PG block.",
        },
        {
            id: "3",
            title: "Subscribe once, eat stress-free",
            subTitle: "Daily, weekly or monthly plans. Pause or skip a meal in one tap.",
        },
    ]

    const directNavigate = () => (
        navigation.navigate("AuthNavigator")
    )

    const handleNextPress = () => {
        const nextIndex = currentIndex + 1;

        if (nextIndex < onBoardingData.length) {
            setCurrentIndex(nextIndex);

            scrollRef.current?.scrollTo({
                x: width * nextIndex,
                animated: true,
            });
        } else {
            directNavigate()
        }
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image source={Images.ONBOARDING} style={{ height: 300, width: 300 }} resizeMode="cover" />
            </View>
            <View style={[{ flex: 1 }, CommonStyle.appBorderSpacing]}>

                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    {
                        Array.from({ length: onBoardingData.length }).map((_, index) => (
                            <View key={index} style={[styles.inidcatorStyle, {
                                backgroundColor: currentIndex === index ? Colors.primary : Colors.border,
                                width: currentIndex === index ? 20 : 10
                            }]} />
                        ))
                    }
                </View>
                <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled >
                    {onBoardingData.map((item) => (
                        <View key={item.id} style={{ width: width }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subTitle} numberOfLines={3}>{item.subTitle}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={{ flexDirection: "row", marginBottom: 50, alignItems: "center" }}>
                    <AppButton lable='Next' buttonType="FIELD"
                        buttonStyle={{ width: currentIndex === onBoardingData.length - 1 ? '100%' : '70%', }}
                        sufix={
                            <Image source={Icons.RIGHT_ARROW} style={{ height: 20, width: 15, marginLeft: 10 }} tintColor={Colors.white} resizeMode='cover' />
                        }
                        onPress={handleNextPress} />
                    {
                        currentIndex < onBoardingData.length - 1 &&
                        <TouchableOpacity style={styles.skipContainer} activeOpacity={0.8} onPress={directNavigate}>
                            <Text style={styles.skipTxtStyle}>Skip</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}
export default OnboardingScreen
const styles = StyleSheet.create({
    rootContainer: {
        ...CommonStyle.appBackground,
    },
    imageContainer: {
        backgroundColor: Colors.yellow,
        width: "100%",
        height: height / 1.5,
        justifyContent: "center",
        alignItems: "center"
    },
    inidcatorStyle: {
        width: 10,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 3,
    },
    title: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 23,
        color: Colors.textPrimary
    },
    subTitle: {
        fontFamily: Fonts.Inter.Regular,
        fontSize: 16,
        color: Colors.textSecondary,
        marginTop: 10,
        flexWrap: "wrap"
    },
    skipContainer: {
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    skipTxtStyle: {
        fontFamily: Fonts.Inter.SemiBold,
        fontSize: 16,
        color: Colors.textSecondary
    }
})