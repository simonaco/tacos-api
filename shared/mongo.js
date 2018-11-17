const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const auth = {
  user: process.env.user,
  password: process.env.password
};

const mongoUri = `mongodb://${process.env.user}.documents.azure.com:${
  process.env.port
}/?ssl=true`;

let client = null;
function connect() {
  mongoose.set('debug', true);
  return new Promise((resolve, reject) => {
    if (client == null) {
      mongoose
        .connect(
          mongoUri,
          { auth: auth }
        )
        .then(_client => {
          client = _client;
          resolve(_client);
        })
        .catch(err => reject(err.status));
    } else {
      resolve(client);
    }
  });
}

module.exports = {
  connect,
  mongoose
};
