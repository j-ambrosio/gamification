const mongoose = require('mongoose');

const {
  DB_APPLICATION_USER,
  DB_APPLICATION_PASS,
  DB_HOSTNAME,
  DB_PORT,
  DB_APPLICATION_DATABASE
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500, 
  connectTimeoutMS: 10000,
};

const url = `mongodb://${DB_APPLICATION_USER}:${DB_APPLICATION_PASS}@${DB_HOSTNAME}:${DB_PORT}/${DB_APPLICATION_DATABASE}?authSource=admin`;

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
.catch( function(err) {
  console.log(err);
});
