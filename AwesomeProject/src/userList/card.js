import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({name, username, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.all}>name:{name}</Text>
      <Text style={styles.all}>username:{username}</Text>
      <Text style={styles.all}>email:{email}</Text>
      <Text style={styles.all}>address:{address}</Text>
      <Text style={styles.all}>phone{phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    // alignItems: 'right',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,
    marginTop: 5,
    marginTop: 15,
    // alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  all: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});