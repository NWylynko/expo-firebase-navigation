import firebaseConfig from './config';

import app from "firebase/app";

import "firebase/database";
import "firebase/storage"

app.initializeApp(firebaseConfig);

export default app;

