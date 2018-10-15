module.exports = {
    name: 'user',
    description: 'Info about the User',
    execute(message, args) {
        message.channel.send(`
**Your Username:** ${message.author.username}
**Your Nickname:** ${message.GuildMember.nickname}
**Your ID:** ${message.author.id}

        **Courtesy of Maeve Bot**`);
    },
};