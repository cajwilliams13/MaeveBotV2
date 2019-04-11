module.exports = {
    name: "roles",
    description: "use to create a message with reactions to assign roles",
    aliases: "roleassign, assign",
    execute(message){
        message.channel.send("BIGGAY")
        .then(() => {
            message.react(`:MaeveRaeve:499130281920299009`);
        })
    }

}