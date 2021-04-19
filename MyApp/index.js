/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ConfigurePushNotification } from './src/services/PushController'

ConfigurePushNotification();
AppRegistry.registerComponent(appName, () => App);
