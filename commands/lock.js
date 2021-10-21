const { MessageEmbed, Message } = require('discord.js');
const { memberrole, color } = require('../config.json');

module.exports = {
    name: 'lock',
    description: 'lock channels',
    async execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permissions')
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I require \`MANAGE CHANNELS\` permission to lock')

        const role = message.guild.roles.cache.get(memberrole)
        let lockchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!lockchannel) lockchannel = message.channel

        await lockchannel.updateOverwrite(role, {
            SEND_MESSAGES: false
        }).catch(err => console.log(err));
        const embed = new MessageEmbed()
        .setDescription('**Το κανάλι κλειδώθηκε απο την όμαδα διαχείρησης🔒**')
        .setColor(color)
        .setThumbnail(message.guild.iconURL())

        message.channel.send(embed)
    },
};