const { logMessage } = require("../logger");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    await logMessage("msgSend", message.author.tag, message.channel.name, message.content);
  }
};
