import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
import Config from 'react-native-config';
import {useEffect, useState} from 'react';
import {Common} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {District} from '../../types/districtData';

export const DistrictListPage = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  let [data, setData] = useState<{[key: string]: District}>({});

  useEffect(() => {
    axios({
      method: 'get',
      url: Config.COVID_BASE_URL,
    }).then(response => {
      setData(response.data.KL.districts);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.covidDataPageContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('NAVBAR')}>
            <Common.BackArrow />
          </TouchableOpacity>
          <Text style={styles.districtWiseCovidDataTitle}>
            COVID DATA DISTRICT WISE
          </Text>
        </View>
        <View style={styles.districtContainer}>
          {Object.entries(data).map(([key, value]) => (
            <TouchableOpacity
              style={styles.districtBoxContainer}
              onPress={() =>
                navigation.navigate('COVID_DATA_LIST', {value, key})
              }
              key={key}>
              <Text style={styles.districtNameText}>{key}</Text>
              <Common.RightArrow />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
