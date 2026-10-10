import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppButton from '../../../component/button/AppButton'
import { Icons } from '../../../assets/icons'
import { Colors } from '../../../theme/Colors'
import { Fonts } from '../../../assets/fonts'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types/AppTypes'
import DateReader from '../../../helper/DateReader'

type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SubscriptionConfirmedScreen'
>;
const SubscriptionConfirmedScreen = ({ navigation, route }: MealDetailsScreenProps) => {
  const { subscribeMeal } = route.params
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={styles.container}>
          <Image source={Icons.CORRECT} style={styles.imageStyle} tintColor={Colors.white} resizeMode='contain' />
          <Text style={styles.header}>Subscription confirmed!</Text>
          <Text style={styles.message}>Your kitchen has been notified. Enjoy your ghar ka khana.</Text>

          <View style={styles.overallContainer}>
            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
              <Text style={styles.detailsTxtStyle}>Kitchen</Text>
              <Text style={styles.detailsTxtStyle}>{subscribeMeal.kitchenName}</Text>
            </View>
            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
              <Text style={styles.detailsTxtStyle}>Plan</Text>
              <Text style={styles.detailsTxtStyle}>{subscribeMeal.plan} • {subscribeMeal.meal == "Both" ? "Lunch + Dinner" : subscribeMeal.meal}</Text>
            </View>
            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
              <Text style={styles.detailsTxtStyle}>Starts on</Text>
              <Text style={styles.detailsTxtStyle}>{DateReader(subscribeMeal.startOn)}</Text>
            </View>

            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between" }]}>
              <Text style={styles.detailsTxtStyle}>Mode</Text>
              <Text style={styles.detailsTxtStyle}>{subscribeMeal.mode}</Text>
            </View>
            <View style={[CommonStyle.flexStyle, { justifyContent: "space-between", borderTopColor: Colors.border, borderTopWidth: 1, paddingVertical: 10 }]}>
              <Text style={styles.payableTxtStyle}>Amount</Text>
              <Text style={[styles.payableTxtStyle, { color: Colors.primary }]}>₹ {subscribeMeal.amount}</Text>
            </View>
          </View>



          <Text style={styles.bottomMessageContainer}>Payment is handled directly with the kitchen - pay via UPI or cash on delivery. No in-app payment needed.</Text>
          <AppButton lable='Go to My Subscriptions' onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaFile>
    </View>
  )
}

export default SubscriptionConfirmedScreen

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.appBorderSpacing,
    justifyContent: "center",
    flex: 1
  },
  imageStyle: { height: 80, width: 80, backgroundColor: Colors.vegDot, borderRadius: 50, alignSelf: "center", marginBottom: "10%" },

  header: {
    fontFamily: Fonts.Poppins.SemiBold,
    fontSize: 20,
    color: Colors.textPrimary,
    textAlign: "center"
  },
  message: {
    fontFamily: Fonts.Poppins.Medium,
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center"
  },
  bottomMessageContainer: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: 10,
    color: Colors.textPrimary,
    textAlign: "center",
    backgroundColor: Colors.yellow,
    borderRadius: 15,
    paddingHorizontal: 10, paddingVertical: 10,
    marginBottom: "20%"
  },
  overallContainer: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    ...CommonStyle.shadowStyle,
    padding: 15,
    gap: 10,
    marginVertical: 15
  },
  detailsTxtStyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Regular,
    color: Colors.textSecondary
  },
  payableTxtStyle: {
    fontSize: 15,
    fontFamily: Fonts.Poppins.SemiBold,
    color: Colors.textPrimary
  }
})