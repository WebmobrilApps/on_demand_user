import { View, Text, StyleSheet } from 'react-native'
import React, { FC, useState } from 'react'
import { Checkbox, Container, VectoreIcons } from '../component'
import { SF, SW } from '../utils'


const categoryData = [
    {
        title: 'Personal care',
        categoryId: 1,
        subCategories:
            [
                { id: "1", name: "Barber shops", count: 25, selected: false },
                { id: "2", name: "Hair salon", count: 30, selected: false },
                { id: "3", name: "Skin/beauty Care", count: 45, selected: false, },
                { id: "4", name: "Massage", count: 25, selected: false },
                { id: "5", name: "Spas", count: 10, selected: false },
                { id: "6", name: "Tanning salon", count: 15, selected: false },
            ],
    },
    {
        title: "Home Services",
        categoryId: 2,
        subCategories:
            [
                { id: "1", name: "Barber shops", count: 25, selected: false },
                { id: "2", name: "Hair salon", count: 30, selected: false },
                { id: "3", name: "Skin/beauty Care", count: 45, selected: false },
                { id: "4", name: "Massage", count: 25, selected: false },
                { id: "5", name: "Spas", count: 10, selected: false },
                { id: "6", name: "Tanning salon", count: 15, selected: false },
            ],
    },
    {
        title: "Health & Fitness",
        categoryId: 3,
        subCategories:
            [
                { id: "1", name: "Barber shops", count: 25, selected: false },
                { id: "2", name: "Hair salon", count: 30, selected: false },
                { id: "3", name: "Skin/beauty Care", count: 45, selected: false, },
                { id: "4", name: "Massage", count: 25, selected: false },
                { id: "5", name: "Spas", count: 10, selected: false },
                { id: "6", name: "Tanning salon", count: 15, selected: false },
            ],
    },
]

interface filterScreenprops {

}

const FilterScreen: FC<filterScreenprops> = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Container style={styles.container}>
            <Text>FilterScreen</Text>
            <View style={{ backgroundColor: "#EEF6F9", borderRadius: SW(10) }}>
                <View style={{ flexDirection: "row", padding: SW(20) }}>
                    <Checkbox
                        checked={checked}
                        size={SW(15)}
                        onChange={setChecked}
                        label=""
                    />
                    <Text style={styles.title}>{'title'}</Text>
                    <VectoreIcons
                        icon='AntDesign'
                        name='caretdown'//caretup
                        size={SF(16)}
                    />
                </View>
            </View>
        </Container>
    )
}

export default FilterScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingHorizontal: SW(20),
    },
    title: {
        flex: 1,
        fontSize: 14,
        color: '#407C95',
        fontWeight: 'bold',
    },
})