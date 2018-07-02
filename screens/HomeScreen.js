import React from 'react'
import produce from 'immer'
import { View } from 'react-native'
import Styles from './HomeScreen/Styles'
import NavigationBar from './HomeScreen/NavigationBar'
import OrderListView from './HomeScreen/OrderListView'
import Context, { createOrder } from './HomeScreen/OrderContext'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  /* eslint-disable */
  state = {
    orders: [],
    setStatus: (id, status) => this.setState(produce(draft => {
      const order = draft.orders[draft.orders.findIndex(order => order.orderId === id)]
      order.status = status
    })),
  }
  /* eslint-enable */

  componentDidMount() {
    const orders = [...Array(30).keys()].map(x => createOrder(x))
    this.setState({orders}) // eslint-disable-line
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <View style={Styles.container}>
          <NavigationBar />
          <OrderListView />
        </View>
      </Context.Provider>
    )
  }
}

export default HomeScreen
