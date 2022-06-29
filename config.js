import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBmmPrH3H2mVMXztjmJJ-1O3nKu4qg-K20",
    authDomain: "project68-d85ec.firebaseapp.com",
    projectId: "project68-d85ec",
    storageBucket: "project68-d85ec.appspot.com",
    messagingSenderId: "284864191840",
    appId: "1:284864191840:web:296da80eaa8f2fd0fb9205"
};
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();