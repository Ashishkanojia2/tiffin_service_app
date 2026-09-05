import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import AppHeader from '../../../component/header/AppHeader'
import ListContainer, { ListDataPropsType } from '../../../component/container/ListContainer'
import { Images } from '../../../assets/images'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'


const OrderListProps: ListDataPropsType[] = [
  {
    id: "1",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: false,
    KitchenName: "Annupma Dhaba Service",
  },
  {
    id: "2",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Annupma Dhaba Service",
  },
  {
    id: "3",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Annupma Dhaba Service",
  }, {
    id: "4",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Annupma Dhaba Service",
  }, {
    id: "5",
    amount: '70',
    date: "20 Aug 2026",
    foodItem: "Lunch. dal Fired,",
    image: Images.KITCHEN_1,
    isRated: true,
    KitchenName: "Annupma Dhaba Service",
  },
]


const OrderTab = ({ navigation }: any) => {
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            showLeftElement={false}
            title="Order History"
            SubTitle='Your past tiffins'
          />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10, gap: 10 }}>
            {
              OrderListProps.map(item => (
                <ListContainer
                  key={item.id}
                  data={item}
                  RatePress={() => navigation.navigate('RateScreen')}
                />
              ))
            }
          </ScrollView>
        </View>
      </SafeAreaFile>
    </View>
  )
}

export default OrderTab

const styles = StyleSheet.create({})