import { KeyboardAvoidingViewComponent, TextInput,Text } from "react-native";

const Typing = (props:any) => {
    if (!props.typing) return (null);

    return (
        <KeyboardAvoidingViewComponent>
            <Text>What</Text>
            <TextInput placeholder="What to do?" />
        </KeyboardAvoidingViewComponent>
    )
}

export default Typing;