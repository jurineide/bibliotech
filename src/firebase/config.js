// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfRP0FhAOxnrJOV3LF7vgmGhJU4LTj8Sk",
  authDomain: "bibliotech-aulas-jurineide.firebaseapp.com",
  projectId: "bibliotech-aulas-jurineide",
  storageBucket: "bibliotech-aulas-jurineide.appspot.com",
  messagingSenderId: "809676341558",
  appId: "1:809676341558:web:c2f4ed5c61e29fa30b3397"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
