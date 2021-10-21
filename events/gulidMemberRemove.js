const Discord = require('discord.js');
const { welcomechannel } = require('../config.json');

module.exports = {
    name: 'guildMemberRemove',
    async execute(member) {
        const channel = member.guild.channels.cache.get(welcomechannel)
        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`Ο/Η <@${member.user.id}> έφυγε απο το ${member.guild.name}`)
            .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp(Date.now())
            .addFields({
                name: `ID:`,
                value: `${member.user.id}`
            }, {
                name: `Account Created On:`,
                value: `${member.user.createdAt.toLocaleString()}`
            }, {
                name: `Joined Server On:`,
                value: `${member.joinedAt.toLocaleString()}`
            })

        channel.send(embed)
    }
}