import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput,Image} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  state = {
   
    datos: [],
    name:'',
    character:'',
  

    datosregresoRickjson:
      {
        
      "id": null,
      "name": '',
      "status": '',
      "species": '',
      "type": '',
      "gender": '',
      "origin": {
        "name": null,
        "url": null
      },
      "location": {
        "name":null,
        "url": null
      },
      "image": null,
      "episode": [],
      "url": null,
      "created": null
      }
      
  
  }


  getRickAndMortyData = async()=>{
     try
    {
      var link = 'https://rickandmortyapi.com/api/character/'+ this.state.character;
      const regreso = await fetch(link)
      const datosRick = await regreso.json()
      this.setState({datosRick})
      this.setState({datosregresoRickjson: datosRick})
    }
    catch(e)
    {
      console.log(e);
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <TextInput
       placeholder="Introduce ID del personaje"
       keyboardType="numeric"
      
       onChangeText={(text)=> this.setState({character:parseFloat(text)})}

        style={{ height: 40, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#968F8F', }}
       />
       <Text>{"\n"}</Text>
      <TouchableOpacity onPress={() => this.getRickAndMortyData() } style={{ padding : 20,             backgroundColor: '#CABFD4' }}>
      <Text style={styles.instructions}> S  E  N  D</Text>
     </TouchableOpacity>
       <Text>{"\n"}</Text>



 <Text style={styles.instructionse}>Datos de personajes Rick & Morty: </Text>
<Text style={styles.instructionse}> Nombre = {JSON.stringify(this.state.datosregresoRickjson.name)}  </Text>
<Text style={styles.instructionse}> Status = {JSON.stringify(this.state.datosregresoRickjson.status)}  </Text>
<Text style={styles.instructionse}> Especie = {JSON.stringify(this.state.datosregresoRickjson.species)}  </Text>
<Text style={styles.instructionse}> Genero = {JSON.stringify(this.state.datosregresoRickjson.gender)}  </Text>

<Text> {'\n  '}</Text>
<Text>{"\n"}</Text>


    
      </View>
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F5F1F1',
    padding: 8,
  },
   instructionse: {
    
    marginHorizontal: 5,
     marginTop: 5,
   marginBottom: 0,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 17,
      // fontStyle:'italic',
       
    
  }, 
   instructions: {
    
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 19,
       fontStyle:'italic',
       
    
  }, 
});

