/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';


const width  = Dimensions.get("screen").width;

type Props = {};
export default class App extends Component<Props> {
  render() {  
    const fotos = [
      {id:1,usuario:'Caique'},
      {id:2,usuario:'Joao'},
      {id:3,usuario:'Carlos'}
    ];
    return (
      // <ScrollView style={{marginTop:20}}>
      //   {fotos.map(foto=>
      //     <View key={foto.id  }>
      //       <Text>{foto.usuario}</Text>
      //       <Image source={require('./resources/img/alura.png')} style={{width:width, height:width}} />
      //     </View>
      //   )}
      // </ScrollView>
      <FlatList style={{marginTop:20}}
        //keyExtractor = {item =>''+item.id}
        keyExtractor = {item =>String(item.id)}
        data = {fotos}
        renderItem ={({item})=>
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/alura.png')} style={{width:width, height:width}} />
          </View>
        }

      />

    );
  }
}

