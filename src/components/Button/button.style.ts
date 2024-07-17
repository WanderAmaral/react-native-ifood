import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes";

export const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    backgroundColor: COLORS.red,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9
  },
  text: {
    color: COLORS.white,
    fontSize: 20
  },
});
