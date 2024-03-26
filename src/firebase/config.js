import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAlyZuj9S8dKSTRG9KKPmc7rG1XjOyxFzQ",
    authDomain: "fir-olx-d2165.firebaseapp.com",
    projectId: "fir-olx-d2165",
    storageBucket: "fir-olx-d2165.appspot.com",
    messagingSenderId: "834588875252",
    appId: "1:834588875252:web:7821efe9620f4856d6c1a1",
    measurementId: "G-KPG3NC3E59"
  };

export default firebase.initializeApp(firebaseConfig)