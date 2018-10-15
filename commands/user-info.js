module.exports = {
    name: 'user-info',
    description: 'Full Info about the User',
    execute(message, args) {
        message.channel.send(`
**Your Username:** ${message.author.username}
**Your ID:** ${message.author.id}
**Account Created At:** ${message.author.createdAt}
**Your Nickname:** ${message.GuildMember.nickname}
**Your Avatar:** ${message.author.displayAvatarURL}
**Joined the Server:** ${message.GuildMember.joinedAt}
**Time Joined:** ${message.GuildMember.joinedTimestamp}
**Highest Role:** ${message.GuildMember.highestRole}
**Role Colour:** ${message.GuildMember.displayColor}

        **Courtesy of Maeve Bot**`);
    },
};