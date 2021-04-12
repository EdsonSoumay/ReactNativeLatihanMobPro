import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from './card/card.js';
import Axios from 'axios';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      setUsers(res.data),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card style = {styles.card}
            key={item.id}
            name ={item.name}
            username={item.username}
            email={item.email}
            addressStreet ={item.address.street}
            addressSuite = {item.address.suite}
            addressCity = {item.address.city}
            addressZipCode = {item.address.zipcode}
            phone= {item.phone}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Userlist;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }
});