module.exports = {
    name: 'user-info',
    description: 'Full Info about the User',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {

        message.channel.send(`
**Your Username:** ${message.author.username}
**Your ID:** ${message.author.id}
**Account Created At:** ${message.author.createdAt}
**Your Nickname:** ${message.member.nickname}
**Time Joined:** ${message.member.joinedAt}
**Highest Role:** ${message.member.highestRole}
**Role Colour:** ${message.member.displayHexColor}
**Your Avatar:** ${message.author.displayAvatarURL}

        **Courtesy of Maeve Bot**`);
        }
        const user = message.mentions.users.first();
        if (user) {
            message.channel.send(`
**Your Username:** ${message.user.username}
**Your ID:** ${message.user.id}
**Account Created At:** ${message.user.createdAt}
**Your Nickname:** ${message.member.nickname}
**Time Joined:** ${message.member.joinedAt}
**Highest Role:** ${message.member.highestRole}
**Role Colour:** ${message.member.displayHexColor}
**Your Avatar:** ${message.user.displayAvatarURL}
            `)
        }
    },
};