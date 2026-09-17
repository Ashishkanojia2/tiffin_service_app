import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../component/header/AppHeader'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import NotificationContainer from '../../component/container/NotificationContainer'

const NotificationScreen = () => {
    return (
        <View style={CommonStyle.appBackground}>
            <SafeAreaFile>
                <View style={CommonStyle.appBorderSpacing}>
                    <AppHeader
                        title="Notification"
                        showDoubleTitle={false}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 , gap:10}}>
                        {
                            Array.from({ length: 20 }).map((_, index) => (

                                <NotificationContainer key={index} />
                            ))
                        }

                    </ScrollView>
                </View>
            </SafeAreaFile>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})