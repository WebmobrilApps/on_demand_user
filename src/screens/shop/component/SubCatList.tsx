import { Text, Pressable, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';

interface HeaderProps {
    data: any;
}

const SubCatList: React.FC<HeaderProps> = ({ data }) => {
    const [selectedSubCat, setSelectedSubCat] = useState(['All']);

    return (
        <FlatList
            data={data}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString() + item.text}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => setSelectedSubCat([item.text])}
                    style={[
                        styles.button,
                        { backgroundColor: selectedSubCat.includes(item.text) ? Colors.themeColor : Colors.white }
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            { color: selectedSubCat.includes(item.text) ? Colors.white : Colors.themeColor }
                        ]}
                    >
                        {item.text}
                    </Text>
                </Pressable>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },
    button: {
        paddingVertical: SH(3),
        paddingHorizontal: SW(10),
        borderRadius: 4,
    },
    text: {
        textDecorationLine: 'underline',
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
    },
});

export default SubCatList;
