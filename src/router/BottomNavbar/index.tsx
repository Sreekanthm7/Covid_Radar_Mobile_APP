import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from '../../types/navigation';
import {Platform, View} from 'react-native';
import {styles} from './styles';
import {Common} from '../../assets/svg';
import {Home} from '../../screens/Home';
import {Profile} from '../../screens/Profile';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = (
              <View style={focused && styles.iconActive}>
                <Common.Home />
              </View>
            );
          } else if (route.name === 'PROFILE') {
            iconName = (
              <View style={focused && styles.iconActive}>
                <Common.Profile stroke={focused ? '#2686D8' : '#303A47'} />
              </View>
            );
          } 
          return iconName;
        },
        tabBarActiveTintColor: '#2686D8',
        tabBarInactiveTintColor: '#303A47',
        tabBarStyle: [
          Platform.OS === 'ios' ? styles.iostabBarStyles : styles.tabBar,
        ],
      })}>
      <Tab.Screen name="HOME" component={Home} />
      {/** TO DO */}
      {/* <Tab.Screen name="CALENDER" component={Calender} /> */}
      <Tab.Screen name="PROFILE" component={Profile} />
    </Tab.Navigator>
  );
};
