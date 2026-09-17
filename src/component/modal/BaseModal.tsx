import { Image, Modal, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../theme/Colors'
import KeyboardWrapper from '../../utils/KeyboardWrapper'
import { Icons } from '../../assets/icons'

export type BaseModalProps = {
    isVisible?: boolean
    onClose?: () => void
    children?: ReactNode,
    popupType?: "BOTTOM_SHEET" | "MODAL",
    headerTitle?: string,
}
const BaseModal = ({ isVisible, onClose, children,
    popupType = "MODAL", headerTitle,
}: BaseModalProps) => {
    return (
        <Modal
            animationType={'fade'}
            transparent
            visible={isVisible}
            hardwareAccelerated
        >
            <KeyboardWrapper keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={[styles.overlay, {
                        justifyContent: popupType == "MODAL" ? "center" : "flex-end"
                    }]}>
                        <TouchableWithoutFeedback>
                            <View style={[popupType == "MODAL" ? styles.modalRootContainer : styles.rootContainer]}>
                                <TouchableOpacity style={{ alignSelf: "flex-end" }} activeOpacity={0.7} onPress={onClose}>
                                    <Image source={Icons.CLOSE} style={{ height: 24, width: 24 }} resizeMode="contain" />
                                </TouchableOpacity>
                                <ScrollView
                                    keyboardShouldPersistTaps="handled"
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        flexGrow: 0,
                                    }}
                                    bounces={false}
                                >
                                    {children}
                                </ScrollView>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardWrapper>
        </Modal>
    )
}

export default BaseModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.backDrop,
    },
    rootContainer: {
        maxHeight: "90%",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.background,
        padding: 20,
    },
    modalRootContainer: {
        maxHeight: "90%",
        width: "90%",
        borderRadius: 15,
        backgroundColor: Colors.background,
        padding: 20,
        alignSelf: "center"
    }
})