import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppButton from '../../../component/button/AppButton'
import { Icons } from '../../../assets/icons'
import { Colors } from '../../../theme/Colors'

const SubscriptionConfirmedScreen = () => {
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={{alignItems:"center", justifyContent:"center" , flex:1}}>
          <Image source={Icons.CORRECT} style={{height:80 , width:80 , backgroundColor:Colors.vegDot , borderRadius:50}} tintColor={Colors.white} resizeMode='contain'/>
          <Text>Subscription confirmed!</Text>
          <Text>Your kitchen has been notified. Enjoy your ghar ka khana.</Text>
          <Text>Payment is handled directly with the kitchen - pay via UPI or cash on delivery. No in-app payment needed.</Text>
        </View>
          <AppButton lable='Go to My Subscriptions' />
      </SafeAreaFile>
    </View>
  )
}

export default SubscriptionConfirmedScreen

const styles = StyleSheet.create({})