module.exports = {
    name: 'changelog',
    description: 'changelog of the bots latest update.',
    aliases: 'update, changes, botupdate',
    execute(message) {
        message.channel.send(`
**Maeve Bot changelog**

**Last update:** 1/12/2018
**Version:** 1.0
**Changes:** Added #lewds command, Fixed bugs with #maeve and #nekos, Added message when user left/joined the server, Added content for all image comands.
**Upcoming features:**Moderation commands, VC commands, More content, Better layout for some commands, More user interaction, Patreon
**Useful commands:** #help, #server, #user

        **Courtesy of Maeve Bot**
        `);
    },
};