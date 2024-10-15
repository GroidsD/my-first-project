import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";
import data from './Data'
import Square from './Square'
import styles from "./style";
import Employee from "./Q6_1/employee";
import EmployeeDetail from "./Q6_1/employee_detail";
import Sum2Number from "./Q6_2/Sum2Number";
import DemoState from "./demostate";
import FindMinimum from "./Q6_3/findMinimum";
import HailStone from "./Q6_4/HailStone";

export default App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))} */}

      {/* <Employee name="Nguyen Van A" age ="18" occupation="IT"/>
      <Employee name="Nguyen Van B" age ="20" occupation="CV"/>
      <EmployeeDetail/> */}

      {/* <Sum2Number number1="5" number2="5" /> */}

      {/* <DemoState/> */}

      {/* <FindMinimum number1="50" number2="100" number3="20"/> */}

      <HailStone number='7'/>
    </ScrollView>
  );
};