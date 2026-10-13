import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function HighlightButton({label}){

  return(
    <View>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableHighlight>
    </View>
  );

}

const styles = StyleSheet.create({

  button: {
    borderRadius: 8,
    backgroundColor: '#2F6B4F',
    padding: 12,
    marginTop: 24,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center'
  }, 

  buttonText: {
    fontWeight:'bold',
    color: 'white',
  },
});