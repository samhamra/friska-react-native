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
  setData: function(patientId, valueType, value, callback) {
    var newDataRef = this.db.ref('patient' + patientId + '/healthdata/' + valueType).push();
    if(callback !== undefined) {
      console.log("callback defined");
      newDataRef.set({
        data: value,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }).then(callback);
    } else {
      console.log("callback undefined");
      newDataRef.set({
        data: value,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    }
  },
  setDataWrapper: function(patientId, valueObj, callback) {
  for(var prop in valueObj) {
    if(prop === Object.keys(valueObj)[Object.keys(valueObj).length - 1]) {
      this.setData(patientId, prop, valueObj[prop], callback)
    } else {
        this.setData(patientId, prop, valueObj[prop])
    }
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

var sam = function() {
  console.log("data stored");
}
db.setDataWrapper(1, state, sam);
export default db;
