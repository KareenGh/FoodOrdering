import { View } from 'react-native';
import products from '../../../assets/data/products';
import ProductListItem from '../../components/ProductListItem';

export default function MenuScreen() {
  return (
    <view>
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[5]} />
    </view>
  );
}

