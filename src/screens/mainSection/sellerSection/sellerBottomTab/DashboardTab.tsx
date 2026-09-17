import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../../component/header/AppHeader'
import { Icons } from '../../../../assets/icons'
import { Colors } from '../../../../theme/Colors'
import { Fonts } from '../../../../assets/fonts'
import IconContainer from '../../../../component/other/IconContainer'
import ViewAllComponent from '../../../../component/other/ViewAllComponent'
import RequestUserContainer from '../../../../component/container/RequestUserContainer'
import MenuContainer, { MenuDataPropsType } from '../../../../component/container/MenuContainer'
import { Images } from '../../../../assets/images'

const dashboardData = [
  {
    id: "1",
    lable: "Today's tiffins",
    bgColor: Colors.light_primary_shade,
    image: Icons.CUTLERY,
    value: "18",
    iconColor: Colors.primary
  },
  {
    id: "2",
    lable: "Active subscriber",
    bgColor: Colors.light_green_shade,
    image: Icons.USERS,
    value: "2",
    iconColor: Colors.green
  },
  {
    id: "3",
    lable: "This month",
    bgColor: Colors.background,
    image: Icons.RUPEE,
    value: "₹ 32000",
    iconColor: Colors.textSecondary
  }, {
    id: "4",
    lable: "Rating",
    bgColor: Colors.background,
    image: Icons.STAR_OUTLINE,
    value: "4.5",
    iconColor: Colors.textSecondary
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
]
const DashboardTab = ({ navigation }: any) => {
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
            <View style={styles.topContainer}>
              {dashboardData.map((item, index) => (
                <View key={item.id} style={styles.dashboardCard}>
                  <IconContainer source={item.image} style={{ height: 18, width: 18, tintColor: item.iconColor }} containerStyle={{ padding: 7, backgroundColor: item.bgColor }} disablePress />
                  <Text style={styles.title}>{item.value}</Text>
                  <Text style={styles.lable}>{item.lable}</Text>
                </View>))}
            </View>
            <ViewAllComponent lable="Today's menu. Fri"
              rightTxt='Edit menu'
              onRightPress={() => { }}
              rightLableStyle={{
                color: Colors.primary,
                fontSize: 13
              }}
              ContaineStyle={{ marginTop: 20, marginBottom: 10 }}
            />
            {

              OrderListProps.map(item => (
                <MenuContainer
                  key={item.id}
                  data={item}
                />
              ))
            }
            <ViewAllComponent lable="New requests"
              rightTxt='See all'
              onRightPress={() => { }}
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
              style={{tintColor:Colors.green , height:20, width:20}}

              containerStyle={{
                backgroundColor: Colors.light_green_shade,
                // padding: 7,
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
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  dashboardCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    width: '48%',
    alignItems: "flex-start",
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