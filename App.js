import React, { Component } from 'react/index.js'
import { Animated, Easing } from 'react-native'
import MainScreen from './src/screens/main.js'
import TrendingWebsites from './src/screens/trending-websites.js'
import WebViewScreen from './src/screens/web-view'

import { createStackNavigator, createAppContainer } from 'react-navigation'
const option = {
  headerStyle: {
    backgroundColor: '#c4302b'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 17
  }
}
const MainNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      headerMode: 'none',
      navigationOptions: ({ navigation }) => ({
        title: 'Online Shopping',
        header: null
      })
    },
    WebViewScreen: {
      screen: WebViewScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.name
      })
    },
    TrendingWebsites: {
      screen: TrendingWebsites,
      navigationOptions: ({ navigation }) => ({
        title: 'Top Trending Websites'
      })
    }
  },
  {
    defaultNavigationOptions: () =>
      Object.assign(
        {
          initialRouteName: 'Main'
        },
        option
      ),
    mode: 'card',
    headerMode: 'screen',
    headerTransitionPreset: 'uikit',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const width = layout.initWidth
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        })
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })

        return { opacity, transform: [{ translateX: translateX }] }
      }
    })
  }
)
const AppContainer = createAppContainer(MainNav)

export default class App extends Component {
  render () {
    return <AppContainer />
  }
}
