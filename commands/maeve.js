module.exports = {
    name: 'maeve',
    description: 'Maeve is supreme',
    execute(message, args) {
        if(message.mentions.members.size) {
            let member = message.mentions.members.first()
            const rando_imgs = [
                './images/Maeve/Nyah.png',
                './images/Maeve/Maeve1.gif',
                './images/Maeve/Maeve2.gif',
                './images/Maeve/Maeve3.gif',
                './images/Maeve/Maeve4.gif',
                './images/Maeve/Maeve5.jpg',
                './images/Maeve/Maeve6.jpg',
                './images/Maeve/Maeve7.jpg',
               ]
               message.channel.send(`Here is some Maeve ${member}. <:MaeveRaeve:499130281920299009>`, {
               file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
               },
               message.channel.send('Debugging info: '+JSON.stringify(rando_imgs))
               .then(function (message) {
                message.react("<:MaeveRaeve:499130281920299009>`,")
                message.react("<:hug:478531781751209984>")
            })
               );
           }
        if(message.mentions.members.size == 0) {
               let member = message.author
            const rando_imgs = [
                './images/Maeve/Nyah.png',
                './images/Maeve/Maeve1.gif',
                './images/Maeve/Maeve2.gif',
                './images/Maeve/Maeve3.gif',
                './images/Maeve/Maeve4.gif',
                './images/Maeve/Maeve5.jpg',
                './images/Maeve/Maeve6.jpg',
                './images/Maeve/Maeve7.jpg',
                   ]
                   message.channel.send(`Here is some Maeve ${member}. <:MaeveRaeve:499130281920299009>`, {
                    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
                   }) .then(function (message) {
                        message.react(":MaeveRaeve:499130281920299009"); 
                    }).catch(function(e) {
                        console.log(e), {
                        //Something
                       }
                        });
                    } 
       }
};