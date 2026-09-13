import {  StatusBar } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../theme/Colors'
type Props = {
    children?: ReactNode;
};
const SafeAreaFile = ({ children }: Props) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <StatusBar barStyle='dark-content' />
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default SafeAreaFile
