import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../../component/header/AppHeader'
import { Icons } from '../../../../assets/icons'
import { Colors } from '../../../../theme/Colors'
import { Fonts } from '../../../../assets/fonts'
import IconContainer from '../../../../component/other/IconContainer'
import ViewAllComponent from '../../../../component/other/ViewAllComponent'
import RequestUserContainer from '../../../../component/container/RequestUserContainer'
import MenuContainer from '../../../../component/container/MenuContainer'
import { Images } from '../../../../assets/images'
import EditModal from '../../../../component/modal/EditModal'
import { useKitchenStore } from '../../../../store/kitchenStore'
import localStorage from '../../../../storage/LocalStorage'
import { STORE_KEY } from '../../../../storage/StoreKey'
import { KitchenDashboardApi, KitchenDetailsApi, mealListApi } from '../../../../network/ClientApi'
import DashBoardSectionComponent from '../bottomTabScreensComponents/DashBoardSectionComponent'
import { useKitchenDashboardStore } from '../../../../store/KitchenDashboardStore'
import NoDataFound from '../../../../component/other/NoDataFound'

const DashboardTab = ({ navigation }: any) => {
  const [isEditMenuVisible, setisEditMenuVisible] = useState(false)
  const { setKitchenData } = useKitchenStore()
  const { kitchenDashBoardData } = useKitchenDashboardStore()
  const apiHandler = async () => {
    try {
      const kitchenId = localStorage.getItem(STORE_KEY.KITCHEN_ID)
      const kitchenDashBoardId = localStorage.getItem(STORE_KEY.KITCHEN_DASHBOARD_ID)
      const kitchenDetailsResponse = await KitchenDetailsApi(kitchenId ?? '')
      if (!kitchenDetailsResponse.success) return
      setKitchenData(kitchenDetailsResponse?.result ?? '')
      const dashboardId =
        kitchenDashBoardId ||
        kitchenDetailsResponse.result.kitchenDashboardId;
      if (!dashboardId) return
      await KitchenDashboardApi(dashboardId)
      await mealListApi()
    } catch (error) {
      console.log(error)
    }
  }
  useLayoutEffect(() => {
    apiHandler()
  }, [])
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            showLeftElement={false}
            title="Namaste, Rahul"
            customeSubTitle={
              <Text style={styles.subTitle}>Anupama Kitchen</Text>
            }
            rightElement={
              <IconContainer source={Icons.BELL} style={{ height: 20, width: 20 }} onPress={() => navigation.navigate("NotificationScreen")} />
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <DashBoardSectionComponent />
            <ViewAllComponent lable="Today's menu. Fri"
              rightTxt='Edit menu'
              onRightPress={() => setisEditMenuVisible(true)}
              rightLableStyle={{
                color: Colors.primary,
                fontSize: 13
              }}
              ContaineStyle={{ marginTop: 20, marginBottom: 10 }}
            />
            {
              kitchenDashBoardData?.todayMenu ?
                <MenuContainer
                  data={kitchenDashBoardData.todayMenu}
                /> :
                <NoDataFound message='No meal for today.' />
            }


            <ViewAllComponent lable="New requests"
              rightTxt='See all'
              onRightPress={() => navigation.navigate("CustomerTab", { key: "newRequest" })}
              rightLableStyle={{
                color: Colors.primary,
                fontSize: 13
              }}
              ContaineStyle={{ marginTop: 20, marginBottom: 10 }}
            />
            <RequestUserContainer
              userData={
                {
                  lable: "Lunch Daily",
                  message: "Jain thali. no onlion and gralic",
                  tag: "New",
                  title: "Ashish Kanojia"
                }
              }
            />
            <ViewAllComponent lable="New requests"
              ContaineStyle={{ marginTop: 20, marginBottom: 10 }}
            />
            <View style={styles.ProgressContainer}>
              <IconContainer source={Icons.RISE}
                style={{ tintColor: Colors.green, height: 20, width: 20 }}

                containerStyle={{
                  backgroundColor: Colors.light_green_shade,
                  borderWidth: 0
                }}
                size={25} />
              <View style={styles.progressTxtContainer}>
                <Text style={styles.progressTitle}>126 Tiffin delivered</Text>
                <Text style={styles.progressLable}>+12% vs last week • 3 new subscribers</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaFile>
      {
        isEditMenuVisible &&
        <EditModal isVisible={isEditMenuVisible} onClose={() => setisEditMenuVisible(false)} />
      }
    </View>
  )
}

export default DashboardTab

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: Fonts.Inter.Medium,
    fontSize: 14,
    color: Colors.textSecondary
  },
  title: {
    fontFamily: Fonts.Poppins.SemiBold,
    fontSize: 20,
    color: Colors.textPrimary,
    marginTop: 10
  },
  lable: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: 12,
    color: Colors.textSecondary
  },
  ProgressContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    ...CommonStyle.shadowStyle,
    padding: 10,
    borderRadius: 15,
    alignItems: 'flex-start',
    flexDirection: "row",
    gap: 10,
    marginBottom: 10

  },
  progressTxtContainer: {
    gap: 5,
  },
  progressTitle: {
    fontFamily: Fonts.Poppins.SemiBold,
    fontSize: 16,
    color: Colors.textPrimary
  },
  progressLable: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: 14,
    color: Colors.textSecondary
  }
})