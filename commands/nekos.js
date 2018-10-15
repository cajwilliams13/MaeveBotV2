module.exports = {
    name: "nekos",
    description: "use for an image of a cute neko!",
    execute(message) {
        if(message.mentions.members.size == 1) {
         let member = message.mentions.members.first()
        const rando_imgs = [
            'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
            'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
            'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
            ]
            message.channel.send(`${message.author} Have a neko ${member}. Nyaa!`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
        }
    }
};