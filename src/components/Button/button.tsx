import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";
interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
