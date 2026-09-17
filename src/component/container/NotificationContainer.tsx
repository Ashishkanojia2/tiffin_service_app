import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import { Icons } from '../../assets/icons'
import IconContainer from '../other/IconContainer'
import { Fonts } from '../../assets/fonts'

const NotificationContainer = () => {
    return (
        <View style={styles.container}>
            <IconContainer source={Icons.CALENDAR} style={{ height: 25, width: 25 }}containerStyle={{backgroundColor:Colors.background}} />
            <View style={{flex:1, gap:5}}>
                <Text style={styles.titleStyle}>Your lunch is out for delivery</Text>
                <Text style={styles.lableStyle}>Annapurna Home Kitchen • arriving by 12:40 PM</Text>
                <Text style={[styles.lableStyle,{marginTop:5}]}>10m ago</Text>
            </View>
        </View>
    )
}

export default NotificationContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        ...CommonStyle.shadowStyle,
        borderRadius: 15,
        ...CommonStyle.flexStyle,
        padding:15,
        gap:10
    },
    titleStyle: {
        fontFamily: Fonts.Poppins.SemiBold,
        fontSize: 17,
        color: Colors.textPrimary,
        flex:1
    },
    lableStyle: {
        fontFamily: Fonts.Poppins.Medium,
        fontSize: 12,
        color: Colors.textSecondary,
        flex:1
    }
})