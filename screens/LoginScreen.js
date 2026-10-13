import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import FormField from "../components/FormField";
import HighlightButton from "../components/HighlightButton";




export default function LoginScreen(){
  return (
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.header}>
              <View style={styles.logo}>
                <Ionicons name="basket-outline" size={35} color='#2F6B4F' />
              </View>
              <Text style={styles.title}>Panier</Text>
              <Text style={styles.subtitle}>Ta liste d'épicerie, toujours à portée de{'\n'}main.</Text>
            </View>

              <View>
              <FormField label="Nom d'utilisateur" placeholder="ex. rik"/>
              <FormField label="Mot de passe" placeholder="Mot de passe" secureTextEntry/>
              </View>
          </View>

          <View>
            <HighlightButton label="Se connecter"/>
            <Text style={styles.footerText}>Pas encore de compte? <Text style={styles.link}>Créer un compte</Text></Text>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '85%',
    maxWidth: 400,
    alignSelf: 'center',
    
    paddingVertical: 24,
    justifyContent: 'space-between'
  },

  link: {
    color: '#2F6B4F',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2F6B4F',
    marginTop: 5
  },

  header: {
    alignItems: 'center',
  },

  top:{
    gap:40,
  },

  logo:{
    borderRadius: 35,
    backgroundColor: '#DCEBE2',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerText: {
    textAlign: 'center',
    marginTop: 16,
  },

  subtitle: {
  textAlign: 'center',
  color: '#555',
},


});