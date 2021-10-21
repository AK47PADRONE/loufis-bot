const { MessageEmbed } = require('discord.js');
const { memberrole, welcomechannel } = require('../config.json');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const role = member.guild.roles.cache.get(memberrole)
        member.roles.add(role)

        const channel = member.guild.channels.cache.get(welcomechannel)
        const embed = new MessageEmbed()
            .setColor('#0020ff')
            .setDescription(`Ο/Η <@${member.user.id}> έγινε μέλος του ${member.guild.name}`)
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .setTimestamp(Date.now())
            .addFields(
                { name: `Account Created On:`, value: `${member.user.createdAt.toLocaleString()}` }
            )

        channel.send(embed)
    }

}