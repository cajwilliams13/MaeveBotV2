module.exports = {
    name: 'args-info',
    description: 'Arguments info',
    args: true,
    execute(message, args) {
        if (args[0] === 'neko') {
            return message.channel.send('Nyaa!');
        }
        message.channel.send(`First argument: ${args[0]}`);
    },
};