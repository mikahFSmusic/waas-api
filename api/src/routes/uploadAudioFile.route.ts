import express from 'express';
import multer from 'multer';
import { uploadAudioFile } from '../controllers/uploadAudioFile.controller';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), uploadAudioFile);

export default router;
