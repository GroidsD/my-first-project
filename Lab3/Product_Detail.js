import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Button, Title, TextInput } from 'react-native-paper';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';
  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) { 
          throw new Error('Networ......');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <View >
    <Title style={{padding:15}}>Products Detail</Title>
    <FlatList
      data={data}
      // keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.cardAll}>
            <Card style={styles.cardUP}>
            <Image
              style={styles.image}
              source={{ uri: item.thumbnail }}
            />
            </Card>
           
          <Card.Content style={styles.cardContent}>
              <Title>Title:{item.title}</Title>
            <Text>Description: {item.description}</Text>
            <Text>Price: {item.price}$</Text>
            <Text >
              Discount: {item.discountPercentage} off
            </Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>Brand: {item.brand}</Text>
            <Text>Category: {item.category}</Text>
            <View style={styles.buttonCard}>
                <Button style={{backgroundColor:'#5C15BA',paddingHorizontal:10}}><Text style={{color:'white'}}>Delete</Text></Button>
                <Button style={{backgroundColor:'#5C15BA',paddingHorizontal:10}}><Text style={{color:'white'}}>Cancel</Text></Button>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  </View>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
    image: {
      width: 200,  
      height: 200, 
      alignSelf: 'center',
   
    },
    buttonCard:{
        flexDirection:'row',
        gap:5,
        paddingTop:5,
        marginLeft:'auto'
        
    },
    cardContent:{
        backgroundColor:'lightgray'
    },
    cardUP:{
        backgroundColor:'black'
    },
    cardAll:{
        marginVertical: 10,
    }
    // other styles...
  });