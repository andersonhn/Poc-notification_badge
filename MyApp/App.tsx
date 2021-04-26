/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState } from 'react';
import { useEffect } from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
import { requestNotifications } from 'react-native-permissions';
import { NotificationContext } from './src/services/context';

import { ConfigurePushNotification, LocalNotification } from "./src/services/PushController"

 const App = () => {

  const [badgeNumber, setBadgeNumber] = useState<number>(0);

  const handleButtonPress = () => {
    LocalNotification()
  }

  useEffect(() => {
    requestNotifications(['alert', 'sound', 'badge']).then(({status, settings}) => {
      console.info("Notification Permission: ", {status, settings})
    });
  }, [])

  return (
    <NotificationContext.Provider value={{
      badgeNumber,
      setBadgeNumber
    }}>
      <View style={styles.container}>
        <Text>Press a button to trigger the notification</Text>
        <Text>Badge: {badgeNumber}</Text>
        <View style={{ marginTop: 20 }}>
          <Button title={'Local Push Notification'} onPress={handleButtonPress} />
        </View>
      </View>
    </NotificationContext.Provider>
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
