import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ScrollView,
  FlatList,
} from 'react-native'
import Styles from './Styles'
import OrderCard from './OrderCard'
import { setOrderStatus } from '../../actions'

class OrderListView extends Component {
  state = {
    currentTime: '',
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => this.setCurrentTime(), 1000)
  }

  componentWillUnmount = () => clearInterval(this.timerId)

  setCurrentTime = () => {
    const currentTime = new Date().toJSON().slice(11, 16)

    return this.setState({ currentTime })
  }

  render() {
    const { orders, setOrderStatus } = this.props // eslint-disable-line
    const { currentTime } = this.state

    return (
      <ScrollView style={Styles.container}>
        <FlatList
          initialNumToRender={6}
          data={orders}
          numColumns={3}
          extraData={currentTime}
          renderItem={({ item }) => (
            <OrderCard
              item={item}
              setStatus={setOrderStatus}
              currentTime={currentTime}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    )
  }
}

export default connect(
  state => ({ orders: state.orders }),
  dispatch => bindActionCreators({ setOrderStatus }, dispatch),
)(OrderListView)
