import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {

  const mostrarMensaje = () => {
    Alert.alert(
      'MichiCare 🐱',
      '¡Hora de revisar cómo está tu gatito!'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>MichiCare 🐾</Text>

      <Image
        source={require('./assets/cat.gif')}
        style={styles.gif}
      />

      <Text style={styles.description}>
        Una aplicación pensada para ayudar a los dueños de gatos
        a organizar sus cuidados y estar pendientes de sus necesidades.
      </Text>

      <Text style={styles.subtitle}>Funcionalidades</Text>

      <Text style={styles.feature}>
        🐾 Registrar información y datos importantes de tu gato.
      </Text>

      <Text style={styles.feature}>
        🔔 Recibir recordatorios de comida, vacunas y cuidados.
      </Text>

      <Text style={styles.feature}>
        📷 Guardar fotografías y llevar un registro de tu mascota.
      </Text>

      <Pressable
        style={styles.button}
        onPress={mostrarMensaje}
      >
        <Text style={styles.buttonText}>
          Revisar a mi gato
        </Text>
      </Pressable>

      <Text style={styles.author}>
        Jandry David
      </Text>

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
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FDC855',
    marginBottom: 10,
  },

  gif: {
    width: 220,
    height: 220,
    marginBottom: 15,
  },

  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  feature: {
    width: '100%',
    fontSize: 14,
    marginBottom: 10,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#FDC855',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  author: {
    fontSize: 13,
    color: '#888',
    marginTop: 20,
    fontStyle: 'italic',
  },

});