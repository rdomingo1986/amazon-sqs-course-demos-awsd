const { sqs } = require('./modules/sqs-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await sqs.purgeQueue({
      QueueName: 'awsd-officialcourse-demo-amazon-sqs'
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();