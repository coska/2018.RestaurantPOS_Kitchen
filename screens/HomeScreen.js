import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Styles from './HomeScreen/Styles'
import NavigationBar from './HomeScreen/NavigationBar'
import OrderListView from './HomeScreen/OrderListView'
import { createTestData } from '../actions'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.props.createTestData() // eslint-disable-line
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationBar />
        <OrderListView />
      </View>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ createTestData }, dispatch),
)(HomeScreen)
