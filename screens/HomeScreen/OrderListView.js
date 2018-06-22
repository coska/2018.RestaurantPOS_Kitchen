import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  FlatList,
} from 'react-native'
import Styles from './Styles'
import { Context } from './OrderContext'

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
                renderItem={({ item }) => (
                  <View style={{ flex: 1 }}>
                    <View style={{ margin: 5, borderColor: '#ddd', backgroundColor: '#fff' }}>
                      <Text>Order#: {item.orderNo}</Text>
                    </View>
                  </View>
                )}
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
