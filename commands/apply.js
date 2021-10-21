const { MessageEmbed } = require('discord.js');
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
const { color } = require('../config.json');

module.exports = {
    name: 'apply',
    description: 'Application System',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setColor(color)
            .setDescription('**Για αίτηση Omerta Voodoo πατήστε στην επιλογή 🔪 και για αίτηση Moderator πατήστε στην επιλογή 🔧**')
            .setAuthor(message.guild.name, message.guild.iconURL())


        const moderator = new MessageMenuOption()
            .setLabel('Moderator')
            .setEmoji('🔧')
            .setDescription('Moderator Application')
            .setValue('moderator')

        const omerta = new MessageMenuOption()
            .setLabel('Omerta')
            .setEmoji('🔪')
            .setDescription('Omerta Application')
            .setValue('omerta')

        const Menu = new MessageMenu()
            .setID('menu1')
            .setPlaceholder('Δίαλεξε αίτηση')
            .addOption(moderator)
            .addOption(omerta)

        const row = new MessageActionRow()
            .addComponent(Menu)

        await message.channel.send(embed, { components: [row] })
    },
};