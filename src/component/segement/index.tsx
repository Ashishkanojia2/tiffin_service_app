import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'
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
}


const Segement = ({ segementData, selectedValue, containerStyle, optionContainerStyle, optionTxtStyle }: SegementPropType) => {
  const [selectedUser, setSelectedUser] = useState("1")
  return (
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
                selectedValue(item?.lable || "")
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  selectedOption: {
    backgroundColor: Colors.white,
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
  unSelectedOption: {
  },
  optionTxtStyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Medium,
    color: Colors.primary
  },
})