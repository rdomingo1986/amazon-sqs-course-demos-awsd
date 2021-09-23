const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    if(parseInt(event.Records[0].messageAttributes.Value.stringValue) % 2 == 0) {
        dynamodb.putItem({
            TableName: process.env.table_name,
            Item: {
                'messageId': {
                    S: event.Records[0].messageId
                }
            }
        }, function (err, res) {
          if (err) return console.log(err);
          console.log(res);
          return response;
        });
    } else {
        throw new Error('Error', response);
    }
    
};
