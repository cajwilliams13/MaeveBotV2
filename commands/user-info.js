module.exports = {
    name: 'user-info',
    description: 'Full Info about the User',
    guildOnly: true,
    execute(message, args) {
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
    },
};