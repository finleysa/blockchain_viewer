const http = require ('https');
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
const mongoInsert = require('./mongoInsert');

// Connection URL
const url = 'mongodb://localhost:27017/dashboard';


exports.db = null;


// Use connect method to connect to the Server
exports.Start = function() {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    exports.db = db;
    hitApi();
    setInterval(hitApi, 20 * 1000);
  });
}

 hitApi = function() {
  http.get('https://api.coinmarketcap.com/v1/ticker/', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        mongoInsert(exports.db, parsedData, (success) => {
          if (success) {
            console.info('api data saved: ' + success.insertedCount)
          }
        })
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}
