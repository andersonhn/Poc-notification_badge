import PushNotificationIOS from "@react-native-community/push-notification-ios";
import React, { ReactElement, ReactNode, useContext, useEffect } from "react";
import { View } from "react-native";
import PushNotification from "react-native-push-notification"
import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import { NotificationContext } from "./context";

export const CHANNEL_ID = "app_notification";

export type NotificationType = {
  children: ReactNode;
}

export const ConfigurePushNotification = (props: NotificationType):ReactElement => {

  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    console.info("Notification Initialize")
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
        console.log('NOTIFICATION ==>', notification)
        if (notification.userInteraction) {
          PushNotification.getDeliveredNotifications((notificaitons) => {
            console.info("get All delivered Notificaitons")
            console.info(notificaitons);
          })
          console.info("Navigate to certain route or Configure the initial route");
        } else {
          console.info("Badge", notification.badge)
          notificationContext.setBadgeNumber((previewValue: number) => {
            console.info(previewValue);
            return notification.badge ? notification.badge : (previewValue ? ++previewValue : 1)
          })
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },
      popInitialNotification: true,
      requestPermissions: true,
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    })
  }, []);

  return (
    <>
      {props.children}
    </>
  )
};

export const LocalNotification = () => {
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