import {Image, View} from 'react-native';
import {styles} from './style';

export const FullScreenBrand = () => {
  return (
    <>
      <View style={styles.covidIconContainer}>
        <Image
          source={require('../../assets/png/covid_virus.png')}
          style={styles.covidIcon}
        />
      </View>
    </>
  );
};
