const {ApiGatewayManagementApi} = require('aws-sdk')

module.exports.handler = (event, _context, callback) => {
  const {connectionId, apiId, stage} = event.requestContext;
  const endpoint = `https://${apiId}.execute-api.${process.env.AWS_REGION}.amazonaws.com/${stage}`
  const apiGateway = new ApiGatewayManagementApi({apiVersion: '2018-11-29', endpoint})
  const params = {Data: JSON.stringify({endpoint, connectionId}), ConnectionId: connectionId}
  apiGateway.postToConnection(params, (err, data) => {
    console.info(err, data)
    callback(err, {statusCode: 200})
  })
}
