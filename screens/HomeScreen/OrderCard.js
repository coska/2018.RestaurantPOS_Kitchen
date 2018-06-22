import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

class OrderCard extends Component {
  static propTypes = {
    item: PropTypes.object // eslint-disable-line
  }

  state = {}

  render() {
    const { item } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 5, borderColor: '#ddd', backgroundColor: '#fff' }}>
          <Text>Order#: {item.orderId}</Text>
        </View>
      </View>
    )
  }
}

export default OrderCard
