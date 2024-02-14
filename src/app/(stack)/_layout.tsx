import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const StackLayout = (props: Props) => {
  return (
    <Stack
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
      name='index'
      options={{
        title: "Home"
      }} />
    </Stack>
  )
}

export default StackLayout