import { StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RateScreen from '../screens/mainSection/RateScreen'
import NotificationScreen from '../screens/mainSection/NotificationScreen'
import BottomTabNavigator from './BottomTabNavigator'
import MealDetailsScreen from '../screens/mainSection/MealDetailsScreen'
import SubscriptionScreen from '../screens/mainSection/subscription/SubscriptionScreen'
import SubscriptionConfirmedScreen from '../screens/mainSection/subscription/SubscriptionConfirmedScreen'
import SellerBottomTabNavigator from './SellerBottomTabNavigator'
import Storage from '../utils/Storage'
import ReviewScreen from '../screens/mainSection/sellerSection/ReviewScreen'

const Stack = createNativeStackNavigator()


const getUserType = async (): Promise<string | null> => {
    return await Storage.getItem({ key: 'userType' });
};

const MainNavigator = () => {
    const [initialRoute, setInitialRoute] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserType = async () => {
            const type = await getUserType();
            if (type === 'seller') {
                setInitialRoute('SellerBottomTabNavigator');
            } else {
                setInitialRoute('BottomTabNavigator');
            }
        };

        fetchUserType();
    }, []);

    if (!initialRoute) {
        return null;
    }
    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="SellerBottomTabNavigator" component={SellerBottomTabNavigator} />
            <Stack.Screen name="RateScreen" component={RateScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
            <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
            <Stack.Screen name="SubscriptionConfirmedScreen" component={SubscriptionConfirmedScreen} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} />

        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})