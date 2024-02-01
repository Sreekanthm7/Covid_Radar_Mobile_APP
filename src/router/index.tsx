import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOption} from '../constants';
import {GetStarted} from '../screens/GetStarted';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {BottomTab} from './BottomNavbar';
import {useRecoilState} from 'recoil';
import {authState} from '../atom/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [auth] = useRecoilState(authState);


  const renderRoutes = () => {
    if (auth) {
      return (
        <>
          <Stack.Screen name="NAVBAR" component={BottomTab} />
          <Stack.Screen name="HOME" component={Home} />
          <Stack.Screen name="PROFILE" component={Profile} />
        </>
      );
    } else {
      return (
        <>
          <Stack.Screen name="GET_STARTED" component={GetStarted} />
          <Stack.Screen name="LOGIN" component={Login} />
        </>
      );
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DefaultScreenOption}>
        {renderRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
