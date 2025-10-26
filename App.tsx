import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function App() {
  return (
  <SafeAreaProvider style={styles.safeArea}>
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  </SafeAreaProvider>
  );
}

export default App


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})


