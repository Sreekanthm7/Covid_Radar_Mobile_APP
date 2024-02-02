import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {District} from './districtData';

export type RootStackParamList = {
  HOME: undefined;
  GET_STARTED: undefined;
  LOGIN: undefined;
  PROFILE: undefined;
  NAVBAR: undefined;
  DISTRICT_LIST_PAGE: undefined;
  COVID_DATA_LIST: {value: District; key: string};
};

export type HomeTabParamList = {
  HOME: undefined;
  PROFILE: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
