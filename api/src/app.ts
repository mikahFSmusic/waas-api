import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Routes
import UploadRoutes from './routes/uploadAudioFile.route';
import { initializeApp } from 'firebase/app';

dotenv.config();

console.log('PORT: ', process.env.PORT);
console.log('FIREBASE_API_KEY: ', process.env.FIREBASE_API_KEY);

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
initializeApp(firebaseConfig);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(UploadRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
