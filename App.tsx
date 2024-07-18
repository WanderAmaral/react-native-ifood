import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { style } from "./style";
import Button from "./src/components/Button/button";
import Login from "./src/screens/login/login";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <View style={styles.content}>
        <Login />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
