import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors';
import { Fonts } from '../../assets/fonts';
import { CommonStyle } from '../../helper/uiComponent/CommonStyle';
import AppLogo from '../../component/other/AppLogo';

const SplashScreen = ({ navigation }: any) => {
    setTimeout(() => {
        navigation.navigate('OnboardingScreen')
    }, 2000);
    return (
        <View style={styles.rootContainer}>
            <AppLogo size={150}/>
            <Text style={styles.title}>Tiffin Wala</Text>
            <Text style={styles.subTitle}>Ghar ka khana, roz aapke pass</Text>
        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    rootContainer: {
        ...CommonStyle.appBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.Poppins.Bold,
        fontSize: 30,
        color: Colors.primary
    },
    subTitle: {
        fontFamily: Fonts.Inter.Regular,
        fontSize: 16,
        color: Colors.textSecondary,
        marginTop: 10
    }
})