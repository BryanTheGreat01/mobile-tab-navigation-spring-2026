import { Stack } from "expo-router";

import { View, Text } from 'react-native'
import React from 'react'
import _layout from "../_layout";

const CoursesStackLayout = () => {
  return (
    <Stack
    screenOptions={{
        headerStyle:{backgroundColor:'#003865'},
        headerTintColor:'#FFFFFF',
        headerTitleStyle:{
            fontWeight:'700'
        },
        contentStyle:{backgroundColor:'#F8FAFC'}
    }}
    >
        <Stack.Screen name='index' options={{title:'Courses'}} />
     
    </Stack>
  )
}

export default CoursesStackLayout