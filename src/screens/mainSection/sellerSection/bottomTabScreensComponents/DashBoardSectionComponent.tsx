import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../theme/Colors'
import IconContainer from '../../../../component/other/IconContainer'
import { Icons } from '../../../../assets/icons'
import { Fonts } from '../../../../assets/fonts'
import { useKitchenDashboardStore } from '../../../../store/KitchenDashboardStore'

const DashBoardSectionComponent = () => {
    const { kitchenDashBoardData } = useKitchenDashboardStore()
    const dashboardData = [
        {
            id: "1",
            lable: "Today's tiffins",
            bgColor: Colors.light_primary_shade,
            image: Icons.CUTLERY,
            value: kitchenDashBoardData?.kitchenDashboard.todayTiffin ?? "0",
            iconColor: Colors.primary
        },
        {
            id: "2",
            lable: "Active subscriber",
            bgColor: Colors.light_green_shade,
            image: Icons.USERS,
            value: kitchenDashBoardData?.kitchenDashboard.activeSubscriber ?? '0',
            iconColor: Colors.green
        },
        {
            id: "3",
            lable: "This month",
            bgColor: Colors.background,
            image: Icons.RUPEE,
            value: `₹ ${kitchenDashBoardData?.kitchenDashboard.thisMonthRevenue ?? '0'}`,
            iconColor: Colors.textSecondary
        }, {
            id: "4",
            lable: "Rating",
            bgColor: Colors.background,
            image: Icons.STAR_OUTLINE,
            value: kitchenDashBoardData?.kitchenDashboard.kitchenRating ?? '0',
            iconColor: Colors.textSecondary
        },
    ]
    return (
        <View style={styles.topContainer}>
            {dashboardData.map((item, index) => (
                <View key={item.id} style={styles.dashboardCard}>
                    <IconContainer source={item.image} style={{ height: 18, width: 18, tintColor: item.iconColor }} containerStyle={{ padding: 7, backgroundColor: item.bgColor }} disablePress />
                    <Text style={styles.title}>{item.value}</Text>
                    <Text style={styles.lable}>{item.lable}</Text>
                </View>))}
        </View>
    )
}

export default DashBoardSectionComponent

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
    },
    dashboardCard: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.border,
        width: '48%',
        alignItems: "flex-start",
    },
    title: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 20,
        color: Colors.textPrimary,
        marginTop: 10
    },
    lable: {
        fontFamily: Fonts.Poppins.Regular,
        fontSize: 12,
        color: Colors.textSecondary
    },
})