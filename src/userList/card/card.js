import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({name, username, email, addressStreet, addressSuite, addressCity, addressZipCode,phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.all}><Text style = {{fontWeight: "bold"}}>Name: </Text>{name}</Text>
      <Text style={styles.all}><Text style = {{fontWeight: "bold"}}>Username: </Text>{username}</Text>
      <Text style={styles.all}><Text style = {{fontWeight: "bold"}}>Email: </Text>{email}</Text>
      <Text style={styles.all}><Text style = {{fontWeight: "bold"}}>Address: </Text>{addressStreet},{addressSuite},{addressCity},{addressZipCode}</Text>
      <Text style={styles.all}><Text style = {{fontWeight: "bold"}}>Phone: </Text>{phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 3,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,   
  },
 
  all: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  }
});