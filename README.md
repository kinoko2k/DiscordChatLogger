# DiscordChatLogger
Discordに送信したメッセージを、csv形式で保存し、ログチャンネルに送信するコードです。

使用する前に、以下のライブラリをインストールする必要があります。
- discord.js v14
- dotenv
- csv-writer
```
npm install discord.js dotenv csv-writer
```

また、config.jsonに必要な情報を入れてください。
```json
{
  "token": "TOKEN",
  "serverId": "メッセージを監視したいサーバーID",
  "logChannelId": "メッセージ編集、削除のログを送信するチャンネルID"
}
```

## ログメッセージ
![スクリーンショット 2025-02-25 185659](https://github.com/user-attachments/assets/3a54dbea-f164-4958-8805-67d9a090defc)
![スクリーンショット 2025-02-25 185725](https://github.com/user-attachments/assets/839027d3-77ab-47f0-b2ca-7efb70537ff6)
