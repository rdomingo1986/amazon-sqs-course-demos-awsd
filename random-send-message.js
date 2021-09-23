const { sendMessage } = require('./modules/send-message-module');

const util = require('util');

const random = require('random');

const run = async function () {
  try {
    setInterval(async function () {
      const response = await sendMessage('Hello World!!!', {
        'Value': {
          DataType: 'Number',
          StringValue: random.int(1, 10)
        }
      });
      console.log(util.inspect(response, false, null, true));
    }, 1);
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();