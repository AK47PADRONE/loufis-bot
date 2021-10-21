const { client, Message, Util } = require('discord.js')

module.exports = {
    name: 'steal',
    description: 'malakies!',
    async execute(message, args, client) {
        if (!args.length) return message.reply('Please specify an emoji');

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id +
                    extension}`;
                message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then((emoji) => message.channel.send(`Stole: ${emoji}`))
            }
        }

    },
};