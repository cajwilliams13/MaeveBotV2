module.exports = {
    name: 'vcnyah',
    aliases: 'nyahvc, vcnya, nyavc, nyah-vc, nya-vc, vc-nya, vc-nyah',
    description: 'Nyaaaa!',
    execute(message, args) {
                message.member.voiceChannel.join()
                .then(connection => {
                    console.log('Connected!')
                    message.reply('Connected!')
                    const dispatcher = connection.playFile('./Music/test.mp3')
                })
            },

};