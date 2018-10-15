module.exports = {
    name: 'user',
    description: 'Info about the User',
    guildOnly = true,
    execute(message, args) {

        message.channel.send(`
**Your Username:** ${message.author.username}
**Your Nickname:** ${message.member.nickname}
**Your ID:** ${message.author.id}

        **Courtesy of Maeve Bot**`);
//causes an error with Nickname
    },
};