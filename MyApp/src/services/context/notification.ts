import React from 'react';

export type Notification = {
  badgeNumber: number;
  setBadgeNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const NotificationContext = React.createContext<Notification>({
  badgeNumber: 0,
  setBadgeNumber: () => {}
});
