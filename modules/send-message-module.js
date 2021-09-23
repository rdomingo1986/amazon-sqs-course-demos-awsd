const { sqs } = require('./sqs-client.js');

const util = require('util');

module.exports.sendMessage = async function (message, attributes) {
  try {
    return await sqs.sendMessage({
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/864613434505/awsd-officialcourse-demo-amazon-sqs',
      MessageBody: message,
      MessageAttributes: attributes
    });
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};