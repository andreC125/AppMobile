import React from "react";
import {Text, StyleSheet} from "react-native";
import {Card, Button} from "react-native-elements";
import {withNavigation} from "react-navigation";


export default class ProductScreen extends React.Component {
  render() {
    return(
      <Card
        image={{uri: 'https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg'}}>
        <Text style={{marginBottom: 10, marginTop: 20 }} h2>
          Pomme Bio
        </Text>
        <Text style={styles.price} h4>
          1€
        </Text>
        <Text h6 style={styles.description}>
            ajouter il y 2h
        </Text>
        <Button
        type="clear"
        title='Buy now'
        onPress={() => this.props.navigation.navigate('Details')} />
    </Card>
  );
}
}

const styles = StyleSheet.create({
name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30
},
price: {
    fontWeight: 'bold',
    marginBottom: 10
},
description: {
    fontSize: 10,
    color: '#c1c4cd'
}
});
