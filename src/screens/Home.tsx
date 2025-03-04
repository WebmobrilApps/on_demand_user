import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Inputs from '../component/Input'
import { Colors, SW } from '../utils'
import SweetaelertModal from '../component/SweetaelertModal'
import ImageLoader from '../component/ImageLoader'

const Home: React.FC = () => {
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 20, backgroundColor: "red", flex: 1 }}>
            {/* image with sckelton============ */}
            {/* <View>  
                <ImageLoader
                    mainImageStyle={{
                        width: SW(120),
                        height: SW(120),
                        borderRadius: SW(7),
                    }}
                    resizeMode="cover"
                    source={{ uri: 'https://cdn.pixabay.com/photo/2024/02/15/13/52/students-8575444_1280.png' }}
                />
            </View> */}
            {/* <Inputs
                placeholder={"User Name"}
                label={'User Name'}
                // errorMessage="Error"
                onChangeText={() => { }}
                onBlur={() => () => { }}
                value={''}
                placeholderTextColor={Colors.placeHolderColor}
            /> */}
            {/* <SweetaelertModal isConfirmBox={false} message='Hey, how are you doing' onClose={()=>{}} visible={true}/> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})