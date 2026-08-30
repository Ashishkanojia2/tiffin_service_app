import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import AppButton from '../../component/button/AppButton'
import AppHeader from '../../component/header/AppHeader'
import InputField from '../../component/input/InputField'
import SearchField from '../../component/input/SearchField'
import { Icons } from '../../assets/icons'
const ChooseLocationScreen = ({ navigation }: any) => {
    return (
        <View style={CommonStyle.appBorderSpacing}>
            <AppHeader
                title='Where do you want tiffin?'
                SubTitle='PG, coaching or locality'
            />
            <SearchField />
            <TouchableOpacity style={styles.openMapContainer} activeOpacity={0.8}>
                <Image source={Icons.MAP_PIN} tintColor={Colors.primary} style={{ height: 20, width: 20 }} />
                <Text style={styles.locationTextStyle}>Use my current location</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingVertical: 10 }}>

                {
                    Array.from({ length: 10 }).map((item) => (
                        <InputField editable={false}
                            left={
                                <Image source={Icons.MAP_PIN} style={{ height: 20, width: 20 }} />
                            }
                            value='Sunshine PG, Rajeev Nagar'
                            inputWrapperStyle={{ paddingHorizontal: 10 }}
                        />
                    ))
                }
            </ScrollView>
            <AppButton lable='Save & Continue' onPress={() => navigation.navigate("BottomTabNavigator")} />
        </View>
    )
}

export default ChooseLocationScreen

const styles = StyleSheet.create({
    openMapContainer: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: Colors.primary,
        backgroundColor: "#fff1e4",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: 13,
        borderRadius: 13,
        paddingHorizontal: 10,
        marginTop: 10

    },
    locationTextStyle: {
        fontSize: 13,
        color: Colors.primary,
        fontFamily: Fonts.Poppins.SemiBold
    }
})