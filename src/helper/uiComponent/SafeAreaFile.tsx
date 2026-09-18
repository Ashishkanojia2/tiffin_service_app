import { StatusBar } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaProvider, SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'
import { Colors } from '../../theme/Colors'
type Props = SafeAreaViewProps & {
    children?: ReactNode;
    
};
const SafeAreaFile = ({ children , ...rest}: Props) => {
    return (
        <SafeAreaProvider >
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} {...rest} >
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default SafeAreaFile
