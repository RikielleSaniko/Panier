import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormField({label, ...props}){
  return(
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8
  },

  label: {
    marginTop: 12,
    marginBottom: 4,
  },

});