import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Common} from '../../assets/svg';
import {RootStackNavigationProps} from '../../types/navigation';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.titleContainer}>
        <View style={{padding: 18}}>
          <Text style={styles.heading}>Covid Radar</Text>
          <Text style={styles.headingText}>Are you feeling sick?</Text>
          <Text style={styles.headingContent}>
            If you feel sick with any COVID symptoms, please call our helpline
            number immediately for help
          </Text>
          <TouchableOpacity style={styles.callBtnContainer}>
            <View style={styles.callBtn}>
              <Common.Phone />
              <Text style={styles.callBtnText}>Call Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Prevention Tips</Text>
        <View style={styles.preventionTipsContainer}>
          <View style={styles.preventionTipsContents}>
            <Image
              source={require('../../assets/png/avoid-close-contact.png')}
              style={styles.preventionIcons}
            />
            <Text style={styles.preventionText}>Avoid close contact</Text>
          </View>
          <View style={styles.preventionTipsContents}>
            <Image
              source={require('../../assets/png/mask.png')}
              style={styles.preventionIcons}
            />
            <Text style={styles.preventionText}>Always wear a mask</Text>
          </View>
          <View style={styles.preventionTipsContents}>
            <Image
              source={require('../../assets/png/washing-hands.png')}
              style={styles.preventionIcons}
            />
            <Text style={styles.preventionText}>Wash your hands properly</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewUpdatesContainer}
          onPress={() => navigation.navigate('DISTRICT_LIST_PAGE')}>
          <Image
            source={require('../../assets/png/map.png')}
            style={styles.mapIcon}
          />
          <Text style={styles.viewUpdatesText}>
            Tap to view current updates
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
