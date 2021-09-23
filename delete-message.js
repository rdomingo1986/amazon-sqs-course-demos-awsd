const { sqs } = require('./modules/sqs-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await sqs.deleteMessage({
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/864613434505/awsd-officialcourse-demo-amazon-sqs',
      ReceiptHandle: process.argv[2]
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();