const fs = require('fs');
module.exports = {
    name: "prefix",
    aliases: "prefixes, setprefix, prefixset",
    description:"blank",
    execute(message, args)  {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You do not have the required permissions to change the prefix!")

        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json"))

        prefixes[message.guild.id] = {
            prefixes: args[0]
        };

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });
    }
}