import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"

const TodoCard = (props:any) => {
    const [done, setDone] = useState<boolean>(false);

    const textStyle = {
        color: done ? "#fff":"#000"
    }

    return (
        <TouchableOpacity onPress={() => {setDone(!done)}}>
            <Text style={textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoCard;