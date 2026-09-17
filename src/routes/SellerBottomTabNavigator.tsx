import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../theme/Colors';
import { Fonts } from '../assets/fonts';
import { Icons } from '../assets/icons';
import DashboardTab from '../screens/mainSection/sellerSection/sellerBottomTab/DashboardTab';
import CustomerTab from '../screens/mainSection/sellerSection/sellerBottomTab/CustomerTab';
import MenuTab from '../screens/mainSection/sellerSection/sellerBottomTab/MenuTab';
import SellerProfileTab from '../screens/mainSection/sellerSection/sellerBottomTab/SellerProfileTab';
const Tab = createBottomTabNavigator();

const SellerBottomTabNavigator = () => {
    return (
        <View style={{ flex: 1, }}>
            <Tab.Navigator
                initialRouteName="DashboardTab"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,

                    tabBarStyle: {
                        height: 100,
                        paddingTop: 5,
                        borderTopWidth: 0,
                        backgroundColor: Colors.background,
                       paddingRight:10,
                       paddingLeft:20
                    },
                    tabBarBackground: () => (
                        <View style={styles.tabBarBackground} />
                    ),
                    animation: 'fade',
                }}
            >
                <Tab.Screen
                    name="DashboardTab"
                    component={DashboardTab}
                    options={{

                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Dashboard
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.DASHBOARD}
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
                    name="MenuTab"
                    component={MenuTab}
                    options={{
                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Menu
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.MEAL}
                                style={{
                                    width: 30,
                                    height: 30,
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
                    name="CustomerTab"
                    component={CustomerTab}
                    options={{
                        tabBarLabel: ({ focused, color }) => (
                            <Text
                                style={{
                                    fontSize: 13,
                                    color,
                                    fontFamily: focused ? Fonts.Poppins.SemiBold : Fonts.Poppins.Regular,
                                }}
                            >
                                Customers
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icons.USERS}
                                style={{
                                    width: 27,
                                    height: 27,
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
                    name="SellerProfileTab"
                    component={SellerProfileTab}
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
                                    width: 27,
                                    height: 27,
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
        </View>
    );
};

export default SellerBottomTabNavigator;
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