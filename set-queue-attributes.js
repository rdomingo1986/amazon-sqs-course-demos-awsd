const { sqs } = require('./modules/sqs-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await sqs.setQueueAttributes({
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/864613434505/awsd-officialcourse-demo-amazon-sqs',
      Attributes: {
        RedrivePolicy: JSON.stringify({
          deadLetterTargetArn: 'arn:aws:sqs:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sqs-DLQ',
          maxReceiveCount: 1
        })
      }
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();