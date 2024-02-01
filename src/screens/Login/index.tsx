import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authenticate} from '../../services/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRecoilState} from 'recoil';
import {authState} from '../../atom/auth';

export const Login = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useRecoilState(authState);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authenticate,
        email,
        password,
      );

      await AsyncStorage.setItem(
        'accessTocken',
        JSON.stringify(userCredential.user),
      );
      setAuth(userCredential.user);
      auth;
      console.log(userCredential.user, 'response');

      navigation.navigate('NAVBAR');
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
