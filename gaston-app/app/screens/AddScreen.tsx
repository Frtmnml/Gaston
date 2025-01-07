import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla para agregar gastos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex:1,
    justifyContent: 'center',
    padding: 20,
    // borderRadius: 24,
  },
  body: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
});