import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../assets/images';
import MenuContainer, { MenuDataPropsType } from '../container/MenuContainer';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';
const OrderListProps: MenuDataPropsType[] = [
    {
        id: '1',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: false,
        KitchenName: 'Mon',
    },
    {
        id: '2',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Tue',
    },
    {
        id: '3',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Wed',
    },
    {
        id: '4',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Thu',
    },
    {
        id: '5',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Fri',
    },
    {
        id: '6',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Sat',
    },
    {
        id: '7',
        amount: '70',
        date: '20 Aug 2026',
        foodItem: 'Lunch. dal Fired,',
        image: Images.KITCHEN_1,
        isRated: true,
        KitchenName: 'Sun',
    },
];
const WeekMenuSection = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex:1 }} contentContainerStyle={[{ gap: 10, marginTop: 10, paddingBottom: "30%" ,paddingHorizontal:15}]}>
            {
                OrderListProps.map(item => (
                    <MenuContainer key={item.id} data={item} />
                ))

            }
        </ScrollView>
    )
}

export default WeekMenuSection

const styles = StyleSheet.create({})