// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('582d103200233a0c68621627')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('582d167805ff4a1f1c188198')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: 'Jaeyoung'
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
