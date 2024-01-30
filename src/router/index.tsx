import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOption} from '../constants';
import {GetStarted} from '../screens/GetStarted';
import {Login} from '../screens/Login';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DefaultScreenOption}>
        <Stack.Screen name="GET_STARTED" component={GetStarted} />
        <Stack.Screen name="LOGIN" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};