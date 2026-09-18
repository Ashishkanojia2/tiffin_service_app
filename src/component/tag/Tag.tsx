import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Icons } from '../../assets/icons'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'

type TagProps = {
  tagCategory: "MEAL" | "RATING",
  MealType?: "Veg" | "Non-veg",
  rating?: string,
  containerStyle?: StyleProp<ViewStyle>
}


const Tag = ({
  tagCategory,
  MealType,
  rating,
  containerStyle
}: TagProps) => {
  return (
    <View style={[styles.dotContaner,
    {
      backgroundColor:
        tagCategory === "MEAL" ?
          Colors.light_green_shade
          : Colors.vegDot
    }, containerStyle]}>
      {
        tagCategory === "MEAL" ?
          <View style={styles.dot} />
          :
          <Image
            source={Icons.STAR_FILLED}
            style={{ height: 12, width: 12 }}
            tintColor={Colors.white}
            resizeMode='contain'
          />
      }
      {
        tagCategory === "MEAL" ?
          <Text style={styles.mealTypeTxtStyle}>{MealType}</Text>
          :
          <Text style={styles.ratingTxtStyle}>{rating}
          </Text>
      }
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  dotContaner: {
    ...CommonStyle.flexStyle,
    justifyContent: 'space-between',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: "flex-start"
  },
  mealTypeTxtStyle: {
    fontSize: 12,
    color: Colors.vegDot,
    fontFamily: Fonts.Poppins.Medium
  },
  ratingTxtStyle: {
    fontSize: 13,
    color: Colors.white,
    fontFamily: Fonts.Poppins.Medium,
    textAlign: "center",
    includeFontPadding: false
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: Colors.vegDot,
    borderRadius: 20,
  },
})