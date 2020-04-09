import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductScreen from '../screens/ProductScreen';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.row}>
            <View style={styles.col}>
              <ProductScreen/>
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
},
col: {
    flex: 1,
},
});
