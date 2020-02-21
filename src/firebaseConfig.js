import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCTeg8iVn8g1mqPGnGzk-5LgwhTWkfRUVQ",
  authDomain: "pizza-place-5df08.firebaseapp.com",
  databaseURL: "https://pizza-place-5df08.firebaseio.com",
  projectId: "pizza-place-5df08",
  storageBucket: "pizza-place-5df08.appspot.com",
  messagingSenderId: "325729620358",
  appId: "1:325729620358:web:9b2aac5fddd5401e2e1c07",
  measurementId: "G-PPM3LMQHSE"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref("menu");
export const dbOrdersRef = db.ref("orders");
