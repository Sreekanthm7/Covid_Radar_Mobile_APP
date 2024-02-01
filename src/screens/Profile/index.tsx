import {Text, TouchableOpacity, View} from 'react-native';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRecoilState} from 'recoil';
import {authState} from '../../atom/auth';

export const Profile = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [auth, setAuth] = useRecoilState(authState);

  const handleLogout = async () => {
    setAuth(null);
    await AsyncStorage.removeItem('accessTocken');
  };

  return (
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <View style={styles.profilePageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
          <Common.BackArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutBtnContainer}
          onPress={handleLogout}>
          <View style={styles.loginBtn}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
              }}>
              <View style={styles.logoutIcon}>
                <Common.Logout />
              </View>
              <Text style={styles.logoutText}>Logout</Text>
            </View>
            <Common.RightArrow />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
