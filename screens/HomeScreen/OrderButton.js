import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { OrderButton, OrderButtonText } from './Styles'

const Button = ({ children, onPress, backgroundColor, color }) => (
  <TouchableOpacity onPress={onPress} style={OrderButton(backgroundColor)}>
    <Text style={OrderButtonText(color)}>
      {children}
    </Text>
  </TouchableOpacity>
)

export default Button

