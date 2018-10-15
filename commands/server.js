module.exports = {
    name: 'server',
    description: 'Server Info',
    execute(message, args) {
        message.channel.send(`
**Server Name:** ${message.guild.name}
**Server ID** ${message.guild.id}
**Total Members:** ${message.guild.memberCount}
**Created At:** ${message.guild.createdAt}
**Region:** ${message.guild.region}
**Server Image** ${message.guild.iconURL}

        **Courtesy of Maeve Bot**`);
    },
};