import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD_9mh_FM9iPh7bpjYkIJ8a8-UzBTjrQI",
  authDomain: "linkin-clone-490ec.firebaseapp.com",
  projectId: "linkin-clone-490ec",
  storageBucket: "linkin-clone-490ec.appspot.com",
  messagingSenderId: "704523618756",
  appId: "1:704523618756:web:f3b39a1dfdcbe55e74fc91",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
