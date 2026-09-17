import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../../theme/Colors'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../../../assets/fonts'
import { Icons } from '../../../../assets/icons'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../../component/header/AppHeader'
import AppButton from '../../../../component/button/AppButton'
import MealContainer from '../../../../component/container/MealContainer'
import LogoutModal from '../../../../component/modal/LogoutModal'


type ProfileTabOptions = {
  id: string,
  option: string,
  icon: ImageSourcePropType,
  navigateTo?: string
  rightText?: string,
  showToggle?: boolean
}

const ProfileTabOptions: ProfileTabOptions[] = [
  {
    id: "1",
    option: "Edit menu",
    icon: Icons.EDIT,
    navigateTo: "EditMenuScreen",
  },
  {
    id: "2",
    option: "Reviews",
    icon: Icons.STAR_OUTLINE,
    rightText: "4.7 ★",
    navigateTo: "ReviewScreen",
  },
  {
    id: "3",
    option: "Payouts",
    icon: Icons.SHIELD,
    rightText: "UPI / Cash",
    navigateTo: "PayoutScreen",
  },
  {
    id: "4",
    option: "Order notifications",
    icon: Icons.BELL,
    navigateTo: "",
    showToggle: true
  },
];


const SellerProfileTab = ({ navigation }: any) => {
  const [isNotificationEnable, setIsNotificationEnable] = useState(false)
  const [logoutVisible, setLogoutVisible] = useState(false)
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            showLeftElement={false}
            title="Profile"
            showDoubleTitle={false}
          />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>

            <MealContainer />
            <View style={{
              backgroundColor: Colors.white,
              marginVertical: 20,
              borderRadius: 15,
              ...CommonStyle.shadowStyle,
              paddingHorizontal: 10
            }}>
              {
                ProfileTabOptions.map((item, index) => (
                  <TouchableOpacity key={item.id} style={{
                    borderBottomWidth: index == 5 ? 0 : 1,
                    paddingVertical: 18,
                    borderBottomColor: Colors.border,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1
                  }}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate(item.navigateTo)}
                  >
                    <View style={[CommonStyle.flexStyle, { gap: 10 }]}>
                      <Image source={item.icon} style={{ height: 20, width: 20 }} tintColor={Colors.textSecondary} resizeMode='contain' />
                      <Text style={styles.optionTxtStyle}>{item.option}</Text>

                    </View>
                    <View style={[CommonStyle.flexStyle]}>
                      {item.rightText && <Text style={styles.valueTxtStyle}>{item.rightText}</Text>}
                      {
                        item.showToggle ?
                          <TouchableOpacity activeOpacity={0.8} onPress={() => setIsNotificationEnable(!isNotificationEnable)}>
                            <Image source={isNotificationEnable ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF} style={{ height: 18, width: 32 }} resizeMode='center' />
                          </TouchableOpacity>
                          : <Image source={Icons.LeftArrow} style={{ height: 18, width: 18, transform: [{ rotateZ: "180deg" }] }} />
                      }
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>

            <AppButton
              lable='Logout'
              buttonType='OUTLINE'
              buttonStyle={{
                backgroundColor: Colors.background
              }}
              textStyle={{
                color: Colors.error,
                fontFamily: Fonts.Poppins.Medium
              }}
              onPress={() => setLogoutVisible(true)}
            />
            <Text style={styles.appVerionTextStyle}>
              TiffinWala v1.0 • Made in India
            </Text>
          </ScrollView>
        </View>
      </SafeAreaFile>
      <LogoutModal isVisible={logoutVisible}
        onClose={() => setLogoutVisible(false)}
        onLogout={()=>navigation.navigate("AuthNavigator")}
      />
    </View>
  )
}

export default SellerProfileTab

const styles = StyleSheet.create({
  topProfileContainer: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    ...CommonStyle.flexStyle,
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Shadow - Android
    elevation: 2,
  },
  profile: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: Colors.primaryDark,
    justifyContent: "center",
    alignItems: "center",

  },
  profileText: {
    fontFamily: Fonts.Poppins.Bold,
    color: Colors.white,
    fontSize: 20,
  },
  titleStyle: {
    fontFamily: Fonts.Poppins.SemiBold,
    color: Colors.textPrimary,
    fontSize: 17,
  },
  subTitleStyle: {
    fontFamily: Fonts.Inter.Medium,
    color: Colors.textSecondary,
    fontSize: 14,
  },
  appVerionTextStyle: {
    fontFamily: Fonts.Inter.Medium,
    color: Colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginVertical: 20
  },
  optionTxtStyle: {
    fontFamily: Fonts.Inter.Medium,
    color: Colors.textPrimary,
    fontSize: 14,
  },
  valueTxtStyle: {
    fontFamily: Fonts.Inter.Medium,
    color: Colors.textSecondary,
    fontSize: 12,
  }
})