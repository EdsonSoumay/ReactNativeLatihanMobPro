import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from './textInput/textInput';
import Button from './button/button'
import Gap from './gap/gap';
import axios from 'axios';

const InputData = () => {

  const [Registration, setRegistration] = useState('Input Data')

  const [firstName, setFirstName] = useState() 
  const [lastName, setLastName] = useState()
  const [email,setEmail] = useState();
 

  const Submit =()=>{
    
    const data ={
      firstName:firstName,
      lastName:lastName,
      email:email,
    }

    axios.post('http://10.0.2.2:3004/users', data)
    .then(res=>{
      console.log('response:',res );
      setFirstName('');
      setLastName('');
      setEmail('');
    })
  }

  return (
      <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>{Registration}</Text>
            <Gap height={16} />
            <TextInput label=" First Name" placeholder="Masukan nama depan anda" value ={firstName} onChangeText ={(e)=>setFirstName(e)}/>
            <Gap height={16} />
            <TextInput label="Last Name" placeholder="Masukan nama belakang anda" value ={lastName} onChangeText ={(e)=>setLastName(e)}/>
            <Gap height={16} />
            <TextInput label="Email" placeholder="Masukan email anda" value ={email} onChangeText ={(e)=>setEmail(e)}/>
            <Gap height={16} />
            <Button  label="Save" onsubmit ={()=> Submit()} />
            </View>
      </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }
});

export default InputData;
