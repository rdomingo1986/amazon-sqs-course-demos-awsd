const { sqs } = require('./modules/sqs-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await sqs.createQueue({
      QueueName: 'awsd-officialcourse-demo-amazon-sqs' + (process.argv[2] != undefined ? process.argv[2] : '')
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();