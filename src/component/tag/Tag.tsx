import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import { Icons } from '../../assets/icons';
import { Colors } from '../../theme/Colors';
import { Fonts } from '../../assets/fonts';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';

type TagProps = {
  tagCategory: 'MEAL' | 'RATING';
  MealType?: 'Veg' | 'Non-veg';
  rating?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Tag = ({
  tagCategory,
  MealType,
  rating,
  containerStyle,
}: TagProps) => {
  const isMeal = tagCategory === 'MEAL';
  const isVeg = MealType === 'Veg';

  return (
    <View
      style={[
        styles.dotContainer,

        {
          backgroundColor: isMeal
            ? isVeg
              ? Colors.light_green_shade
              : Colors.light_red_shade
            : Colors.primary,
        },

        containerStyle,
      ]}
    >
      {/* Icon / Dot */}
      {isMeal ? (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: isVeg
                ? Colors.vegDot
                : Colors.nonVegDot,
            },
          ]}
        />
      ) : (
        <Image
          source={Icons.STAR_FILLED}
          style={styles.starIcon}
          tintColor={Colors.white}
          resizeMode="contain"
        />
      )}

      {/* Text */}
      {isMeal ? (
        <Text
          style={[
            styles.mealTypeTxtStyle,
            {
              color: isVeg
                ? Colors.vegDot
                : Colors.nonVegDot,
            },
          ]}
        >
          {MealType}
        </Text>
      ) : (
        <Text style={styles.ratingTxtStyle}>
          {rating}
        </Text>
      )}
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  dotContainer: {
    ...CommonStyle.flexStyle,

    justifyContent: 'space-between',

    gap: 5,

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 15,

    alignSelf: 'flex-start',
  },

  dot: {
    width: 10,
    height: 10,

    borderRadius: 20,
  },

  starIcon: {
    width: 12,
    height: 12,
  },

  mealTypeTxtStyle: {
    fontSize: 12,

    fontFamily: Fonts.Poppins.Medium,
  },

  ratingTxtStyle: {
    fontSize: 13,

    color: Colors.white,

    fontFamily: Fonts.Poppins.Medium,

    textAlign: 'center',

    includeFontPadding: false,
  },
});