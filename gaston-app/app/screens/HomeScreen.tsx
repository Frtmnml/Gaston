import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>HomeScreen</Text>
      <Text style={styles.body}>📊</Text>
      <Text style={styles.body}>ahorro</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.card,
    backgroundColor: '#FF3A3A',
    flex:1,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 24,
  },
  body: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 30,
  },
});