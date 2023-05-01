import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuAbyAtf0RsAgIG98FTZhm48GaBgTi1tA",
  authDomain: "college-project-ff93a.firebaseapp.com",
  projectId: "college-project-ff93a",
  storageBucket: "college-project-ff93a.appspot.com",
  messagingSenderId: "756217237386",
  appId: "1:756217237386:web:bf43a2a8c240580cbbc273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
