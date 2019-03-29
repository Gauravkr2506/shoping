import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, TouchableNativeFeedback, Image, Button } from 'react-native'
import { categories } from './../data/categories.js'
import { assets } from '../data/assets.js'
import SplashScreen from 'react-native-splash-screen'

export default class Main extends React.Component {
  componentDidMount () {
    SplashScreen.hide()
  }
  openTrendingWebsites () {
    this.props.navigation.navigate('TrendingWebsites')
  }
  _renderItem = ({ item }) => <MyListItem item={item} navigation={this.props.navigation} />
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#efefef' }}>
        <View style={{ height: 56, backgroundColor: '#CC2B37', flexDirection: 'row', marginBottom: 15 }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Smart Shopping</Text>
          </View>
          <View style={{ flex: 1, paddingRight: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
            <TouchableNativeFeedback onPress={() => this.openTrendingWebsites()} title='All'>
              <View style={{ height: 36, width: 90, alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef', borderRadius: 5 }}>
                <Text style={{ color: '#CC2B37', fontSize: 13 }}>All Categories</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <FlatList data={categories} renderItem={this._renderItem} />
      </View>
    )
  }
}

export class MyListItem extends Component {
  showWebPage (url, name) {
    this.props.navigation.navigate('WebViewScreen', { url: url, name: name })
  }
  _renderItem1 = ({ item }) => <MyListItem1 item={item} navigation={this.props.navigation} />
  render () {
    return (
      <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff', padding: 10, backgroundColor: '#fff', margin: 10 }}>
        <View style={{ borderWidth: 2, borderColor: '#CC2B37', borderRadius: 5, width: 100, height: 150, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={this.props.item.img} resizeMode='center' style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, marginHorizontal: 10, marginBottom: 10, fontWeight: 'bold', color: '#FF4C0B' }}>{this.props.item.title}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.props.item.categories.map((item, i) => (
              <View
                key={i + 'a'}
                style={{
                  width: 100,
                  height: 43,
                  borderRadius: 15,
                  overflow: 'hidden',
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                  borderColor: '#ccc'
                }}
              >
                <TouchableNativeFeedback
                  onPress={() => this.showWebPage(item.url, this.props.item.title + ' (' + item.category + ')')}
                  style={{ width: 96, height: 41, alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image source={item.img} resizeMode='center' />
                </TouchableNativeFeedback>
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}
