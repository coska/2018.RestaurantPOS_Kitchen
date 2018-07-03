import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import { TouchableOpacity } from 'react-native'

import {
  KitNavButtonSty,
  KitNavTextSty,
  KitNavPrevNextSty,
  KitNavPrevNextTextSty,
  KitNavClockSty,
  KitNavLogoSty,

} from './Styles'


//
// button
//
const KitNavButton = ({ children, onPress, style, styleText=KitNavTextSty() }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={styleText}>
      {children}
    </Text>
  </TouchableOpacity>
)

//
// clock
//
class KitClock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: this.getDateTime() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000  /* every 1 sec */
      /*59000 */ /* every 59 sec */
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: this.getDateTime(), });
  }

  getDateTime(){
    cdate = new Date()
    fdate = (cdate.getMonth() + 1) + ' / '
          + cdate.getDate() + ' / '
          + cdate.getFullYear()

    ftime = cdate.getHours() + ':'
          + cdate.getMinutes() + ':'
          + cdate.getSeconds()

    return fdate + " " + ftime
  }

  render() {
    return ((
      <Text style={KitNavClockSty()}>
        {this.state.date}
      </Text>
    ));
  }
}

//
// nav bar
//
class NavigationBar extends Component {
  state = { }
  /**
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
  **/
  render() {
    return (
    <View style={{ flexDirection: 'row', backgroundColor: 'skyblue', padding:3 }}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderWidth:0 }}>

          {/** LOGO + PREV/NEXT **/}
          <View style={{ flex: 2, borderWidth: 0, flexDirection: 'row'}}>

            <View style={{ flex: 1}}>
              <Text style={ KitNavLogoSty() }>COSKA SUSHI</Text>
            </View>

            <View style={{ flex: 1, borderWidth: 0, flexDirection: 'row' }}>
              <View>
                <KitNavButton
                  children ="PREV" /* TODO */
                  style = { KitNavPrevNextSty() }
                  styleText = { KitNavPrevNextTextSty() }
                />
              </View>
              <View>
                <KitNavButton
                  children ="NEXT" /* TODO */
                  style = { KitNavPrevNextSty() }
                  styleText = { KitNavPrevNextTextSty() }
                />
              </View>
            </View>

          </View>
          {/** CLOCK **/}
          <View style={{ flex: 1, borderWidth: 0, flexDirection:'row', justifyContent: 'flex-end'}}>
            <KitClock />
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <KitNavButton
              children ="NEW ORDER(#)" /* TODO */
              style =  { KitNavButtonSty('#EEE') }
            />
          </View>
          <View>
            <KitNavButton
              children ="COOKING(#)" /* TODO */
              style =  { KitNavButtonSty('#EEE') }
            />
          </View>
          <View>
            <KitNavButton
              children ="DONE(#)" /* TODO */
              style =  { KitNavButtonSty() }
            />
          </View>
          <View>
            <KitNavButton
              children ="DAY TOTAL(#)" /* TODO */
              style =  { KitNavButtonSty() }
            />
          </View>
        </View>


    </View>
    )
  }
}
export default NavigationBar
