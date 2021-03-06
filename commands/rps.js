const Discord = require('discord.js')

module.exports = {
    name: 'rps',
    description: '!ping',
    async execute(message, args, client) {
        let embed = new Discord.MessageEmbed()
            .setColor('#0018ff')
            .setDescription('**React to play ** \n\n ```šæ: For Rock\nš: For Paper \nāļø: For Sciscors```')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react('šæ')
        await msg.react('š')
        await msg.react('āļø')

        const filter = (reaction, user) => {
            return ['šæ', 'š', 'āļø'].includes(reaction.emoji.name) && user.id == message.author.id;
        }

        const choices = ['šæ', 'š', 'āļø']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()

                if ((me === 'šæ' && reaction.emoji.name === 'āļø') ||
                    (me === 'āļø' && reaction.emoji.name === 'š') ||
                    (me === 'š' && reaction.emoji.name === 'šæ')) {
                    let result = new Discord.MessageEmbed()
                        .setTitle("Result:")
                        .setColor('#0018ff')
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setDescription(`**${message.author} You Lost!**`)
                        .addField("Your Choice:", `${reaction.emoji.name}`)
                        .addField("My Choice:", `${me}`)
                    return msg.edit(result)
                } else if (me === reaction.emoji.name) {
                    let result1 = new Discord.MessageEmbed()
                        .setTitle("Result:")
                        .setColor('#0018ff')
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setDescription(`**${message.author} Its a tie, wanna try again?**`)
                        .addField("Your Choice:", `${reaction.emoji.name}`)
                        .addField("My Choice:", `${me}`)
                    return msg.edit(result1)
                } else {
                    let result2 = new Discord.MessageEmbed()
                        .setTitle("Result:")
                        .setColor('#0018ff')
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setDescription(`**${message.author} You Won!**`)
                        .addField("Your Choice:", `${reaction.emoji.name}`)
                        .addField("My Choice:", `${me}`)
                    return msg.edit(result2);
                }
            })
    },
};