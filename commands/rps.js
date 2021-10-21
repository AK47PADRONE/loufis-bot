const Discord = require('discord.js')

module.exports = {
    name: 'rps',
    description: '!ping',
    async execute(message, args, client) {
        let embed = new Discord.MessageEmbed()
            .setColor('#0018ff')
            .setDescription('**React to play ** \n\n ```🗿: For Rock\n📝: For Paper \n✂️: For Sciscors```')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react('🗿')
        await msg.react('📝')
        await msg.react('✂️')

        const filter = (reaction, user) => {
            return ['🗿', '📝', '✂️'].includes(reaction.emoji.name) && user.id == message.author.id;
        }

        const choices = ['🗿', '📝', '✂️']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()

                if ((me === '🗿' && reaction.emoji.name === '✂️') ||
                    (me === '✂️' && reaction.emoji.name === '📝') ||
                    (me === '📝' && reaction.emoji.name === '🗿')) {
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