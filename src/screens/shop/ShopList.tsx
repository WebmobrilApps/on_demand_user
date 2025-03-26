import React from 'react';
import { View } from 'react-native';
import ShopHeader from './component/ShopHeader';
import { Container } from '../../component';
import { Colors } from '../../utils';
interface shopProps {

}
const ShopList: React.FC<shopProps> = ({ }) => {
    return <Container
        statusBarStyle="light-content"
        statusBarColor={Colors.themeDarkColor}
    >
        <ShopHeader />
    </Container>
}
export default ShopList