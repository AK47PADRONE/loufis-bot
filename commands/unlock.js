const { MessageEmbed } = require('discord.js');
const { memberrole, color } = require('../config.json');

module.exports = {
    name: 'unlock',
    description: 'Unlock Channels',
    async execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permissions')
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I require \`MANAGE CHANNELS\` permission to unlock')

        const role = message.guild.roles.cache.get(memberrole)
        let lockchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!lockchannel) lockchannel = message.channel

        await lockchannel.updateOverwrite(role, {
            SEND_MESSAGES: true
        }).catch(err => console.log(err));
        const embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setColor(color)
        .setDescription('**Το κανάλι ξεκλειδώθηκε απο την ομάδα διαχείρησης🔓**')
        message.channel.send(embed)
    },
};