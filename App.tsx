import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> setCounter(counter + 1)}>
        <Text style={styles.btnColor}>Increase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  btn: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 100,
    marginTop:20,
    width: 100
  },
  btnColor: {
    color: "#fff",
  }
  
});
