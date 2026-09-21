import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../component/header/AppHeader'
import MenuContainer, { MenuDataPropsType } from '../../../component/container/MenuContainer'
import EditModal from '../../../component/modal/EditModal'
import { Fonts } from '../../../assets/fonts'
import { Colors } from '../../../theme/Colors'
import { Images } from '../../../assets/images'
import AppButton from '../../../component/button/AppButton'

const EditMenuScreen = () => {
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
    },
    //  {
    //   id: "5",
    //   amount: '70',
    //   date: "20 Aug 2026",
    //   foodItem: "Lunch. dal Fired,",
    //   image: Images.KITCHEN_1,
    //   isRated: true,
    //   KitchenName: "Fri",
    // },
    // {
    //   id: "6",
    //   amount: '70',
    //   date: "20 Aug 2026",
    //   foodItem: "Lunch. dal Fired,",
    //   image: Images.KITCHEN_1,
    //   isRated: true,
    //   KitchenName: "Sat",
    // },
    // {
    //   id: "7",
    //   amount: '70',
    //   date: "20 Aug 2026",
    //   foodItem: "Lunch. dal Fired,",
    //   image: Images.KITCHEN_1,
    //   isRated: true,
    //   KitchenName: "Sun",
    // },

  ]
  const [editModalVisble, setEditModalVisible] = useState(false)
  const [modalType, setModalType] = useState<"EDIT_MEAL" | "ADD_MEAL">("EDIT_MEAL")

  const modalHandler = (type: "EDIT_MEAL" | "ADD_MEAL") => {
    if (!type) return
    setModalType(type)
    setEditModalVisible(true)
  }
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            title="Add / Edit menu"
            customeSubTitle={
              <Text style={styles.subTitle}>This week tiffin</Text>
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ marginTop: 10, gap: 10, paddingBottom: 20 }}>
            {
              OrderListProps.map(item => (
                <MenuContainer
                  key={item.id}
                  data={item}
                  isEditable
                  onEditPress={() => modalHandler("EDIT_MEAL")}
                />
              ))
            }
            <AppButton lable='Add menu' onPress={() => modalHandler("ADD_MEAL")} />
          </ScrollView>
        </View>
      </SafeAreaFile>
      <EditModal isVisible={editModalVisble} onClose={() => setEditModalVisible(false)} modalType={modalType}/>
    </View>
  )
}

export default EditMenuScreen

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: Fonts.Inter.Medium,
    fontSize: 14,
    color: Colors.textSecondary
  },

})