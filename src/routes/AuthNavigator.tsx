import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Colors } from '../theme/Colors'
import LoginScreen from '../screens/authSection/LoginScreen'
import OtpVerificationScreen from '../screens/authSection/OtpVerificationScreen'
import SafeAreaFile from '../helper/uiComponent/SafeAreaFile'
import ChooseLocationScreen from '../screens/authSection/ChooseLocationScreen'
import KitchenRegisterScreen from '../screens/authSection/sellerSection/KitchenRegisterScreen'
const Stack = createNativeStackNavigator()
const AuthNavigator = () => {
    return (
        <SafeAreaFile>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: Colors.background,
                },
            }}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='ChooseLocationScreen' component={ChooseLocationScreen} />
                <Stack.Screen name='OtpVerificationScreen' component={OtpVerificationScreen} />
                <Stack.Screen name='KitchenRegisterScreen' component={KitchenRegisterScreen} />

            </Stack.Navigator>
        </SafeAreaFile>
    )
}
export default AuthNavigator
