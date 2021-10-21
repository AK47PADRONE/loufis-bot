const Discord = require('discord.js')
const { color } = require('../config.json');

module.exports = {
    name: 'avatar',
    description: 'malakies!',
    execute(message, args, client) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const embed = new Discord.MessageEmbed()
        .setImage(mentionedMember.user.displayAvatarURL({size:1024,dynamic:true}))
        .setColor(color)
        .setTitle(`${mentionedMember.user.tag}'s Avatar'`)

        message.channel.send(embed)
    },
};