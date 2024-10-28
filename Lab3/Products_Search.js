import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {Card, Title, TextInput, Caption} from 'react-native-paper';

const ProductSearch = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';
  const handleSearchProduct = () => {
    if (value != '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View >
      <Title>Search Products</Title>
      <TextInput
        style={{backgroundColor: '#fff'}}
        value={value}
        onChangeText={setValue}
        placeholder="Enter product name"
      />
      <TouchableOpacity style={styles.btnSearch} onPress={handleSearchProduct}>
        <Text style={styles.textBtn}>SEARCH</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        // keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Text style={{color: 'black', fontSize: 20, padding: 10}}>
              Product Detail
            </Text>
            <Card style={{backgroundColor:'black'}}>
              <Image style={styles.image} source={{uri: item.thumbnail}} />
            </Card>
            <Card.Content>
              <Title>Title: {item.title}</Title>
              <Text>Description: {item.description}</Text>
              <Text>Price: {item.price}$</Text>
              <Text style={styles.discount}>
                Discount: {item.discountPercentage} off
              </Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>Brand: {item.brand}</Text>
              <Text>Category: {item.category}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default ProductSearch;

const styles = StyleSheet.create({

  card: {
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  discount: {
    color: '#00CC00',
  },
  btnSearch: {
    backgroundColor: 'blue',
    padding:15
  },
  textBtn: {
    color: 'white',
    marginLeft:'auto',
    marginRight:'auto',
    fontWeight:"bold"
  },
});
