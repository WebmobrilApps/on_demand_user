import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, Fonts, SF, SH } from '../../../utils';

interface BookingServiceItemProps {
    title?: string;
    subtitles?: string;
    time?: string;
    price?: string;
}

const BookingServiceItem: React.FC<BookingServiceItemProps> = ({
    title = '',
    subtitles = '',
    time = '',
    price = '',
}) => {
    return (
        <View style={styles.serviceItem}>
            <View>
                <Text style={styles.serviceTitle}>{title}</Text>
                {subtitles && <Text style={styles.serviceSub}>
                    {subtitles}
                </Text>}
                {time && <Text style={styles.serviceSub}>
                    {time}
                </Text>}
            </View>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

interface Style {
    serviceItem: ViewStyle;
    serviceTitle: TextStyle;
    serviceSub: TextStyle;
    price: TextStyle;
}

const styles = StyleSheet.create<Style>({
    serviceItem: {
        backgroundColor: '#0000000D',
        borderRadius: 10,
        paddingVertical: SH(15),
        paddingHorizontal: '5%',
        marginBottom: SH(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceTitle: {
        fontSize: SF(12),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
    },
    serviceSub: {
        fontSize: SF(10),
        color: Colors.lightGraytext,
        fontFamily: Fonts.MEDIUM,
    },
    price: {
        fontSize: SF(12),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
    },
});

export default BookingServiceItem;
