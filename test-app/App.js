import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView style={{ width: "100%", height: "100%", backgroundColor: "red" }} cacheEnabled={true} cacheMode='LOAD_DEFAULT' source={{ uri: 'https://pwa-demo.glitch.me/' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
