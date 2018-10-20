module.exports = {
    name: 'user-info',
    description: 'Full Info about the User',
    guildOnly: true,
    aliases: 'user, userinfo',
    execute(message, args) {
        if (!message.mentions.users.size) {

        message.channel.send(`
**Your Username:** ${message.author.username}
**Your ID:** ${message.author.id}
**Account Created At:** ${message.author.createdAt}
**Your Nickname:** ${message.member.nickname}
**Time Joined:** ${message.member.joinedAt}
**Your Avatar:** ${message.author.displayAvatarURL}

        **Courtesy of Maeve Bot**`);
        }
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                    message.channel.send(`
**Users Username:** ${user.username}
**Users ID:** ${user.id}
**Account Created At:** ${user.createdAt}
**Users Nickname:** ${member.nickname}
**Time Joined:** ${member.joinedAt}
**Users Avatar:** ${user.displayAvatarURL}

        **Courtesy of Maeve Bot**`);
            }
        }
        
    },
};