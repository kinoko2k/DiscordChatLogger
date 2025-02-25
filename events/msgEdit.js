const { logMessage } = require("../logger");
const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "messageUpdate",
  async execute(oldMessage, newMessage) {
    if (oldMessage.author.bot || oldMessage.content === newMessage.content) return;

    await logMessage(
      "Message Edited",
      oldMessage.author.tag,
      oldMessage.channel.name,
      `Before: ${oldMessage.content} >>> After: ${newMessage.content}`
    );

    const logChannel = oldMessage.guild.channels.cache.get(config.logChannelId);
    if (logChannel) {
      const embed = new EmbedBuilder()
        .setColor(0xFFA500)
        .setTitle("📝 メッセージ編集")
        .setDescription(`**ユーザー:** @${oldMessage.author.tag} (${oldMessage.author.id})\n**チャンネル:** ${oldMessage.channel}\n**編集前:** ${oldMessage.content}\n**編集後:** ${newMessage.content}`)
        .setTimestamp();
      
      logChannel.send({ embeds: [embed] });
    }
  }
};
