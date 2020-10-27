# example-aws-api-gateway-websocket



## Setup

以下のコマンドを実行します。

```bash
$ npm run setup
```

`.env` ファイルが出来上がっているので、必要な環境変数に書き換えてください



## Deploy

AWSのアクセスキーなどを設定した上で、以下のコマンドを実行します。

```bash
$ npm run deploy

(略)

endpoints:
  wss://xxxxxxxxxx.execute-api.(AWS_REGION).amazonaws.com/prod

(略)
```

WebSocket のエンドポイントが表示されます。
これを後で使うのでメモしておいてください。



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

ブラウザで取得した `endpoint` と `connectionId` を使って、以下のコマンドを実行します。

```bash
$ aws apigatewaymanagementapi post-to-connection --data '{"test":"data"}' --endpoint-url '(endpoint)' --connection-id '(connectionID)'
```

これで上記のブラウザへ `{"test":"data"}` のデータが送信されます。

## Remove

使わなくなったら消しておきましょう。
AWSのアクセスキーなどを設定した上で、以下のコマンドを実行すれば削除できます。

```bash
$ npm run remove
```
