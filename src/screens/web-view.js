import React, { Component } from 'react'

import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';

export default class MainActivity extends Component {
  constructor (props) {
    super(props)
    this.state = { show: true }
  }

  ActivityIndicatorLoadingView () {
    return <ActivityIndicator color='#009688' size='large' style={styles.ActivityIndicatorStyle} />
  }

  render () {
    const { navigation } = this.props
    const url = navigation.getParam('url', 'https://www.flipkart.com/')
    return (
      <>
        {this.state.show ? (
          <WebView
            style={styles.WebViewStyle}
            source={{ uri: url }}
            javaScriptEnabled
            domStorageEnabled
            renderError={this.ActivityIndicatorLoadingView}
            renderLoading={this.ActivityIndicatorLoadingView}
            onError={() => this.setState({ show: false })}
            startInLoadingState
            onShouldStartLoadWithRequest={() => this.setState({ show: false })}
          />
        ) : (
          <View>
            <Text>Net problem Please try after sometime</Text>
          </View>
        )}
      </>
    )
  }
}

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },

  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
