import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    title: string
}

const Button = ({title}:Props) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button