module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
    guildOnly: true,
    execute(message) {
      if (!message.mentions.users.size) {
        return message.channel.send(`You need to tag a user to kick!`);
      }
  
      const member = message.mentions.users.first()
      member.kick('Reason for Audit Logs')  
      .then(() => 
      console.log(`Kicked ${member.displayName}`,
      message.reply(`Successfully Kicked ${member}`)
      ))  
    },
  };