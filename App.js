import React from 'react';
import { useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View,TextInput,ScrollView,Text,SafeAreaView,TouchableOpacity, Alert} from 'react-native';
const App = () => {
  const [texts,setTexts]=useState('')
  const [arr,setArr]=useState([])
  const text=texts.trim()
  const handleClickChange=()=>{
 
   if(text.length === 0){
    Alert.alert("text doldurun")
   }else{
    setArr([...arr,text])
   }
   setTexts('')
  
    
  }
  const clearChange=(name)=>{
    const updatedItems = arr.filter(item => item !== name);
    setArr(updatedItems)
    console.log(updatedItems);
    
 
  }
  console.log(arr);
  
  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.text}>Todo List APP</Text>
     <View style={styles.inputButton}>
       <TextInput 
        placeholder="Metin yazin..."
        placeholderTextColor='#fff'
        style={styles.input}
        onChangeText={(text)=>setTexts(text)}
        value={texts}
       />
       <TouchableOpacity style={styles.button} onPress={handleClickChange}>
        <Text style={styles.buttonText}>add</Text>
      </TouchableOpacity>
     </View>
     <ScrollView style={styles.scroldiv}>
     {arr.map(item => (
        <View style={styles.div}>
            <Text style={styles.divText}>{item}</Text>
            <TouchableOpacity onPress={() => clearChange(item)}>
            <Icon name="trash-o" size={22} color="#EA2027" />
            </TouchableOpacity>
        </View>
        
      ))}
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#2f3542"
  },
  text:{
    textAlign:"center",
    fontSize:25,
    marginTop:20,
    color:"#fff",
    fontWeight:'bold'
  },
  input:{
    width:240,
    padding:10,
    borderWidth:1,
    borderColor:"#777",
    borderRadius:5,
    
  
    marginTop:30,
    color:'#fff',
  
  },
  inputButton:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
    
  },
  button:{
    width:60,
    height:40,
    marginTop:30,
    alignItems:'center',
    justifyContent:"center",
     backgroundColor:"#009432",
    borderRadius:5
  },
  buttonText:{
    fontSize:20,
    color:'#fff'
  },
  div:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:240,
    padding:12,
    backgroundColor:"#10ac84",
    alignSelf:"center",
    marginTop:20
  },
  divText:{
    color:"#fff",
    fontSize:18
  },
  scroldiv:{
    marginTop:30
  }
});

export default App;