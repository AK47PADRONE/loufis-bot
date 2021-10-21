const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'kicks members',
    async execute(message, args, client) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command")
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No Reason given";

        // !kick @user dm ads
        if (!args[0]) return message.channel.send("You need to state a user to kick. \`!kick @user reason\`");
        if (!mentionedMember) return message.channel.send("The member mentioned is not in the server");

        message.channel.send(`Succesfully kicked ${mentionedMember}`)

        try {
            await mentionedMember.kick(reason)
        } catch (err) {
            console.log(err);
            return message.channel.send("Δεν κατάφερα να κανω kick αυτόν τον χρήστη")
        }
    },
};