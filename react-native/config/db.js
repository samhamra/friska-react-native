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
valueTypes: keton, weight, bloodsugar, bloodpressure
examples:
db.getHealthData(1, 'bloodsugar')
db.setHealthData(1, 'bloodsugar', 1.37)
*/

/*
diary
chat

*/


const db = {
  db: app.database(),
  getData: function(patientId, valueType, onceHandler, updateHandler) {
    this.db.ref('patient' + patientId + '/healthdata/' + valueType).once('value', onceHandler);
    
    this.db.ref('patient' + patientId + '/healthdata/' + valueType).orderByChild('timestamp').startAt(Date.now()).on('child_added', updateHandler);
  },
  setData: function(patientId, valueType, value) {
    var newDataRef = this.db.ref('patient' + patientId + '/healthdata/' + valueType).push();
      newDataRef.set({
        data: value,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
  },
  setDataWrapper: function(patientId, valueObj) {
  for(var prop in valueObj) {
    this.setData(patientId, prop, valueObj[prop])
  }
    
  }
}
db.setData(1, 'diary', "Hej, detta är mitt tredje meddelande");
var state = {
  weight: 70,
  ketons: 1.4,
  bloodsugar: 1.5,
  diastolic: 73,
  systolic: 127,
}
db.setDataWrapper(1, state)


export default db;
