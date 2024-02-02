import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {District} from '../../types/districtData';
import {styles} from './styles';
import {Common} from '../../assets/svg';
import {RootStackNavigationProps} from '../../types/navigation';
import {DataTab} from '../../components/DataTab';

export const CovidDataList = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  let {value, key} = useRoute().params as {
    value: District;
    key: string;
  };

  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.staticsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>STATISTICS</Text>
        </View>
        <TouchableOpacity
          style={styles.backArrowContainer}
          onPress={() => navigation.navigate('DISTRICT_LIST_PAGE')}>
          <Common.WhiteBackArrow />
        </TouchableOpacity>
        <Text style={styles.districtName}>{key}</Text>

        <View style={styles.dataContainer}>
          <DataTab
            title={'Total Confirmed'}
            value={value.total.confirmed}
            color={'red'}
          />
          <DataTab
            title={'Currently Deceased'}
            value={value.total.deceased}
            color={'green'}
          />
          <DataTab
            title={'First Dose Vaccinated'}
            value={value.total.vaccinated1}
            color={'orange'}
          />
          <DataTab
            title={'Second Dose Vaccinated'}
            value={value.total.vaccinated2}
            color={'purple'}
          />
          <DataTab
            title={'Recovered'}
            value={value.total.recovered}
            color={'violet'}
          />
        </View>
      </View>
    </ScrollView>
  );
};
