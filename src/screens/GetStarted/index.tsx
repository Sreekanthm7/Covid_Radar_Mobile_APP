import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Common} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

export const GetStarted = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <View style={styles.getStartedContainer}>
      <Common.BackArrow />
      <Text style={styles.title}>Covid Radar</Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>It's time</Text>
        <View style={styles.subTitleTwoContainer}>
          <Text style={styles.subTitle}>to</Text>
          <Text style={styles.subTitleTwo}>tra</Text>
          <View style={{position: 'absolute', left: 20}}>
            <Common.Track />
          </View>
          <Text style={styles.subTitleText}>K</Text>
        </View>
        <Text style={styles.subTitle}>Covid!</Text>
      </View>
      <TouchableOpacity
        style={styles.getStartedBtnContainer}
        onPress={() => navigation.navigate('LOGIN')}>
        <View style={styles.getStartedBtn}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
