module.exports = {
    name: "nekos",
    description: "use for an image of a cute neko!",
    execute(message) {
        if (message.mentions.users.size) {
        const attachment = new Attachment('https://nekos.life');
        message.channel.send(attachment);
        }
    }
};