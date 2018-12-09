import * as firebase from 'firebase';
console.disableYellowBox = true;
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


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const db = {
  db: app.database(),
  getData: function(patientId, valueType, onceHandler, updateHandler) {
    this.db
      .ref('patient' + patientId + '/healthdata/' + valueType)
      .once('value', onceHandler);

    this.db
      .ref('patient' + patientId + '/healthdata/' + valueType)
      .orderByChild('timestamp')
      .startAt(Date.now())
      .on('child_added', updateHandler);
  },
  setData: function(patientId, valueType, value, callback) {
    var newDataRef = this.db
      .ref('patient' + patientId + '/healthdata/' + valueType)
      .push();
    if (callback !== undefined) {
      console.log('callback defined');
      newDataRef
        .set({
          data: value,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        })
        .then(callback);
    } else {
      console.log('callback undefined');
      newDataRef.set({
        data: value,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  },
  setDataWrapper: function(patientId, valueObj, callback) {
    for (var prop in valueObj) {
      if (prop === Object.keys(valueObj)[Object.keys(valueObj).length - 1]) {
        this.setData(patientId, prop, valueObj[prop], callback);
      } else {
        this.setData(patientId, prop, valueObj[prop]);
      }
    }
  },
};
var state = {
  weight: 72,
  ketons: 1.35,
  bloodsugar: 1.49,
  diatolic: 73,
  systolic: 126,
};

// for (var i = 0; i < 10; i++) {
//   state.weight = getRndInteger(65, 75)
//   state.ketons = Number((Math.random() * (1.40 - 1.30) + 1.30).toFixed(4));
//   state.bloodsugar = Number((Math.random() * (1.52 - 1.45) + 1.30).toFixed(4));
//   db.setDataWrapper(1, state)
// }

export default db;
