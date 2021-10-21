const { MessageEmbed } = require('discord.js');
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
const { color } = require('../config.json');

module.exports = {
    name: 'roles',
    description: 'self roles menu',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINSTRATOR")) return message.delete()
        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription('**Game Roles**')

        const gtarp = new MessageMenuOption()
            .setEmoji('🎮')
            .setValue("gtarp")
            .setLabel('Gta Rp')

        const cs = new MessageMenuOption()
            .setEmoji('🎮')
            .setValue('cs')
            .setLabel('Counter Strike Global Offsensive')

        const fortnite = new MessageMenuOption()
            .setEmoji('🎮')
            .setValue('fortnite')
            .setLabel('Fortnite')

        const Lol = new MessageMenuOption()
            .setEmoji('🎮')
            .setValue('lol')
            .setLabel('Leauge of Legends')

        const Menu = new MessageMenu()
            .setID('menu2')
            .setPlaceholder('Game Roles')
            .addOptions(
                fortnite,
                gtarp,
                cs,
                Lol
            )
        const row = new MessageActionRow()
            .addComponent(Menu)

        message.channel.send(embed, { components: [row] })

        const embed1 = new MessageEmbed()
            .setColor(color)
            .setDescription('**Self Roles**')

        const thleoptikos = new MessageMenuOption()
            .setValue('thleoptikos')
            .setEmoji('📺')
            .setLabel('TILEOPTIKOS')

        const antrikos = new MessageMenuOption()
            .setValue('antrikos')
            .setEmoji('💪')
            .setLabel('ANTRIKOS')

        const skg = new MessageMenuOption()
            .setValue('skg')
            .setEmoji('🏰')
            .setLabel('SKG')

        const ath = new MessageMenuOption()
            .setValue('ath')
            .setEmoji('🏛️')
            .setLabel('ATHENS')

        const Menu1 = new MessageMenu()
            .addOptions(thleoptikos, antrikos, skg, ath)
            .setPlaceholder('Self Roles')
            .setID('menu3')

        const row1 = new MessageActionRow()
            .addComponent(Menu1)

        message.channel.send(embed1, { components: row1 })
    },
};