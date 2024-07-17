import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './button.style';

export default function Button() {
 return (
   <TouchableOpacity style={styles.button}>
    <Text>Acessar</Text>
   </TouchableOpacity>
  );
}