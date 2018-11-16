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
  setData: function(patientId, valueType, value1, value2) {
    var newDataRef = this.db.ref('patient' + patientId + '/healthdata/' + valueType).push();
    if(value2 === undefined) {
      newDataRef.set({
        data: value1,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    } else {
      newDataRef.set({
        data: {"systolic": value1, "diabolic": value2},
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    }
    
  }
}
db.setData(1, 'diary', "Hej, detta är mitt tredje meddelande");
db.setData(1, 'bloodpressure', 120, 80);
export default db;
