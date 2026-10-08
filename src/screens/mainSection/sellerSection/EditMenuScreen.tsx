import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonStyle } from '../../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../../helper/uiComponent/SafeAreaFile'
import AppHeader from '../../../component/header/AppHeader'
import MenuContainer from '../../../component/container/MenuContainer'
import EditModal from '../../../component/modal/EditModal'
import { Fonts } from '../../../assets/fonts'
import { Colors } from '../../../theme/Colors'
import AppButton from '../../../component/button/AppButton'
import { useMealStore } from '../../../store/mealListStore'
import { MealListResponseProps } from '../../../types/ApiResponseType'
import { mealListApi } from '../../../network/ClientApi'

const EditMenuScreen = () => {
  const { mealList } = useMealStore();
  const [editModalVisble, setEditModalVisible] = useState(false)
  const [modalType, setModalType] = useState<"EDIT_MEAL" | "ADD_MEAL">("EDIT_MEAL")
  const [selecteMealForEdit, setSelectMealForEdit] = useState<MealListResponseProps>()

  const modalHandler = (type: "EDIT_MEAL" | "ADD_MEAL", data?: MealListResponseProps) => {
    if (!type) return
    setModalType(type)
    setEditModalVisible(true)
    setSelectMealForEdit(data)
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
              mealList && Array.isArray(mealList) && mealList.map((item: MealListResponseProps) => (
                <MenuContainer
                  key={item._id}
                  data={item}
                  isEditable
                  onEditPress={() => modalHandler("EDIT_MEAL", item)}
                />
              ))
            }
            {
              Array.isArray(mealList) &&
              mealList.length < 7 &&
              <AppButton lable='Add menu' onPress={() => modalHandler("ADD_MEAL")} />
            }
          </ScrollView>
        </View>
      </SafeAreaFile>
      <EditModal isVisible={editModalVisble} mealData={selecteMealForEdit}
        onClose={() => setEditModalVisible(false)} modalType={modalType} />
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