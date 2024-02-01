import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME: undefined;
  GET_STARTED: undefined;
  LOGIN: undefined;
  PROFILE: undefined;
  NAVBAR: undefined;
};

export type HomeTabParamList = {
  HOME: undefined;
  PROFILE: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
