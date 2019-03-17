module.exports = {
	name: 'prune',
	description: 'Prune up to 100 messages from within the last 2 weeks.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
		if (message.author.hasPermission('MANAGE_MESSAGES')) {
			if (isNaN(amount)) {
				return message.reply('that doesn\'t seem to be a valid number.');
			}
			else if (amount <= 1 || amount >= 100) {
				return message.reply('you need to input a number between 1 and 100.');
			}
		}
		else {
			message.channel.send("You do not have the required permissions to prume messages.")
		} 
			message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	},
};