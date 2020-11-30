# example-aws-api-gateway-websocket

## Setup

以下のコマンドを実行します。

```bash
$ npm run setup
```

`.env` ファイルが出来上がっているので、必要な環境変数に書き換えてください

## Deploy

[AWSのアクセスキー](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html)などを設定した上で、以下のコマンドを実行するとデプロイできます。

```bash
$ npm run deploy

(略)

endpoints:
  wss://xxxxxxxxxx.execute-api.(AWS_REGION).amazonaws.com/prod

(略)
```

WebSocket のエンドポイントが表示されます。

## Remove

使わなくなったら消しておきましょう。
[AWSのアクセスキー](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html)などを設定した上で、以下のコマンドを実行すると削除できます。

```bash
$ npm run remove
```
