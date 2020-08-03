import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBppHEqr9O1B7WNBi0doMH23mLEsgX7YQQ",
  authDomain: "ichagram-35c79.firebaseapp.com",
  databaseURL: "https://ichagram-35c79.firebaseio.com",
  projectId: "ichagram-35c79",
  storageBucket: "ichagram-35c79.appspot.com",
  messagingSenderId: "329513350647",
  appId: "1:329513350647:web:fb63af61b745b80bd0aaf2",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const pronjectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, pronjectFirestore, timestamp };
