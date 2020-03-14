import firebaseConfig from './config';

import app from "firebase/app";
import "firebase/database";

app.initializeApp(firebaseConfig);

export default app;

