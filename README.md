# example-aws-api-gateway-websocket

## Setup

以下のコマンドを実行します。

```bash
$ npm run setup
```

`.env` ファイルが出来上がっているので、必要な環境変数に書き換えてください

## Test on Browser

```javascript
var WebSocketURL = 'wss://xxxxxxxxxx.execute-api.(AWS_REGION).amazonaws.com/prod';
var ws = new WebSocket(WebSocketURL);
ws.onmessage = (messageEvent) => console.debug(JSON.parse(messageEvent.data))
ws.send('{}')
// {endpoint: "https://xxxxxxxxxx.execute-api.(AWS_REGION).amazonaws.com/prod", connectionId: "XXXXXXXXXXXXXXX="}
```

送信に必要な情報が返ってくる

## Test by AWS CLI

```bash
$ aws apigatewaymanagementapi post-to-connection --data '{"test":"data"}' --endpoint-url '(endpoint)' --connection-id '(ConnectionID)'
```
