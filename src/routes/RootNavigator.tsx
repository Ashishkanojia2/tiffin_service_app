import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/onBoarding/SplashScreen'
import OnboardingScreen from '../screens/onBoarding/OnboardingScreen'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'

const Stack = createNativeStackNavigator()
const RootNavigator = () => {
    return (
        <NavigationContainer>   
            <Stack.Navigator initialRouteName='AuthNavigator' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
                <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
                <Stack.Screen name='MainNavigator' component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})