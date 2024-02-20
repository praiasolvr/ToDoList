import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBqzB-ratMxXUtOdnIJro736-uiI9amk5M",
  authDomain: "praia-sol-vereda.firebaseapp.com",
  projectId: "praia-sol-vereda",
  storageBucket: "praia-sol-vereda.appspot.com",
  messagingSenderId: "818528265006",
  appId: "1:818528265006:web:b43c06555c4dc57f7410bf",
  measurementId: "G-VZ5BJXB4LN"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };