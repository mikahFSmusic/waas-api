import express from 'express';
import multer from 'multer';
import { uploadAudioFile } from '../controllers/uploadAudioFile.controller';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const UPLOAD_ROUTE = '/upload';

router.post(UPLOAD_ROUTE, upload.single('file'), uploadAudioFile);

// get request to /upload logs 'Upload route reached'
router.get(UPLOAD_ROUTE, (req, res) => {
  console.log('Upload route reached');
  res.send('Upload route reached');
});

export default router;
