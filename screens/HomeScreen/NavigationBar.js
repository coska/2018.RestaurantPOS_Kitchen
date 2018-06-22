import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

class NavigationBar extends Component {
  state = { }

  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'skyblue' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30 }}>LOGO</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>NAVI</Text>
          <Text>TIME</Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View>
            <Text>ORDER</Text>
          </View>
          <View>
            <Text>DONE</Text>
          </View>
          <View>
            <Text>VOID</Text>
          </View>
          <View>
            <Text>TOTAL</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default NavigationBar
