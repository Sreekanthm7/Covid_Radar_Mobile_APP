import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

export const Login = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
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
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'black'}
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
