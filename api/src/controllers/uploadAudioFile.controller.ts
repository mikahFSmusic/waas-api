import { Request, Response } from 'express';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

export const uploadAudioFile = async (req: Request, res: Response) => {
  console.log('Upload route reached');
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return;
    }

    const storage = getStorage();

    const storageRef = ref(storage, 'tmp/audio/' + req.file.originalname);

    const uploadResult = await uploadBytes(storageRef, req.file.buffer);

    console.log(uploadResult);

    res.send({ data: uploadResult });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
