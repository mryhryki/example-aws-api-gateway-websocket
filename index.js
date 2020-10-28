const {ApiGatewayManagementApi} = require('aws-sdk')

const onMessage = async (event) => {
  const { body } = event
  const {connectionId, apiId, stage} = event.requestContext;
  const endpoint = `https://${apiId}.execute-api.${process.env.AWS_REGION}.amazonaws.com/${stage}`

  const apiGateway = new ApiGatewayManagementApi({apiVersion: '2018-11-29', endpoint})
  const params = {Data: JSON.stringify({endpoint, connectionId, request: body}), ConnectionId: connectionId}
  await apiGateway.postToConnection(params).promise()

  return {}
}

const mockHandler = (_event, _context, callback) => callback(null, {})

module.exports = {
  onConnect: mockHandler,
  onMessage,
  onDisconnect: mockHandler,
}
