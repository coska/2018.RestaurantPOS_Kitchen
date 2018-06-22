import React, { Component } from 'react'
import {
  ScrollView,
  FlatList,
} from 'react-native'
import Styles from './Styles'
import { Context } from './OrderContext'
import OrderCard from './OrderCard'

class OrderListView extends Component {
  state = { }

  render() {
    return (
      <ScrollView style={Styles.container}>
        <Context.Consumer>
          {
            context => (
              <FlatList
                initialNumToRender={6}
                data={context.orders}
                numColumns={3}
                renderItem={({ item }) => (<OrderCard item={item} />)}
                keyExtractor={(item, index) => index}
              />
            )
          }
        </Context.Consumer>
      </ScrollView>
    )
  }
}

export default OrderListView
