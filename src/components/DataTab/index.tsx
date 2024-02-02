import {Text, View} from 'react-native';
import {styles} from './style';

type DataTabProps = {
  title: string;
  value: number;
  color: string;
};

export function DataTab({value, color, title}: DataTabProps) {
  return (
    <>
      <View
        style={{
          backgroundColor: color,
          width: '40%',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.dataTabTitle}>{title}</Text>
        <Text style={styles.dataTabValue}>{value}</Text>
      </View>
    </>
  );
}
