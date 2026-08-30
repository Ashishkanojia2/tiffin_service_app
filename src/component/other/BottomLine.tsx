import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'

const BottomLine = ({ containerStyle }: { containerStyle?: ViewStyle }) => {
    return (
        <View style={[styles.lineStyle, containerStyle]}>
            <View style={styles.centeralCircle} />
        </View>
    )
}
export default BottomLine
const styles = StyleSheet.create({
    lineStyle: {
        borderTopColor: Colors.border,
        borderTopWidth: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    centeralCircle: {
        borderRadius: 50,
        backgroundColor: Colors.border,
        height: 10,
        width: 10,
        position: "absolute"

    }
})