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

  state = {
    status: 'start',
  }

  getCurrentTime = () => this.props.item.createdDateTime.slice(11, 16)

  getOrderTime = () => '00:00'

  getHeaderColor = (status) => {
    switch (status) {
      case 'start':
        return 'grey'
      case 'done':
        return 'teal'
      default:
        return 'red'
    }
  }

  renderOrderItems = items => (
    items.map(item => (
      <View
        key={item.product.productId}
        style={{ flexDirection: 'row', margin: 5 }}
      >
        <Text style={{ flex: 0.8, fontWeight: '800' }}>{item.product.name}</Text>
        <Text style={{ flex: 0.2, textAlign: 'right', fontWeight: '800' }}>{item.quantity}</Text>
      </View>
    ))
  )

  render() {
    const { item } = this.props
    const { status } = this.state

    return (
      <View style={{ flex: 1 }}>
        <View style={{
          margin: 5,
          borderColor: '#ddd',
          backgroundColor: '#fff',
          }}
        >
          <View
            style={{
              backgroundColor: this.getHeaderColor(status),
              flex: 1,
              height: 5,
            }}
          />

          <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 5 }}>
              <Text style={{ flex: 0.8, fontWeight: '800' }}>
                TABLE({item.table.tableId}) / ORDER({item.orderId})
              </Text>
              <Text style={{
                flex: 0.2,
                textAlign: 'right',
                fontWeight: '600',
                color: 'teal',
                }}
              >
                {item.orderedBy.userName}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <Text style={{ flex: 0.8 }}>
                {this.getCurrentTime()} ({this.getOrderTime()})
              </Text>
              <Text style={{ flex: 0.2, textAlign: 'right' }}>
                Total: {item.orderItems.length}
              </Text>
            </View>
          </View>

          { this.renderOrderItems(item.orderItems) }
        </View>
      </View>
    )
  }
}

export default OrderCard
