import firebaseConfig from './config';

import fire from "firebase/app";

import "firebase/database";
import "firebase/storage";
import "firebase/auth"

if (fire.apps.length === 0) {
  fire.initializeApp(firebaseConfig);
}

export default fire;

