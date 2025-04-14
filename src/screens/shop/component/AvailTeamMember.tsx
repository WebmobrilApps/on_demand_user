import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { FC } from 'react';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { Buttons, ImageLoader } from '../../../component';
import imagePaths from '../../../assets/images';

const teamMember = [
    { id: 1, name: 'Juana', img: imagePaths.electrical },
    { id: 2, name: 'Lynch', img: imagePaths.user },
    { id: 3, name: 'Zachary', img: imagePaths.user1 },
    { id: 4, name: 'Scoutc', img: imagePaths.user2 },
    { id: 5, name: 'Charles', img: imagePaths.user4 },
    { id: 6, name: 'Beard Trim', img: imagePaths.user_img },
    { id: 7, name: 'Hair Color', img: imagePaths.electrical },
];
interface servicesInterface {

}
const SeparatorComponent = () => <View style={styles.itemSepearator} />;
const AvailTeamMember: FC<servicesInterface> = ({ }) => {

    const renderItem = ({ item }: any) => (
        <View style={styles.serviceItem}>
            <View style={{alignItems:"center"}}>
                <ImageLoader source={item.img} resizeMode='cover' mainImageStyle={styles.img} />
                <Text style={styles.serviceTitle}>{item.name}</Text>
            </View>
        </View>
    );
    return (
        <FlatList
            data={teamMember}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={styles.listContent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={SeparatorComponent}
        />
    );
};
export default AvailTeamMember;

const styles = StyleSheet.create({
    listContent: {
        paddingVertical: SH(10),
    },
    serviceItem: {
        backgroundColor: Colors.white,
        marginBottom: SH(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img:{ height: SW(50), width: SW(50), borderRadius: SW(25) },
    serviceTitle: {
        fontSize: SF(9),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textHeader,
    },
    itemSepearator: {
        width: SW(10),
    },
});
