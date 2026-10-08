import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { Fonts } from '../../assets/fonts'

type NoDataFoundProps = {
    message?: string
}

const NoDataFound = ({ message = "No data found..!" }: NoDataFoundProps) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.rootContainer}>{message}</Text>
        </View>
    )
}

export default NoDataFound

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    messageStyle: {
        fontSize: 16,
        color: Colors.textPrimary,
        fontFamily: Fonts.Poppins.Regular,
    }
})