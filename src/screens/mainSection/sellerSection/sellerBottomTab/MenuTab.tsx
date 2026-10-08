import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../../../component/header/AppHeader'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../../../assets/fonts'
import { Colors } from '../../../../theme/Colors'
import MenuContainer from '../../../../component/container/MenuContainer'
import EditModal from '../../../../component/modal/EditModal'
import { mealListApi } from '../../../../network/ClientApi'
import { useMealStore } from '../../../../store/mealListStore'
import { MealListResponseProps } from '../../../../types/ApiResponseType'
import NoDataFound from '../../../../component/other/NoDataFound'

const MenuTab = () => {
  const [editModalVisble, setEditModalVisible] = useState(false)
  const { mealList } = useMealStore()
  const mealListHandler = async () => {
    try {
      await mealListApi()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    mealListHandler()
  }, [])


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

          {
            Array.isArray(mealList) && mealList.length > 0 ?
              <ScrollView showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={{ marginTop: 10, gap: 10, paddingBottom: 20 }}>
                {
                  mealList && Array.isArray(mealList) && mealList.map((item: MealListResponseProps) => (
                    <MenuContainer
                      key={item._id}
                      data={item}
                      isEditable
                      onEditPress={() => setEditModalVisible(true)}
                    />
                  ))
                }
              </ScrollView>
              : <NoDataFound />
          }
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