import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import { add_style } from './styles/styles';
import openMap from "react-native-open-maps";;
const bootstrapStyleSheet = new BootstrapStyleSheet();

const { s, c } = bootstrapStyleSheet;

export default class App extends Component
{
  constructor() {
    super();
    this.state = {
      direccion:"",
      ciudad:"",
     estado:"",
     pais:"",
    };
  } 
  pressOpenMap=()=>
  {
    let alldatastring=this.state.direccion+","+this.state.ciudad+","+this.state.estado+","+this.state.pais;
    openMap({ query: alldatastring });
  }
  onChangeText=(name,value)=>//El value es como el e.target.value en React web
  {
    this.setState(
        {
         ...this.state,[name]:value
        }
    )
  }
  render()
  {
    return (
      <>
      <ScrollView style={add_style.container} >
        
        <View>
          
         <View style={[s.formGroup]}>
          <Text 
          style={[s.formLabelText]}
          >Pais
          </Text>
             <TextInput 
              value={this.state.country}
              style={[s.formControl]}
             onChangeText={(value)=>this.onChangeText('country',value)}
           /> 
    
         </View>
         <View style={[s.formGroup]}>
          <Text 
          style={[s.formLabelText]}
          >Estado
          </Text>
          <TextInput 
              value={this.state.estado}
              style={[s.formControl]}
             onChangeText={(value)=>this.onChangeText('estado',value)}
           /> 
    
         </View>
         <View style={[s.formGroup]}>
          <Text 
          style={[s.formLabelText]}
          >Ciudad
          </Text>
          <TextInput 
              value={this.state.ciudad}
              style={[s.formControl]}
             onChangeText={(value)=>this.onChangeText('ciudad',value)}
           /> 
    
         </View>
         <View style={[s.formGroup]}>
          <Text 
          style={[s.formLabelText]}
          >Direccion o Lugar
          </Text>
          <TextInput 
              value={this.state.direccion}
              style={[s.formControl]}
             onChangeText={(value)=>this.onChangeText('direccion',value)}
           /> 
    
         </View>
         <View style={[s.flexRow,s.flexWrap]}>
                <TouchableOpacity
                 onPress={this.pressOpenMap}
                style={[s.btnTouchable]}
                 >
                 <View style={[s.btn,s.btnPrimary]}>
                    <Text style={[s.btnText,s.btnPrimaryText]}>Open Map</Text> 
                 </View>
                
                </TouchableOpacity>
          
         </View>
         </View>
     </ScrollView>
          </>
      
      );

  }
}

