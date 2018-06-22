import React from 'react'
import { View } from 'react-native'
import Styles from './HomeScreen/Styles'
import NavigationBar from './HomeScreen/NavigationBar'
import OrderListView from './HomeScreen/OrderListView'
import { OrderProvider } from './HomeScreen/OrderContext'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = { }

  render() {
    return (
      <OrderProvider>
        <View style={Styles.container}>
          <NavigationBar />
          <OrderListView />
        </View>
      </OrderProvider>
    )
  }
}

export default HomeScreen
