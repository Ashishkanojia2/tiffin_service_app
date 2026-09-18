import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import AppHeader from '../../../component/header/AppHeader'
import SearchField from '../../../component/input/SearchField'
import { Colors } from '../../../theme/Colors'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import { Icons } from '../../../assets/icons'
import { Fonts } from '../../../assets/fonts'
import Container from '../../../component/container/Container'
import IconContainer from '../../../component/other/IconContainer'
import ViewAllComponent from '../../../component/other/ViewAllComponent'
import MealContainer from '../../../component/container/MealContainer'

const FilterOption = [
    {
        id: "1",
        option: "Veg only"
    },
    {
        id: "2",
        option: "Under ₹75"
    }, {
        id: "3",
        option: "4.5+ rating"
    }, {
        id: "4",
        option: "Non-Veg only"
    }, {
        id: "5",
        option: "Delivery"
    }, {
        id: "6",
        option: "Spicey"
    },
]
const HomeTab = ({ navigation }: any) => {
    const [selectedFilter, setSelectFilter] = useState<string[]>([]);
    const filterHandler = (label: string) => {
        if (!label) return;

        const isFilterSelected = selectedFilter.includes(label);

        if (isFilterSelected) {
            setSelectFilter(prev => prev.filter(item => item !== label));
        } else {
            setSelectFilter(prev => [...prev, label]);
        }
    };
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={styles.topContainer} />
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        showLeftElement={false}
                        title="Namaste, Rahul"
                        customeSubTitle={
                            <TouchableOpacity activeOpacity={0.8} style={[CommonStyle.flexStyle, { gap: 3 }]}>
                                <Image
                                    source={Icons.MAP_PIN}
                                    style={{ height: 15, width: 15 }}
                                    tintColor={Colors.primary}
                                    resizeMode="contain"
                                />
                                <Text style={styles.subTitle}> Sector 12 PG Block</Text>
                                <Image
                                    source={Icons.LeftArrow}
                                    style={{
                                        height: 15,
                                        width: 15,
                                        transform: [{ rotateZ: '270deg' }],
                                    }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        rightElement={
                            <IconContainer source={Icons.BELL} style={{ height: 20, width: 20 }} onPress={() => navigation.navigate("NotificationScreen")} />} />

                        <SearchField
                            inputWrapperStyle={{ backgroundColor: Colors.background, marginTop: 10 }}
                        />
                        <View style={styles.filterSectionContainer}>
                            <Container
                                lable='Filter'
                                leftElement={
                                    <Image source={Icons.FILTER} style={{ height: 15, width: 15 }} />

                                } />
                            <ScrollView horizontal
                                contentContainerStyle={{ gap: 7, marginLeft: 10, paddingVertical: 5 }}
                                showsHorizontalScrollIndicator={false}
                            >
                                {
                                    FilterOption.map((item) => (
                                        <Container key={item.id} lable={item.option}
                                            onPress={() => filterHandler(item.option)}
                                            containerStyle={{
                                                backgroundColor: selectedFilter.find((i) => i == item.option) ? Colors.primary : Colors.background
                                            }}
                                            lableStyle={{
                                                color: selectedFilter.find((i) => i == item.option) ? Colors.white : Colors.textSecondary
                                            }}
                                        />
                                    ))
                                }
                            </ScrollView>
                        </View>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingVertical:10 }}>
                        <ViewAllComponent lable='Tiffin near you' rightTxt='3 kitchens' />
                        <MealContainer onPress={() => navigation.navigate("MealDetailsScreen")} />
                        <MealContainer />
                        <MealContainer />
                        <MealContainer />
                        <MealContainer />
                        <MealContainer />
                    </ScrollView>
                </View>
            </SafeAreaFile>
        </View>
    )
}
export default HomeTab
const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Colors.white,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "25%",
    },
    subTitle: {
        fontFamily: Fonts.Inter.Medium,
        fontSize: 12,
        color: Colors.textSecondary
    },
    filterSectionContainer: {
        ...CommonStyle.flexStyle,
        height: "7%",
        // backgroundColor: "pink"
    }
})