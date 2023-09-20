import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const App = () => {

  const[state, setState] = useState('')
  const[city, setCity] = useState('')
  const[country, setCountry] = useState('')

  const APIKey = "6b1478ad347dd228022bcab35e74c806"


  useEffect(() => {
    const getUserState = () => {

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit={limit}&appid=${APIKey}`
    }
   
    const userLocation = axios.get(url)
  
    getUserState();
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Weather APP</Text>

      <View>
        <TextInput 
          onChangeText={setState(prev => prev)}
          style={styles.stateInput}
        />
      </View>

      <View>
        <TextInput 
          onChangeText={setCountry(prev => prev)}
          style={styles.stateInput}
        />
      </View>
      <View>
        <TextInput 
          onChangeText={setCity(prev => prev)}
          style={styles.stateInput}
        />
      </View>

      <View style={styles.displayLeft}>
        <Text>Latitude </Text>
        <Text>Longitude </Text>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  }
});

export default App