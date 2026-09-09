import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>mi-app</Text>
      <Image
        source={require("./assets/cat.gif")}
        style={styles.gif}
      />
      <Text>proyecto en construcción...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    gif: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    color: "#FDC855",
  },
});
