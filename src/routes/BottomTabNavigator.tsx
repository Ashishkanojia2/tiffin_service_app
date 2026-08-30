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
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <View style={{ flex: 1, }}>
            <Tab.Navigator
                initialRouteName="HomeTab"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        height: 100,
                        paddingTop: 5,
                        borderTopWidth: 0,
                        backgroundColor: Colors.background,
                    },

                    tabBarBackground: () => (
                        <View style={styles.tabBarBackground} />
                    ),
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
                                tintColor={focused ? Colors.primary : Colors.black}
                                resizeMode='contain'
                            />
                        ),
                        tabBarActiveTintColor: Colors.primary,
                        tabBarInactiveTintColor: Colors.textSecondary,
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
    tabBarBackground: {
        // flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 20,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
        marginHorizontal: 10,
        height: 70,
        borderWidth: 1,
        borderColor: Colors.border
    },
})