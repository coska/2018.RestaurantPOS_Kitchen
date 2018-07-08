import React, { Component } from 'react'
import { Text } from 'react-native'
import { KitNavClockSty } from './Styles'

//
// clock
//
class KitClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: this.getDateTime() }
    this.tick = this.tick.bind(this)
    this.getDateTime = this.getDateTime.bind(this)
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000, /* every 1 sec */
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  getDateTime() {

    this.cdate = new Date()

    this.cMonth = this.cdate.getMonth()
    this.cDate = this.cdate.getFullYear()
    this.cYear = this.cdate.getFullYear()
    this.fdate = `${this.cdate.getMonth() + 1}  / ${this.cdate.getDate()} / ${this.cdate.getFullYear()}`

    this.cHour = this.cdate.getHours()
    this.cMin = this.cdate.getMinutes()
    this.cSec = this.cdate.getSeconds()
    this.ftime = `${this.cHour} : ${this.cMin} : ${this.cSec}`

    return `${this.fdate} ${this.ftime}`
  }

  tick() {
    this.setState({ date: this.getDateTime() })
  }

  render() {
    return ((
      <Text style={KitNavClockSty()}>
        {this.state.date}
      </Text>
    ))
  }
}

export default KitClock
