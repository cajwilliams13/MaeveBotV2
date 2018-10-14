module.exports = {
    name: 'user-info',
    description: 'Info about the User',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\n Account Created At: ${message.author.createdAt}`);
    },
};