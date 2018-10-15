module.exports = {
    name: 'args',
    description: 'Arguments info',
    args: true,
    execute(message, args) {
        if (args[0] === 'neko') {
            return message.channel.send('Nyaa!');
        }
        if (args[0] === 'hyper') {
            return message.channel.send('<@237135949010567169> is one tanky boi.')
        }
        if (args[0] === 'tobby') {
            return message.channel.send('<@104438871852335104> is the Infinity Esports mascot!')
        }
        if (args[0 === 'KKCaila']) {
            return message.channel.send("KKCaila or KKSailor?")
        }
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};