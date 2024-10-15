import React from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Sum2Number = props => {
  const handleSum = () => {
    const number1 = parseInt(props.number1);
    const number2 = parseInt(props.number2);
    const sum = number1 + number2;
    Alert.alert(`The sum is: ${sum}`);
  };

  return (
    <View>
      <Text>Number 1:</Text>
      <TextInput>{props.number1}</TextInput>
      <Text>Number 2:</Text>
      <TextInput>{props.number2}</TextInput>
      <Button onPress={handleSum} title="Calculate"></Button>
    </View>
  );
};

export default Sum2Number;
