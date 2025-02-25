const { logMessage } = require("../logger");
const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "messageDelete",
  async execute(message) {
    if (message.author.bot) return;

    await logMessage("msgDeleted", message.author.tag, message.channel.name, message.content || "Unknown");

    const logChannel = message.guild.channels.cache.get(config.logChannelId);
    if (logChannel) {
      const embed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle("🗑️ メッセージ削除")
        .setDescription(`**ユーザー:** @${message.author.tag} (${message.author.id})\n**チャンネル:** ${message.channel}\n**内容:** ${message.content || "Unknown"}`)
        .setTimestamp();

      logChannel.send({ embeds: [embed] });
    }
  }
};
