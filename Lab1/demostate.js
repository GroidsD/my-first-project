import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function DemoState() 
{
    const [value,setValue] = useState(0);
    const setNumber=()=>{
        setValue(value+1);
    }
    return(
        <View>
        <Text style={{fontSize:30,color:'red'}}>{value}</Text>
       <button title="click" onClick={setNumber} ></button>
       </View>
    );
};