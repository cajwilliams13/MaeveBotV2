module.exports = {
    name: "nekos",
    description: "use for an image of a cute neko!",
    execute(message) {
        if(message.mentions.members.size) {
         let member = message.mentions.members.first()
        const rando_imgs = [
            'https://cdn.nekos.life/neko/neko_007.jpg',
            './images/ouchy.png',
            './images/caj_likes_neko.png', 
            ]
            message.channel.send(`Have a neko ${member}. Nyaa!`, {
            file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
        }
        if(message.mentions.members.size == 0) {
            let member = message.author
            const rando_imgs = [
                'https://cdn.nekos.life/neko/neko_007.jpg', 
                './images/ouchy.png',
                './images/caj_likes_neko.png',
                ]
                message.channel.send(`Have a neko ${member}. Nyaa!`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
                }); 
        }
    }
};