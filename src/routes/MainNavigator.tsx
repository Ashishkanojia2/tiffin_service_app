import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RateScreen from '../screens/mainSection/RateScreen'
import NotificationScreen from '../screens/mainSection/NotificationScreen'
import BottomTabNavigator from './BottomTabNavigator'
import MealDetailsScreen from '../screens/mainSection/MealDetailsScreen'
import SubscriptionScreen from '../screens/mainSection/subscription/SubscriptionScreen'
import SubscriptionConfirmedScreen from '../screens/mainSection/subscription/SubscriptionConfirmedScreen'
import SellerBottomTabNavigator from './SellerBottomTabNavigator'
import ReviewScreen from '../screens/mainSection/sellerSection/ReviewScreen'
import HelpAndSupportScreen from '../screens/infoSection/HelpAndSupportScreen'
import TermsAndConditionsScreen from '../screens/infoSection/TermsAndConditionsScreen'
import PrivacyPolicyScreen from '../screens/infoSection/PrivacyPolicyScreen'
import EditProfileScreen from '../screens/mainSection/EditProfileScreen'
import EditMenuScreen from '../screens/mainSection/sellerSection/EditMenuScreen'
import localStorage from '../storage/LocalStorage'

const Stack = createNativeStackNavigator()
const MainNavigator = () => {
    const userType = localStorage.getItem('userType');
    const [initialRoute, setInitialRoute] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserType = async () => {
            if (userType === 'seller') {
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
            <Stack.Screen name="HelpAndSupportScreen" component={HelpAndSupportScreen} />
            <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
            <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="EditMenuScreen" component={EditMenuScreen} />

        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})