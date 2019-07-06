
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'


class UserPage extends Component {


  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>User Page! </Text>
        <Button title="change color to green" onPress = { () => {
          this.props.onThemeChange('#096');
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






const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch => ({
  onThemeChange:theme => dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserPage);


