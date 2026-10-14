import { StyleSheet, Text, View } from 'react-native';
import FormField from "../components/FormField";
import HighlightButton from "../components/HighlightButton";



export default function AccountScreen(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Ta liste te suivra sur tous tes appareils</Text>
        <FormField label="Nom d'utilisateur" placeholder="ex. rik"/>
        <FormField label="Mot de passe" placeholder="Mot de passe" secureTextEntry/>
        <FormField label="Confirmation de mot de passe" placeholder="Confirmation de mot de passe" secureTextEntry/>
      </View>

      <HighlightButton label="Créer le compte"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '85%',
    maxWidth: 400,
    justifyContent: 'space-between',
    alignSelf:'center',
    paddingVertical: 24
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },

  subtitle: {
    color: '#555',
    marginTop: 4,
    marginBottom: 10,
  },
});