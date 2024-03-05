import Colors from '../constants/Colors';
import { StyleSheet, Text, View, Image} from 'react-native';

// custom components
const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10, // the space inside the container
    borderRadius: 20, // rounded corners 
  },
  image: {
    width: 100,
    aspectRatio: 1 , // (2/1) hight as half of our width 
  },
  title : { 
    fontSize: 18, 
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
