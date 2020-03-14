import firebaseConfig from './config';
import app from "firebase/app";

import "firebase/auth";
import "firebase/database";

app.initializeApp(firebaseConfig);

// Authentication api

export const doSignOut = () =>
  app.auth().signOut();

export default app;

