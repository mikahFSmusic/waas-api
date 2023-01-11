import express, { Request, Response } from 'express';

export const uploadAudioFile = async (req: Request, res: Response) => {
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
};
