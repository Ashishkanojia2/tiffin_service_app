import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../../component/header/AppHeader'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../../../assets/fonts'
import { Colors } from '../../../../theme/Colors'
import MenuContainer, { MenuDataPropsType } from '../../../../component/container/MenuContainer'
import { Images } from '../../../../assets/images'
import EditModal from '../../../../component/modal/EditModal'

const MenuTab = () => {
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
  const [editModalVisble, setEditModalVisible] = useState(false)
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            showLeftElement={false}
            title="Menu"
            customeSubTitle={
              <Text style={styles.subTitle}>Weekly tiffin plan</Text>
            }
          />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginVertical: 10, gap: 10 }}>
            {

              OrderListProps.map(item => (
                <MenuContainer
                  key={item.id}
                  data={item}
                  isEditable
                  onEditPress={() => setEditModalVisible(true)}
                />
              ))
            }
          </ScrollView>
        </View>
      </SafeAreaFile>
      <EditModal isVisible={editModalVisble} onClose={() => setEditModalVisible(false)} />
    </View>
  )
}

export default MenuTab

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: Fonts.Inter.Medium,
    fontSize: 14,
    color: Colors.textSecondary
  },

})