import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState, useRef } from 'react';

//components
import Typing from './components/Typing';
import TodoCard from './components/TodoCard';

export default function App() {
  //keyboard
  const [keyboard, setKeyboard] = useState<string>("");

  //listener
  const keyListner = (e:any) => {
    setKeyboard(e.target.value);
  }

  //todo state
  const [list, setList] = useState<Array<string>>([]);

  //add input to list function
  const addTodo = (e:any) => {
    e.preventDefault();
    setList([
      ...list,
      keyboard
    ]);

    //clear inpute
    setKeyboard("");
  }


  const inputRef = useRef(null);

  const showAlert = () => {
    Alert.alert(
      "Testing",
      "Bozo",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel pressed")
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerText}>Todays todo</Text>
      </View>
      <View>
        <TodoCard text="GOOFY" />
        <TodoCard text="GOOFY" />
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <TextInput placeholder='add' value={keyboard} onChangeText={keyListner} returnKeyType="go" />
        <Text style={styles.addBtnText} >Add a new task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  //header
  header: {
    alignSelf: "stretch",
    paddingTop: 90
  },
  headerText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  //add task btn
  addBtn: {
    position: "absolute",
    bottom: 60
  },
  addBtnText: {
    fontSize: 32
  }
  
});
