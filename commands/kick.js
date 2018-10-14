module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
    guildOnly: true,
    execute(message) {
        if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
        }
        if (message.content.startsWith("kick")) {
            // Easy way to get member object though mentions.
            var member= message.mentions.members.first();
            // Kick
            member.kick().then((member) => {
                // Successmessage
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
            }).catch(() => {
                 // Failmessage
                message.channel.send("Access Denied");
            });
        }
    }
};
