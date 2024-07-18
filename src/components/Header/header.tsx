import { Image, View, Text } from "react-native";
import { styles } from "./header.style";

interface HeaderProps {
  text: string
}

export default function Header({text}: HeaderProps) {
  return (
    <>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.text}>{text}</Text>
    </>
  );
}
