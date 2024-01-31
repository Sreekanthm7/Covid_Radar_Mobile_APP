import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../services/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE_AUTH_KEY} from '../../constants';

export const Login = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        userCredential => {
          const user = userCredential.user;
          AsyncStorage.setItem('accessTocken', JSON.stringify(user))
          console.log(user, 'data');
          navigation.navigate('HOME');
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('GET_STARTED')}>
        <Common.BackArrow />
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        <Text style={styles.loginTitle}>Welcome!</Text>
        <Text style={styles.loginText}>Login with your credentials</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'black'}
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'black'}
          style={styles.textInput}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <View style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
