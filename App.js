import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from "./screens/LoginScreen";
import AccountScreen from "./screens/AccountScreen";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        {/* <LoginScreen/> */}
         <AccountScreen/>
        
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4EF',
   
  },
});
