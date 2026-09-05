import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../component/header/AppHeader'
import { Images } from '../../assets/images'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { Icons } from '../../assets/icons'
import Segement, { SegementDataPropType } from '../../component/segement'
import MenuContainer, { MenuDataPropsType } from '../../component/container/MenuContainer'
import AppButton from '../../component/button/AppButton'
import Container from '../../component/container/Container'
import ReviewContainer, { ReviewDataPropType } from '../../component/container/ReviewContainer'

const segementData: SegementDataPropType[] = [
  {
    id: "1",
    lable: "This Week's Menu"
  },
  {
    id: "2",
    lable: "About"
  },
  {
    id: "3",
    lable: "Review"
  },

]
const OrderListProps: MenuDataPropsType[] = [
  {
    id: "1",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: false,
    KitchenName: "Mon",
  },
  {
    id: "2",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Tue",
  },
  {
    id: "3",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Wed",
  }, {
    id: "4",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Thu",
  }, {
    id: "5",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Fri",
  },
  {
    id: "6",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Sat",
  },
  {
    id: "7",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Sun",
  },

]

const reviewData: ReviewDataPropType[] = [
  {
    id: "1",
    name: "Rahul K.",
    userRating: 5,
    message: "Roti soft and food always on time. Feels like home.",
    date: "24 Aug",
  },
  {
    id: "2",
    name: "Priya S.",
    userRating: 4,
    message: "Tasty, but dinner was 20 min late twice this week.",
    date: "22 Aug",
  },
  {
    id: "3",
    name: "Amit R.",
    userRating: 5,
    message: "Amazing taste and very good quantity. Highly recommended.",
    date: "21 Aug",
  },
  {
    id: "4",
    name: "Neha P.",
    userRating: 4,
    message: "Food was fresh and tasty. Delivery was also quick.",
    date: "19 Aug",
  },
  {
    id: "5",
    name: "Vikas M.",
    userRating: 3,
    message: "Food was okay, but the curry was a little spicy.",
    date: "18 Aug",
  },
  {
    id: "6",
    name: "Anjali S.",
    userRating: 5,
    message: "Really delicious food. Feels like homemade meals.",
    date: "16 Aug",
  },
  {
    id: "7",
    name: "Rohit K.",
    userRating: 4,
    message: "Good food and portion size. Delivery could be faster.",
    date: "15 Aug",
  },
  {
    id: "8",
    name: "Sneha T.",
    userRating: 5,
    message: "Loved the food. Everything was fresh and perfectly cooked.",
    date: "13 Aug",
  },
  {
    id: "9",
    name: "Arjun V.",
    userRating: 3,
    message: "Taste was good but the food was slightly oily.",
    date: "11 Aug",
  },
  {
    id: "10",
    name: "Kavya N.",
    userRating: 4,
    message: "Good quality food and friendly delivery service.",
    date: "09 Aug",
  },
];
const MealDetailsScreen = ({ navigation }: any) => {
  const [segementValue, setSegement] = useState("This Week's Menu")
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <ImageBackground source={Images.KITCHEN_1} style={styles.imageStyle} resizeMode='cover'>
          <AppHeader showDoubleTitle={false} title='' containerStyle={{ paddingHorizontal: 12 }} />
        </ImageBackground>
        <View style={CommonStyle.appBorderSpacing}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
            <View style={{ gap: 5 }}>
              <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                <Text style={styles.titleStyle}>Annupma Kitchen</Text>
                <View style={[styles.dotContaner, { backgroundColor: Colors.vegDot }]}>
                  <Image source={Icons.STAR_FILLED} style={{ height: 10, width: 10 }} tintColor={Colors.white} />
                  <Text style={[styles.mealTypeTxtStyle, { color: Colors.white }]}>4.7</Text>
                </View>
              </View>
              <Text style={styles.subTitleStyle}>by Sunita Sharma</Text>
              <Text style={styles.subTitleStyle}>Location: Goal market, near goal bazar, jaipur</Text>
              <Text style={styles.subTitleStyle}>Lunch 12:30 PM • Dinner 8:00 PM oo Delivery + Pickup</Text>

              <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
                <Text style={styles.priceTxtStyle}>
                  ₹ 70 <Text style={styles.mealTxtStyle}>/ meal</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.dotContaner, { backgroundColor: "#def9e5", marginBottom: 10 }]}>
              <View style={styles.dot} />
              <Text style={styles.mealTypeTxtStyle}>Veg</Text>
            </View>
            <Segement segementData={segementData} selectedValue={(txt: string) => setSegement(txt)}
              optionTxtStyle={styles.segementTxtStyle}
            />
            <View style={{ gap: 10, marginVertical: 10, paddingHorizontal: 5 }}>

              {
                segementValue === "This Week's Menu" ?
                  (

                    OrderListProps.map(item => (
                      <MenuContainer
                        key={item.id}
                        data={item}
                      />
                    ))
                  )
                  :
                  segementValue === "About" ?
                    <View style={styles.aboutContainer}>
                      <Text style={styles.aboutTitleTxtStyle}>Pure veg ghar ka khana cooked fresh twice a day by Sunita ji. Low oil, no onion-garlic option available on request.</Text>
                      <Text style={styles.aboutSubTitleStyle}>FSSAI verified • Serving since 2023 • 128 happy customers</Text>
                    </View>
                    : segementValue === "Review" ?
                      <FlatList
                        data={reviewData}
                        keyExtractor={(item) => item.id ?? ""}
                        renderItem={({ item }) => (
                          <ReviewContainer data={item} />
                        )}
                        contentContainerStyle={{
                          gap: 10,
                          paddingVertical: 10,
                        }}
                        showsVerticalScrollIndicator={false}
                      />
                      :
                      undefined

              }

            </View>
          </ScrollView>
          <View style={[CommonStyle.flexStyle, { paddingTop: 10 }]}>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={styles.bottomTitleStyle}>Starting at</Text>
              <Text style={styles.bottomSubTitleStyle}>₹ 70 / meal</Text>
            </View>
            <AppButton lable='Subscribe Now' buttonStyle={{ flex: 1 }} onPress={() => navigation.navigate('SubscriptionScreen')} />
          </View>
        </View>
      </SafeAreaFile>
    </View>
  )
}
export default MealDetailsScreen

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 190,
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.SemiBold,
    color: Colors.textPrimary
  },
  subTitleStyle: {
    fontSize: 14,
    fontFamily: Fonts.Inter.Regular,
    color: Colors.textSecondary
  },
  priceTxtStyle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.SemiBold,
    color: Colors.primary
  },
  perMealTxt: {},

  dot: {
    width: 10, height: 10,
    backgroundColor: Colors.vegDot,
    borderRadius: 20,
  },
  mealTypeTxtStyle: {

  },
  mealTxtStyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Regular,
    color: Colors.textSecondary
  },
  dotContaner: {
    ...CommonStyle.flexStyle,
    justifyContent: "space-between",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: "flex-start"
  },
  segementTxtStyle: {
    fontSize: 10,
  },
  bottomTitleStyle: {
    fontSize: 15,
    fontFamily: Fonts.Inter.Regular,
    color: Colors.textSecondary
  },
  bottomSubTitleStyle: {
    fontSize: 18,
    fontFamily: Fonts.Poppins.SemiBold,
    color: Colors.textPrimary
  },
  aboutContainer: {
    gap: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10
  },
  aboutTitleTxtStyle: {
    fontSize: 16,
    fontFamily: Fonts.Inter.Regular,
    color: Colors.textPrimary
  },
  aboutSubTitleStyle: {
    fontSize: 13,
    fontFamily: Fonts.Inter.Regular,
    color: Colors.textSecondary
  }
})