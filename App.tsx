import { Text, View } from "react-native";
import { style } from "./style";
import Button from "./src/components/Button/button";

export default function App() {
  return (
    <View style={style.container}>
      <Button text="Acessar" />
    </View>
  );
}
