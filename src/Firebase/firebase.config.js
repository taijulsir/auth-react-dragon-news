
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1gqZmTPMc7vNOMatnTJZHXL950vdvNfY",
  authDomain: "auth-react-dragon-news.firebaseapp.com",
  projectId: "auth-react-dragon-news",
  storageBucket: "auth-react-dragon-news.appspot.com",
  messagingSenderId: "165167596544",
  appId: "1:165167596544:web:1204c306dcd848f1a844e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
