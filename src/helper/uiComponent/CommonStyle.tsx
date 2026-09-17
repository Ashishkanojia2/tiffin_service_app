import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const CommonStyle = StyleSheet.create({
    appBorderSpacing: {
        // paddingHorizontal:12,
        marginHorizontal: 12,
        // backgroundColor: Colors.background,
        flex: 1,
        // backgroundColor:"green"
    },
    flexStyle: {
        flexDirection: "row",
        alignItems: "center",
        gap:5
    },
    appBackground: {
        flex: 1,
        backgroundColor: Colors.background
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow - Android
        elevation: 2,
    }
})