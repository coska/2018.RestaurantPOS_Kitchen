import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import KitClock from './KitClock'

import {
  KitNavButtonSty,
  KitNavTextSty,
  KitNavPrevNextSty,
  KitNavPrevNextTextSty,
  KitNavLogoSty,
} from './Styles'

//
// button
//
const KitNavButton = ({text, onPress, style, styleText = KitNavTextSty()}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={styleText}>
      {text}
    </Text>
  </TouchableOpacity>
)

//
// nav bar
//
class NavigationBar extends Component {
  state = { }
  /*
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
  */
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'skyblue', padding: 3 }}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

          {/* LOGO + PREV/NEXT */}
          <View style={{ flex: 2, borderWidth: 0, flexDirection: 'row'}}>

            <View style={{ flex: 1 }}>
              <Text style={KitNavLogoSty()}>COSKA SUSHI</Text>
            </View>

            <View style={{ flex: 1, borderWidth: 0, flexDirection: 'row' }}>
              <View>
                <KitNavButton
                  text="PREV"
                  style={KitNavPrevNextSty()}
                  styleText={KitNavPrevNextTextSty()}
                />
              </View>
              <View>
                <KitNavButton
                  text="PREV"
                  style={KitNavPrevNextSty()}
                  styleText={KitNavPrevNextTextSty()}
                />
              </View>
            </View>
          </View>

          {/* CLOCK */}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <KitClock />
          </View>

        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <KitNavButton
              text="NEW ORDER(#)"
              style={KitNavButtonSty('#0EE')}
            />
          </View>
          <View>
            <KitNavButton
              text="COOKING(#)"
              style={KitNavButtonSty('#099')}
            />
          </View>
          <View>
            <KitNavButton
              text="DONE(#)"
              style={KitNavButtonSty('#077')}
            />
          </View>
          <View>
            <KitNavButton
              text="DAY TOTAL(#)"
              style={KitNavButtonSty('#055')}
            />
          </View>
        </View>


      </View>
    )
  }
}
export default NavigationBar
