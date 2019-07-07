const paladins = req('paladins-api');
const fs = require('fs');
const Discord = require('discord.js');
const {token} = require('./config.json');
const botconfig = require('./config.json'); 

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const pal = new paladins('3187', '518641FACB81443090DBAD673C8B38E9	');
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//commands
client.on('message', message => {
	let prefix = botconfig.prefix;

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

	try {
		command.execute(message, args);
    }
    
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
	
});
//paladins commands
client.on('message', message => {
	if (!message.content.startsWith(`~`) || message.author.bot) return;
	var sessionId;
	pal.connect(
  		"PC",
  		(err, res) => {
    		if (!err) {
				  sessionId = res;
				  online = true;
    		}
  		}
	);
	if (message.content = `stats`) {
		pal.getPlayer(sessionId, "PC", "Cajwilliams", (err, res) => {
			console.log(res);
		});
	}
	
})
//Chat bot

// const greeting_channels 
// client.on('guildMemberAdd', member => {
// 	const channel = member.guild.channels.find(ch => ch.name === greeting_channels);
// 	if (!channel) return;
	// channel.send(`Welcome, ${member}`);

// });
	//FIX THIS
// client.on('guildMemberLeave', member => {
// 	const channel = member.guild.channels.find(ch => ch.name === greeting_channels);
// 	if (!channel) return;
// 	channel.send(`Goodbye ${member} :cry:`)
// });
client.login(token);