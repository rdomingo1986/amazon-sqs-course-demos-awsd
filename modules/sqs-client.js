const { SQS } = require('@aws-sdk/client-sqs');

const sqs = new SQS({
  region: 'us-east-1'
});

module.exports.sqs = sqs;