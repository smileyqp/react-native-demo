
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


export default class UserPage extends Component {


  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>User Page! </Text>
        <Button title="change color" onPress = { () => {
          console.log('7878');
          console.log(this.props.navigation.state);
          navigation.setParams({
            theme:{
              tintColor:'red',
              updateTime:new Date().getTime()}
          })
          console.log(this.props.navigation.state)
        }

        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
