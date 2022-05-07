import React from 'react';
import {Button, View, Text} from 'react-native'; 
import styles from './style';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}> Home </Text>
        <Button 
              title='Ir a menu'
              onPress={() => navigation.navigate('Menu') }
        />
    </View>
  );
}

export default HomeScreen;