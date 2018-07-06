import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ScrollView,
  FlatList,
} from 'react-native'
import Styles from './Styles'
import OrderCard from './OrderCard'
import { setOrderStatus } from '../../actions'

const OrderListView = ({ orders, setOrderStatus }) => ( // eslint-disable-line
  <ScrollView style={Styles.container}>
    <FlatList
      initialNumToRender={6}
      data={orders}
      numColumns={3}
      renderItem={({ item }) => (<OrderCard item={item} setStatus={setOrderStatus} />)}
      keyExtractor={(item, index) => index}
    />
  </ScrollView>
)

export default connect(
  state => ({ orders: state.orders }),
  dispatch => bindActionCreators({ setOrderStatus }, dispatch),
)(OrderListView)
