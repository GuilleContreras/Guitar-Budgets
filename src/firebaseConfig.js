import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB68tidSYA4lpFHo6wNuc_YlHDJygrBi64",
    authDomain: "guitar-budgets.firebaseapp.com",
    projectId: "guitar-budgets",
    storageBucket: "guitar-budgets.appspot.com",
    messagingSenderId: "459541792405",
    appId: "1:459541792405:web:480af23375dea2e102fd9c"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
const db=firebase.firestore();

export default db;