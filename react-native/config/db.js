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

/*
valueTypes: keton, weight, bloodsugar, bloodpressure, diary
examples:
db.getHealthData(1, 'bloodsugar')
db.setHealthData(1, 'bloodsugar', 1.37)

*/

const db = {
  db: app.database(),
  getHealthData: function(patientId, valueType, onceHandler, updateHandler) {
    this.db.ref('patient' + patientId + '/healthdata/' + valueType).once('value', onceHandler);
    
    this.db.ref('patient' + patientId + '/healthdata/' + valueType).orderByChild('timestamp').startAt(Date.now()).on('child_added', updateHandler);
  },
  setHealthData: function(patientId, valueType, value) {
    var newDataRef = this.db.ref('patient' + patientId + '/healthdata/' + valueType).push();
    newDataRef.set({
      data: value,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  }
}
export default db;
