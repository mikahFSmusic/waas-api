import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return;
    }

    console.log(req.file);
    res.send('File uploaded successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
