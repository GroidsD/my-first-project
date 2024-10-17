import { View, Text, StyleSheet,ScrollView, Button, Alert } from "react-native";
import data from './Data'
import Square from './Q4ReactNative/Square'
import styles from "./style";
import Employee from "./Q6_1/employee";
import EmployeeDetail from "./Q6_1/employee_detail";
import Sum2Number from "./Q6_2/Sum2Number";
import FindMinimum from "./Q6_3/findMinimum";
import HailStone from "./Q6_4/HailStone";

export default App = () => {
  return (

    <ScrollView style={styles.container}>
      {/* {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))} */}

      {/* <Employee name="Nguyen Van A" age ="18" occupation="IT"/>
      <Employee name="Nguyen Van A" age ="18" occupation="IT"/>
      <EmployeeDetail/> */}

      {/* <Sum2Number digit1="2" digit2="3" /> */}

      {/* <DemoState/> */}

      {/* <FindMinimum number1="50" number2="100" number3="20"/> */}

      <HailStone number='4'/>
    </ScrollView>
  );
};