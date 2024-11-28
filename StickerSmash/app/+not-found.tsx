import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: 'Oops! Not Found'}}/>
        <View style={styles.container}>
        <Text style={styles.text}>The screen doesn't exist ⚠️ </Text>
        <Link href={'/'} style={styles.button}>
            Go back to Home
        </Link>
        </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#FFF111',
  }
})