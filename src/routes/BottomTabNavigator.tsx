import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../theme/Colors';
import { Fonts } from '../assets/fonts';
import { Icons } from '../assets/icons';
import HomeTab from '../screens/mainSection/bottomTabScreens/HomeTab';
import PlanTab from '../screens/mainSection/bottomTabScreens/PlanTab';
import OrderTab from '../screens/mainSection/bottomTabScreens/OrderTab';
import ProfileTab from '../screens/mainSection/bottomTabScreens/ProfileTab';
import { CommonStyle } from '../helper/uiComponent/CommonStyle';
import SafeAreaFile from '../helper/uiComponent/SafeAreaFile';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <SafeAreaFile edges={["bottom"]}>
            <Tab.Navigator
                initialRouteName="HomeTab"

                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        height: 70,
                        borderTopWidth: 1,
                        backgroundColor: Colors.background,
                    },
                    animation: 'fade',


                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeTab}
                    options={{

                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Home
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.SEARCH}
                                style={{
                                    width: 24,
                                    height: 24,

                                }}
                                tintColor={focused ? Colors.primary : Colors.textSecondary}
                                resizeMode='contain'
                            />
                        ),

                        tabBarActiveTintColor: Colors.primary,
                        tabBarInactiveTintColor: Colors.textSecondary,
                    }}
                />

                <Tab.Screen
                    name="AudioTab"
                    component={PlanTab}
                    options={{
                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Plans
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.CALENDAR}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                                tintColor={focused ? Colors.primary : Colors.textSecondary}
                                resizeMode='contain'
                            />
                        ),
                        tabBarActiveTintColor: Colors.primary,
                        tabBarInactiveTintColor: Colors.textSecondary,
                    }}
                />

                <Tab.Screen
                    name="ProgramsTab"
                    component={OrderTab}
                    options={{
                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Orders
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.ORDER}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                                tintColor={focused ? Colors.primary : Colors.textSecondary}
                                resizeMode='cover'
                            />
                        ),
                        tabBarActiveTintColor: Colors.primary,
                        tabBarInactiveTintColor: Colors.textSecondary,
                    }}
                />

                <Tab.Screen
                    name="PlaylistTab"
                    component={ProfileTab}
                    options={{
                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Profile
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.PROFILE}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                                tintColor={focused ? Colors.primary : Colors.textSecondary}
                                resizeMode='contain'
                            />
                        ),
                        tabBarActiveTintColor: Colors.primary,
                        tabBarInactiveTintColor: Colors.textSecondary,
                    }}
                />
            </Tab.Navigator>
        </SafeAreaFile >
    );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
    tabBarBackground: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginHorizontal: 10,
        // height:70,
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.border,
        ...CommonStyle.shadowStyle
    },
})