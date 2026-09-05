// import { StyleSheet } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import RateScreen from '../screens/mainSection/RateScreen'
// import NotificationScreen from '../screens/mainSection/NotificationScreen'
// import BottomTabNavigator from './BottomTabNavigator'
// const Stack = createNativeStackNavigator()
// const MainNavigator = () => {
//     return (
//         <Stack.Navigator initialRouteName='BottomTabNavigator' screenOptions={{
//             headerShown: false,

//         }}>
//             <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
//             <Stack.Screen name='RateScreen' component={RateScreen} />
//             <Stack.Screen name='NotificationScreen' component={NotificationScreen} />

//         </Stack.Navigator>
//     )
// }
// export default MainNavigator
// const styles = StyleSheet.create({})

import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RateScreen from '../screens/mainSection/RateScreen'
import NotificationScreen from '../screens/mainSection/NotificationScreen'
import BottomTabNavigator from './BottomTabNavigator'
import MealDetailsScreen from '../screens/mainSection/MealDetailsScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="BottomTabNavigator"
            screenOptions={{
                headerShown: false,
            }}
            screenListeners={{
                state: (e) => {
                    console.log(
                        "Navigation History:",
                        e.data.state.routes.map(route => route.name)
                    )
                },
            }}
        >
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="RateScreen" component={RateScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})