/* eslint-disable */
import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Ionicons } from '@expo/vector-icons'
import RootNavigation from './navigation/RootNavigation'
import HomeScreen from './screens/HomeScreen'
import Reducers from './reducers'

const store = createStore(Reducers, applyMiddleware(thunk))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

async function register() {
  console.log('Registering...W');
  const { status } = await Expo.Permissions.askAsync (
    Expo.Permissions.NOTIFICATIONS
  );
  console.log(' Permitions: ' + status);

  if(status !== 'granted') {
    alert("You need to enable permission in setting");
    return;
  }

  const pushToken = await Expo.Notifications.getExpoPushTokenAsync();  
  console.log(' Token: ' + pushToken);

  return fetch('http://192.168.0.17:8080/users/push-token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
              'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token:  pushToken,
      userId: 'thomas'
    } ),
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      })
    ])
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  componentWillMount() {
    register();
    this.listener = Expo.Notifications.addListener(this.listen);
  }

  componentWillUnMount() {
      this.listener && Expo.Notifications.removeListener(this.listen)
  }

  listen = ({origin, data}) => {
    console.log(origin, data);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      </View>
    )
  }
}
