import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1q_G9ZVZCzS0NWm8OIC31EY_jeyQ_R_A",
    authDomain: "scheduler-emmy-cs397.firebaseapp.com",
    databaseURL: "https://scheduler-emmy-cs397.firebaseio.com",
    projectId: "scheduler-emmy-cs397",
    storageBucket: "scheduler-emmy-cs397.appspot.com",
    messagingSenderId: "99423648074",
    appId: "1:99423648074:web:dfeb07b47c0574a05b69b3",
    measurementId: "G-YY92W9XK0B"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };