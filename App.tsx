import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import { useState, useRef } from 'react';

//components
import Typing from './components/Typing';
import TodoCard from './components/TodoCard';

export default function App() {
  //keyboard
  const [keyboard, setKeyboard] = useState<any>("asdasd");

  //listener
  const keyListner = (e:any) => {
    setKeyboard(e.target.value);
  }

  //todo state
  const [list, setList] = useState<any>([]);

  //
  const showAlert = () => {
    Alert.alert(
      "Error",
      "Input can't be empty",
      [
        {
          text: "Cancel",
          // onPress: () => Alert.alert("Cancel pressed")
        }
      ]
    );
  }


  //add input to list function
  const addTodo = (e:any) => {
    e.preventDefault();

    //validate input
    if (/\S/.test(keyboard)) {
      setList([
        ...list,
        keyboard
      ]);
  
      //clear input
    } else {
      showAlert();
    }
  }
    


  const inputRef = useRef(null);


  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerText}>Todays todo</Text>
        <TouchableOpacity  onPress={addTodo} ><Text>Add a new task</Text></TouchableOpacity>
      </View>
      <View>
        {list?.map((data:any, index:any) => {
          return (
            <TodoCard text={data} key={index} />
          )
        })}
      </View>
      <KeyboardAvoidingView style={styles.addBtn}>
        <TextInput placeholder='add' value={keyboard} onChangeText={(event:any) => setKeyboard(event)} returnKeyType="go" onSubmitEditing={addTodo} />
        
      </KeyboardAvoidingView>
      
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
