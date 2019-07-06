
import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
export default class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Java','Android','IOS','C++','PGP','JS','nodeJS'];
  }

  /**
   * 生成动态顶部导航
   * @private
   */
  _genTabs = () => {
    const tabs = {};
    this.tabNames.forEach((item,index)=> {
      tabs[`tab${index}`] = {
        screen:(props) => <TopTab {...props} tabLabel = {item}/>,//传参数从顶部导航到导航下面的页面进行参数传递
        navigationOptions:{
          title:item
        }
      }
    })
    return tabs;
  }
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
        this._genTabs(),{
          tabBarOptions:{
            tabStyle:styles.tabStyle,
            upperCaseLabel:false,//是否标签大小写
            scrollEnabled:true,//是否可以滚动
            style:{
              backgroundColor: '#678'
            },
            indicatorStyle: styles.indicatorStyle,//底部指示器的颜色
            labelStyle:styles.labelStyle

          }
        }
    ));
    return (
      <View style={{flex:1,marginTop:30}}>
        <TabNavigator/>
      </View>
    );
  }
}

/**
 * 顶部导航组件
 */
class TopTab extends Component {
  render() {
    const {tabLabel} = this.props;  //取出从顶部导航传过来的参数
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLabel}</Text>
          <Text
              onPress = { () => {
                NavigationUtil.goPage({
                navigation:this.props.navigation
            },"DetailPage")}}>跳转到详情页</Text>
          <Button
              title = {'跳转fetch'}
              onPress = { () => {
                NavigationUtil.goPage({
                navigation:this.props.navigation
            },"FetchDemoPage")}}
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
  tabStyle: {
    minWidth:50
  },
  indicatorStyle:{
    height:2,
    backgroundColor:'white'
  },
  labelStyle:{
    fontSize: 13,
    marginTop:6,
    marginBottom:6
  }
});
