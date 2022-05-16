import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqhXlJzUhokPna7W-1fxReboyRHI7cqJw",
  authDomain: "mini-blog-ab784.firebaseapp.com",
  projectId: "mini-blog-ab784",
  storageBucket: "mini-blog-ab784.appspot.com",
  messagingSenderId: "1009875361653",
  appId: "1:1009875361653:web:265e17d0fcfedac548fd3c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };