import { Image } from 'react-native'
import React from 'react'
import { Icons } from '../../assets/icons'

const AppLogo = ({ size = 150 }: { size: number }) => {
    return (
        <Image source={Icons.TIFIN_LOGO}
            style={{ height: size, width: size }}
            resizeMode='cover' />
    )
}

export default AppLogo
