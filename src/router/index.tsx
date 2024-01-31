import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOption} from '../constants';
import {GetStarted} from '../screens/GetStarted';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const accessTocken = await AsyncStorage.getItem('accessTocken');
        setIsAuthenticated(accessTocken !== null);
      } catch (error) {
        console.log('Error fetching access tocken', error);
      }
    };
    checkAuthentication();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DefaultScreenOption}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="HOME" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="GET_STARTED" component={GetStarted} />
            <Stack.Screen name="LOGIN" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
