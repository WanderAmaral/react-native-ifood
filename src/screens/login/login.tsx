import { View, SafeAreaView } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/Header/header";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Header text="Acesse sua conta" />
      </View>
    </View>
  );
}
