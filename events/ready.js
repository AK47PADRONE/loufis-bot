const Discord = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} has logged into Discord`)
        client.user.setPresence({
            activity: {
                name: 'Loutfis',
                type: "WATCHING"
            },
            status: 'dnd'
        })
            .catch(console.error);
    }
}