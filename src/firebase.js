import {events} from "./store";
import {getAnalytics} from "firebase/analytics";
import {
   getDatabase,
   remove as fbRemove,
   onValue as fbOnValue,
   ref as fbref,
   set as fbset,
   update as fbupdate
} from "firebase/database";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlMWX0f0SnIm47CIvsmDviTDOY7Zqf1jw",
  authDomain: "catstabber2000.firebaseapp.com",
  projectId: "catstabber2000",
  storageBucket: "catstabber2000.appspot.com",
  messagingSenderId: "1032025818893",
  appId: "1:1032025818893:web:5cf486a1ccd9f3a6885244",
  measurementId: "G-SX1TTZW168"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

export const db = getDatabase();

export const set = (path, value) => {
   return fbset(fbref(db, path), value);
}

export const update = (path, value) => {
   return fbupdate(fbref(db, path), value);
}

export const onValue = (path, callback) => {
   return fbOnValue(fbref(db, path), callback);
}

export const remove = (path)=> {
   return fbRemove(fbref(db, path));
}


onValue(`events`, (snapshot) => {
   events.set(snapshot.val())
})
