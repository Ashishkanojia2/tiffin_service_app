import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../../component/header/AppHeader'
import SafeAreaFile from '../../../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../../../helper/uiComponent/CommonStyle'
import { Fonts } from '../../../../assets/fonts'
import { Colors } from '../../../../theme/Colors'
import Container from '../../../../component/container/Container'
const FilterOption = [
  {
    id: "all",
    option: "All"
  },
  {
    id: "active",
    option: "Active"
  }, {
    id: "paused",
    option: "Paused"
  }, {
    id: "request",
    option: "Request"
  },
]
const customers = [
  {
    id: '1',
    name: 'Rahul Kumar',
    type: 'Veg',
    plan: 'Monthly',
    meal: 'Lunch + Dinner',
    status: 'active',
    initial: 'R',
  },
  {
    id: '2',
    name: 'Priya Singh',
    type: 'Veg',
    plan: 'Weekly',
    meal: 'Lunch',
    status: 'active',
    initial: 'P',
  },
  {
    id: '3',
    name: 'Amit Raj',
    type: 'Non-Veg',
    plan: 'Monthly',
    meal: 'Dinner',
    status: 'paused',
    initial: 'A',
  },
  {
    id: '4',
    name: 'Neha Tiwari',
    type: 'Veg',
    plan: 'Daily',
    meal: 'Lunch',
    status: 'New request',
    initial: 'N',
  },
];
const CustomerTab = () => {
  const [selectedFilter, setSelectFilter] = useState<string[]>(["all"]);
  const filterHandler = (label: string) => {
    if (!label) return;
    const isFilterSelected = selectedFilter.includes(label);

    if (isFilterSelected) {
      setSelectFilter(prev => prev.filter(item => item !== label));
    } else {
      setSelectFilter(prev => [...prev, label]);
    }
  };
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>
          <AppHeader
            showLeftElement={false}
            title="Customers"
            customeSubTitle={
              <Text style={styles.subTitle}>Total 4 subscriber</Text>
            }
          />
          <View style={{ flexDirection: "row" }}>
            {
              FilterOption.map((item) => (
                <Container key={item.id} lable={item.option}
                  onPress={() => filterHandler(item.id)}
                  containerStyle={{
                    backgroundColor: selectedFilter.find((i) => i == item.id) ? Colors.primary : Colors.background
                  }}
                  lableStyle={{
                    color: selectedFilter.find((i) => i == item.id) ? Colors.white : Colors.textSecondary
                  }}
                />
              ))
            }
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 10 , gap:10}}
          >
            {customers.map((item) => (
              <View key={item.id} style={styles.userContaienr}>

                <Text style={styles.profileTxt}>{item.initial} </Text>

                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                    <Text style={styles.userTitle}>{item.name}</Text>
                    <Text
                      style={[
                        styles.mealTag,
                        {
                          backgroundColor:
                            item.type === 'Veg'
                              ? '#DCFCE7'
                              : '#FFE4E6',
                          color:
                            item.type === 'Veg'
                              ? '#16A34A'
                              : '#E11D48',
                        },
                      ]}
                    >
                      {item.type}
                    </Text>
                  </View>

                  <Text style={styles.userLable}>
                    {item.plan} · {item.meal}
                  </Text>

                  <Text
                    style={[
                      styles.statusTag,
                      {
                        backgroundColor:
                          item.status === 'active'
                            ? '#DCFCE7'
                            : item.status === 'paused'
                              ? '#FEF0D0'
                              : '#F8F0E7',

                        color:
                          item.status === 'active'
                            ? '#16A34A'
                            : item.status === 'paused'
                              ? '#222'
                              : '#888',
                      },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>

              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaFile>
    </View>
  )
}

export default CustomerTab

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: Fonts.Inter.Medium,
    fontSize: 14,
    color: Colors.textSecondary
  },
  userContaienr: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    ...CommonStyle.shadowStyle,
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10
  },
  profileTxt: {
    fontFamily: Fonts.Poppins.SemiBold,
    fontSize: 20,
    color: Colors.white,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    height: 40,
    width: 40,
    textAlign: "center",
    paddingVertical: 5
  },
  userTitle: {
    fontFamily: Fonts.Poppins.Medium,
    fontSize: 17,
    color: Colors.textPrimary
  },
  mealTag: {
    fontFamily: Fonts.Poppins.Medium,
    fontSize: 14,
    color: Colors.green,
    backgroundColor: Colors.light_green_shade,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 3
  },
  userLable: {
    fontFamily: Fonts.Poppins.Medium,
    fontSize: 14,
    color: Colors.textSecondary
  },
  statusTag: {
    fontFamily: Fonts.Poppins.Medium,
    fontSize: 14,
    color: Colors.green,
    backgroundColor: Colors.light_green_shade,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 3,
    alignSelf: "flex-start",
    marginTop: 10
  }
})