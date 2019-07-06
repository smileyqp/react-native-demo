import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import {NavigationActions} from "react-navigation";

class HomePage extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress",this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress",this.onBackPress)
  }

  onBackPress = () => {
    const {dispatch,nav} = this.props;
    if(nav.routes[1].index === 0){  //因为root navigation中主页面homePage的位置不是0是1
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }



  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator/>
  }
}




const mapStateToProps = state => ({
  nav:state.nav
});


export default connect(mapStateToProps)(HomePage);

