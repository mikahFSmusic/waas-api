// src/audio/audio.interface.ts

export interface Audio {
  id: string;
  filename: string;
  path: string;
}

export interface AudioFiles {
  [key: string]: Audio;
}
