const { lambda } = require('./modules/lambda-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await lambda.createEventSourceMapping({
      FunctionName: 'awsd-officialcourse-demo-amazon-sqs',
      EventSourceArn: 'arn:aws:sqs:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sqs',
      BatchSize: 10,
      Enabled: true,
      Queues: ['awsd-officialcourse-demo-amazon-sqs']
    });
    
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();