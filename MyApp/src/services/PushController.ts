import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification"

export const CHANNEL_ID = "app_notification";

export const ConfigurePushNotification = () => {
  PushNotification.createChannel(
    {
      channelId: CHANNEL_ID,
      channelName: 'Notigication Poc',
    },
    () => {
      console.info('[LocalPushcontroller.ts]', 'Channel created');
    },
  );
  
  PushNotification.configure({
    onRegister: function(token) {
      console.log('TOKEN:', token)
    },
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      PushNotification.getApplicationIconBadgeNumber((number) => {
        console.info("badge", number)
      })
      console.log('NOTIFICATION ==>', notification)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    popInitialNotification: true,
    requestPermissions: true,
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  })
}

export const LocalNotification = () => {
  PushNotification.setApplicationIconBadgeNumber(1)
  PushNotification.localNotification({
    channelId: CHANNEL_ID,
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: ["Yes", "No"],
    
  })
}