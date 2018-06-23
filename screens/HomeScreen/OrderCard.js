import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import Button from './OrderButton'
import { getColor } from './Styles'

class OrderCard extends Component {
  static propTypes = {
    item: PropTypes.object // eslint-disable-line
  }

  state = {
    status: 'start',
  }

  onPressHandler = () => {
    const { status } = this.state

    if (status === 'start') {
      return this.setState({ status: 'done' })
    }

    return this.setState({ status: 'call' })
  }

  getCurrentTime = () => this.props.item.createdDateTime.slice(11, 16)

  getOrderTime = () => '00:00'

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
    const colors = getColor(status)

    return (
      <View style={{ flex: 1 }}>
        <View style={{
          margin: 5,
          borderColor: '#ddd',
          backgroundColor: colors.backgroundColor,
          }}
        >
          <View
            style={{
              backgroundColor: colors.headerColor,
              flex: 1,
              height: 5,
            }}
          />

          <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 5 }}>
              <Text style={{ flex: 0.8, fontWeight: '800' }}>
                TABLE ({item.table.tableId}) / ORDER ({item.orderId})
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

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={this.onPressHandler} backgroundColor={colors.buttonBackgroundColor}>
              { status.toUpperCase() }
            </Button>
          </View>

        </View>
      </View>
    )
  }
}

export default OrderCard
