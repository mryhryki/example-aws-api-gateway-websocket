module.exports.handler = async (event, _context, callback) => {
  const {connectionId, apiId, stage} = event.requestContext;
  const endpoint = `${apiId}.execute-api.${process.env.AWS_REGION}.amazonaws.com/${stage}`
  console.info(endpoint, connectionId)
  callback(null, { statusCode: 200 })
}
