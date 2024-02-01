import {useRecoilState} from 'recoil';
import {authState} from '../atom/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthentication = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const initialiseAuthState = async () => {
    const storedAuth = await AsyncStorage.getItem('accessTocken');

    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  };

  return {
    initialiseAuthState,
  };
};
