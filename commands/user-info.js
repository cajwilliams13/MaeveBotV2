module.exports = {
    name: 'user-info',
    description: 'Info about the User',
    execute(message, args) {
        message.channel.send(`
**Your Username:** ${message.author.username}
**Your ID:** ${message.author.id}
**Account Created At:** ${message.author.createdAt}
**Your Nickname:** ${message.author.nickname}

        **Courtesy of Maeve Bot**`);
    },
};