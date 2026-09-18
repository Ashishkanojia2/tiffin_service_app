import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
export type SegementDataPropType = {
  id: string
  lable: string
}
export type SegementPropType = {
  segementData: SegementDataPropType[]
  selectedValue: (txt: string) => void,
  containerStyle?: ViewStyle,
  optionContainerStyle?: ViewStyle,
  optionTxtStyle?: TextStyle,
  lable?: string
  labelStyle?: StyleProp<TextStyle>
}


const Segement = ({ segementData, selectedValue, containerStyle, optionContainerStyle, optionTxtStyle, lable, labelStyle }: SegementPropType) => {
  const [selectedUser, setSelectedUser] = useState(segementData?.[0]?.id || "")
  return (
    <View>
      {lable && <Text style={[styles.labelTxt, labelStyle]}>{lable}</Text>}
      <View style={[styles.userContainer, containerStyle]}>
        {
          segementData?.map((item) => {
            return (
              <TouchableOpacity key={item.id} activeOpacity={0.8}
                style={
                  [styles.baseOptionContainerStyle,
                  selectedUser === item.id ? styles.selectedOption : undefined
                    , optionContainerStyle]}
                onPress={() => {
                  selectedValue(item?.id || "")
                  setSelectedUser(item.id)
                }}>
                <Text style={[styles.optionTxtStyle, {
                  color: selectedUser === item.id ? Colors.primary : Colors.textSecondary
                }, optionTxtStyle]}>{item.lable}</Text>
              </ TouchableOpacity>
            )
          })
        }
      </View>
    </View>

  )
}

export default Segement

const styles = StyleSheet.create({
  userContainer: {
    borderRadius: 15,
    backgroundColor: Colors.light_yellow,
    padding: 3,
    flexDirection: "row",
    gap: 5,
  },
  baseOptionContainerStyle: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 15,
    // height:45,
    paddingVertical:10
  },
  selectedOption: {
    backgroundColor: Colors.white,
    ...CommonStyle.shadowStyle
  },
  optionTxtStyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Medium,
    color: Colors.primary
  },
  labelTxt: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: Fonts.Inter.Medium,
    color: Colors.textSecondary,
  },


})