/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   View,
 } from 'react-native';

 import { LocalNotification } from "./src/services/PushController"

 const App = () => {
  const handleButtonPress = () => {
    LocalNotification()
  }

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{ marginTop: 20 }}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
    </View>
  )
 };

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})

 export default App;
