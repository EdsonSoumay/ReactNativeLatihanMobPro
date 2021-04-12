import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Registrasi from './registrasi/index'
import Userlist from './userList/index'
const App = () => {
  return (
    <ScrollView>
        <Registrasi/> 
        <Userlist/>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})
