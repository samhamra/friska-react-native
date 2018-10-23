import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB5nmQ4J5HFchD2bJM6ULKmZcAsKTSQ5WU',
  authDomain: 'friska-grupp-1.firebaseapp.com',
  databaseURL: 'https://friska-grupp-1.firebaseio.com',
  projectId: 'friska-grupp-1',
  storageBucket: 'friska-grupp-1.appspot.com',
  messagingSenderId: '15640593268',
};

var app = firebase.initializeApp(firebaseConfig);
const db = app.database();
export default db;
