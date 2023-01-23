import { Request, Response } from 'express';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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
