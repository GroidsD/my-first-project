import {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');
  const caculateTax = () => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income');
      return;
    }
    let taxAmount = 0;
    if (incomeAmount <= 1000000) {
      taxAmount = 10000000 * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }
    setTax(`Income Tax:${taxAmount.toFixed(2)}đ`)
  };
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Income Tax Caculator</Text>
      <TextInput
      textAlign='right'
      style={styles.input}
      placeholder='Enter your Income'
      keyboardType='numeric'
      value={income}
      onChangeText={text => setIncome(text)}
      />
      <Button title='Calculate Tax' onPress={caculateTax}/>
      <Text style={styles.result}>{tax}</Text>
    </View>
  );
};
export default App;
