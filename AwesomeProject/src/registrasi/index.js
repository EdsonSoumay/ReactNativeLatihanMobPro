import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, DrawerLayoutAndroidComponent, ScrollView} from 'react-native';
import TextInput from './textInput';
import Button from './button'
import Gap from './gap';

const App = () => {

  const [welcome, setWelcome] = useState('Registration')

  const [Name, setName] = useState() 
  const [UserName, setUserName] = useState()
  const [Email,setEmail] = useState();
  const [Address,setAddress] = useState();
  const [NumberPhone,setPhoneNumber] = useState();

  useEffect(() => {
  // console.log('component did mount')
  }, []);

  useEffect(() => {
    // console.log('componen did update')

  }, [welcome])


  const handleSubmit =()=>{
    // setWelcome('selamat datang');

    const data ={
      name:Name,
      username:UserName,
      email:Email,
      address:Address,
      NumberPhone:NumberPhone
    }
    console.log(data)
  }

  console.log('render componen')
  return (
      <ScrollView>

            <View style={styles.container}>
            <Text style={styles.title}>{welcome}</Text>
            <Gap height={24} />
            <TextInput label="Name" placeholder="Masukan nama lengkap anda" value ={Name} onChangeText ={(e)=>setName(e)}/>
            <Gap height={24} />
            <TextInput label="Username" placeholder="Masukan username anda" value ={UserName} onChangeText ={(e)=>setUserName(e)}/>
            <Gap height={24} />
            <TextInput label="Email" placeholder="Masukan email anda" value ={Email} onChangeText ={(e)=>setEmail(e)}/>
            <Gap height={24} />
            <TextInput label="Address" placeholder="Masukan alamat anda" value ={Address} onChangeText ={(e)=>setAddress(e)} />
            <Gap height={24} />
            <TextInput label="Phone Number" placeholder="Masukan nomor telepon anda" value ={NumberPhone} onChangeText ={(e)=>setPhoneNumber(e)}/>
            <Gap height={24} />
            <Button  label="Register" onsubmit ={()=> handleSubmit()} />
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
  },
  button:{
    marginTop: 10,
    backgroundColor: '#C238CE',
    borderRadius: 7,
  },
  TextButton:{
    paddingVertical: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }

});

export default App;
