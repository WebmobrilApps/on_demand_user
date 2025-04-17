import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { Buttons, Spacing, VectoreIcons } from '../../../component';
import BookingServiceItem from './BookingServiceItem';


type ConfirmBookingModalProps = {
    modalVisible: boolean;
    closeModal: () => void;
};
const ConfirmBookingModal: React.FC<ConfirmBookingModalProps> = ({
    modalVisible = true,
    closeModal,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => closeModal()}>
            <View style={styles.modalView}>
                <View style={styles.mainView}>
                    <TouchableOpacity onPress={() => closeModal()} style={styles.crossIcon}>
                        <VectoreIcons
                            icon='Entypo'
                            name='cross'
                            color={Colors.themeColor}
                            size={SF(35)}
                        />
                    </TouchableOpacity>
                    <Spacing space={SH(20)} />
                    <Text style={styles.heading}>Confirmation</Text>
                    <Spacing space={SH(20)} />
                    <Text style={styles.dateorshopbame}>06-March-2025</Text>
                    <Text style={styles.dateorshopbame}>WM Barbershop</Text>
                    <Text style={styles.shopaddress}>1893 Cheshire Bridge Rd Ne, 30325</Text>
                    <Spacing space={SH(20)} />

                    <BookingServiceItem
                        subtitles='With Juana'
                        time='8:00 am - 8:30 am'
                        title='Only Haircut'
                        price='$8989'
                    />
                    <Spacing space={SH(8)} />
                    <BookingServiceItem
                        title='Subtotal'
                        price='$8989'
                    />
                    <Spacing space={SH(70)} />
                    <Buttons
                        onPress={() => closeModal()}
                        title='Confirm'
                    />
                    <Spacing space={SH(8)} />
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmBookingModal;

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'flex-end',
    },
    mainView: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: SW(10),
        borderTopRightRadius: SW(10),
        paddingHorizontal: SW(25),
        paddingBottom: SW(20)
    },
    heading: {
        color: Colors.textHeader,
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: SF(20),
        textAlign: 'center',

    },
    dateorshopbame: {
        color: Colors.textAppColor,
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(14),
    },
    shopaddress: {
        color: Colors.lightGraytext,
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
    },
    crossIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
});
