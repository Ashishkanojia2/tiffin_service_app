import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const CommonStyle = StyleSheet.create({
    appBorderSpacing: {
        flex: 1,
        marginHorizontal: 12,
    },
    appBorderSpacingWithBottom: {
        flex: 1,
        marginHorizontal: 12,
        paddingBottom:10,
    },
    flexStyle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
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
        elevation: 4,
    }
})