import Config from 'react-native-config';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
  appId: Config.APP_ID,
  measurementId: Config.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const authenticate = getAuth(app);

export default app;
