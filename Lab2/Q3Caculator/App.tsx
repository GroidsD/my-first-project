import React, { useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number.toString());
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{displayValue}</Text>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('7')}><Text style={styles.textButton}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('8')}><Text style={styles.textButton}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('9')}><Text style={styles.textButton}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.colorButton} onPress={() => handleOperatorInput('/')}><Text style={styles.calculate}>÷</Text></TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('4')}><Text style={styles.textButton}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('5')}><Text style={styles.textButton}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('6')}><Text style={styles.textButton}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.colorButton} onPress={() => handleOperatorInput('*')}><Text style={styles.calculate}>×</Text></TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('1')}><Text style={styles.textButton}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('2')}><Text style={styles.textButton}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={() => handleNumberInput('3')}><Text style={styles.textButton}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.colorButton} onPress={() => handleOperatorInput('-')}><Text style={styles.calculateReduce}>-</Text></TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.numberZero} onPress={() => handleNumberInput('0')}><Text style={styles.textButton}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.lastfunc} onPress={() => handleOperatorInput('+')}><Text style={styles.calculate}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.equalFunc} onPress={handleEqual}><Text style={styles.equalText}>=</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.resetButton} onPress={handleClear}><Text style={styles.textButton}>C</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default App;