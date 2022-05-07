import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './style';

function DetailScreen({route, navigation}){
  const {id, description} = route.params;
  return(
  <View style={styles.container}>
    <Text style={styles.texto}>Tarea #{id} </Text>
    <Text style={styles.texto}>Descripion: {description} </Text>
        <View style={styles.footer}>
          <Button
             title='Volver'
             onPress={() => navigation.goBack() }
          />

          <Button
             title='Ir a menu'
             onPress={() => navigation.popToTop() }
          />
        </View>
  </View>
  );
}
export default DetailScreen;