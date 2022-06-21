import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC0IBDPOp6cLSxwUxsN7ofU-Y7thxU6iZo",
    authDomain: "coffe-shop-e1190.firebaseapp.com",
    projectId: "coffe-shop-e1190",
    storageBucket: "coffe-shop-e1190.appspot.com",
    messagingSenderId: "191303779596",
    appId: "1:191303779596:web:8a0fbc46902013dfc6b529",
    measurementId: "G-94LC4R451G"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);