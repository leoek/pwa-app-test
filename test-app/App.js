import { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  const [view, setView] = useState(0);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {Boolean(view === 0) && <WebView style={{ width: "100%", height: 300, backgroundColor: "red" }} cacheEnabled={true} cacheMode='LOAD_DEFAULT' source={{ uri: 'https://pwa-demo.glitch.me' }} />}
      {Boolean(view === 1) && <WebView style={{ width: "100%", height: 300, backgroundColor: "red" }} cacheEnabled={true} cacheMode='LOAD_DEFAULT' source={{ uri: 'https://pwa.deimel.dev' }} />}
      {Boolean(view === 2) && <WebView style={{ width: "100%", height: 300, backgroundColor: "red" }} cacheEnabled={true} cacheMode='LOAD_DEFAULT' source={{ uri: 'https://leoek.github.io/pwa-app-test' }} />}
      <Button 
        title="next"
        onPress={() => {
        if (view < 2){
          setView(view + 1);
        } else {
          setView(0)
        }
      }} />
    </View>
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
