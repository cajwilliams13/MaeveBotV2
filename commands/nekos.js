module.exports = {
    name: "nekos",
    description: "use for an image of a cute neko!",
    execute(message) {
        if(message.mentions.members.size) {
         let member = message.mentions.members.first()
        const rando_imgs = [
            'https://cdn.nekos.life/neko/neko_007.jpg',
            './images/Nekos/ouchy.png',
            './images/Nekos/caj_likes_neko.png',
            'https://cdn.nekos.life/neko/neko249.jpg',
            'https://cdn.nekos.life/neko/neko_117.png',
            'https://cdn.nekos.life/neko/neko183.jpg',
            'https://cdn.nekos.life/neko/neko_183.jpg',
            'https://cdn.nekos.life/neko/neko119.png',
            'https://cdn.nekos.life/neko/neko370.jpeg',
            'https://cdn.nekos.life/neko/neko187.jpg',
            'https://cdn.nekos.life/neko/neko_408.jpg',
            'https://cdn.nekos.life/neko/neko342.jpeg',
            'https://cdn.nekos.life/neko/neko253.jpg',
            'https://cdn.nekos.life/neko/neko330.jpeg',
            'https://cdn.nekos.life/neko/neko_010.png',
            'https://cdn.nekos.life/neko/neko009.png',
            'https://cdn.nekos.life/neko/neko_393.png',
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
                'https://cdn.nekos.life/neko/neko249.jpg',
                'https://cdn.nekos.life/neko/neko_117.png',
                'https://cdn.nekos.life/neko/neko183.jpg',
                'https://cdn.nekos.life/neko/neko_183.jpg',
                'https://cdn.nekos.life/neko/neko119.png',
                'https://cdn.nekos.life/neko/neko370.jpeg',
                'https://cdn.nekos.life/neko/neko187.jpg',
                'https://cdn.nekos.life/neko/neko_408.jpg',
                'https://cdn.nekos.life/neko/neko342.jpeg',
                'https://cdn.nekos.life/neko/neko253.jpg',
                'https://cdn.nekos.life/neko/neko330.jpeg',
                'https://cdn.nekos.life/neko/neko_010.png',
                'https://cdn.nekos.life/neko/neko009.png',
                'https://cdn.nekos.life/neko/neko_393.png',
                ]
                message.channel.send(`Have a neko ${member}. Nyaa!`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
                }); 
        }
    }
};