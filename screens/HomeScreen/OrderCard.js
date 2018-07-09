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
    item: PropTypes.object, // eslint-disable-line
    setStatus: PropTypes.func.isRequired,
  }

  onPressHandler = () => {
    const { status, orderId } = this.props.item
    const { setStatus } = this.props

    if (status === 'new') {
      return setStatus(orderId, 'done')
    }

    return setStatus(orderId, 'call')
  }

  getCreatedTime = () => this.props.item.createdDateTime.slice(11, 16)

  getOrderTime = () => {
    const { currentTime } = this.props
    const createdTimeSeconds = this.getSeconds(this.getCreatedTime())
    const currentTimeSeconds = this.getSeconds(currentTime)
    const diff = currentTimeSeconds - createdTimeSeconds
    const hours = Math.floor(diff / 3600) < 10 ? `0${Math.floor(diff / 3600)}` : Math.floor(diff / 3600)
    const minutes = Math.floor((diff % 3600) / 60) < 10 ? `0${Math.floor((diff % 3600) / 60)}` : Math.floor((diff % 3600) / 60)

    if (!diff) return '00:00'

    return `${hours}:${minutes}`
  }

  getButtonText = () => {
    const { status } = this.props.item

    if (status === 'new') {
      return 'START'
    }

    return status.toUpperCase()
  }

  getSeconds = (str) => {
    const hm = str.split(':')
    const seconds = ((+hm[0]) * 60 * 60) + ((+hm[1]) * 60)

    return seconds
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
    const { status } = item
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
                {this.getCreatedTime()} (+{this.getOrderTime()})
              </Text>
              <Text style={{ flex: 0.2, textAlign: 'right' }}>
                Total: {item.orderItems.length}
              </Text>
            </View>
          </View>

          { this.renderOrderItems(item.orderItems) }

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={this.onPressHandler} backgroundColor={colors.buttonBackgroundColor}>
              { this.getButtonText() }
            </Button>
          </View>

        </View>
      </View>
    )
  }
}

export default OrderCard
