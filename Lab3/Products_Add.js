import React, { useState } from 'react';
import { View, Text, TextInput, Button,  FlatList, StyleSheet, Alert, ScrollView } from 'react-native';

const ProductsAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const [data, setData] = useState([]);
  
  const handleSubmit = () => {
   fetch('https://dummyjson.com/products/add',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
        title:title,
        description:description,
        price:price,
        discount:discount,
        rating:rating,
        stock:stock,
        brand:brand,
        category:category,
        images:images,
    }),
    
   })
   .then((res)=>res.json())
   .then(console.log);
   Alert.alert("Add successfull ")
   clearForm();
   
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setDiscount('');
    setRating('');
    setStock('');
    setBrand('');
    setCategory('');
    setImages('');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Descroption "
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
  <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discount percentage"
        value={discount}
        onChangeText={(text) => setDiscount(text)}
      />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Rating"
        value={rating}
        onChangeText={(text) => setRating(text)}
      />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Stock"
        value={stock}
        onChangeText={(text) => setStock(text)}
      />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Brand"
        value={brand}
        onChangeText={(text) => setBrand(text)}
      />
      <Text>Title</Text>
       <TextInput
        style={styles.input}
        placeholder="Enter Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Text>Title</Text>
       <TextInput
        style={styles.input}
        placeholder="Enter Images"
        value={images}
        onChangeText={(text) => setImages(text)}
      />
      <Button style={styles.submit} title="SUBMIT" onPress={handleSubmit} />
      {/* <Text style={styles.title}>Product Add</Text> */}
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      /> */}
    </View>
    </ScrollView>
  );
};
export default ProductsAdd;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color:"blue"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  // listItem: {
  //   backgroundColor: 'lightgray',
  //   padding: 10,
  //   marginBottom: 10,
  //   borderRadius: 5,
  // },
  submit:{
    marginTop:50,
  }
});


