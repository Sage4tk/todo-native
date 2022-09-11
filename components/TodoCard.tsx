import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"

const TodoCard = (props:any) => {


    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

export default TodoCard;