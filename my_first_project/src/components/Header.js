import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

 class Header extends Component {
    render() {
     return (
        <View>
            <Text style={styles.header}> Hello Header </Text>
        </View>   
      )
    }
 }

 const styles = StyleSheet.create({
    header: {
       color: 'red',
        fontSize: 30
    }
  })

 export default Header;