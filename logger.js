const fs = require("fs");
const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");

const logFilePath = path.join(__dirname, "logs", "messages.csv");

let messageCounter = 1;

if (fs.existsSync(logFilePath)) {
  const existingData = fs.readFileSync(logFilePath, "utf8").trim().split("\n");
  if (existingData.length > 1) {
    const lastLine = existingData[existingData.length - 1].split(",");
    messageCounter = parseInt(lastLine[0], 10) + 1;
  }
}

const csvWriter = createObjectCsvWriter({
  path: logFilePath,
  header: [
    { id: "id", title: "ID" },
    { id: "timestamp", title: "Timestamp" },
    { id: "event", title: "Event" },
    { id: "user", title: "User" },
    { id: "channel", title: "Channel" },
    { id: "message", title: "Message" }
  ],
  append: fs.existsSync(logFilePath)
});

async function logMessage(event, user, channel, message) {
  const timestampJST = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  await csvWriter.writeRecords([
    {
      id: messageCounter++,
      timestamp: timestampJST,
      event,
      user,
      channel,
      message
    }
  ]);
}

module.exports = { logMessage };
