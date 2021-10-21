const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Replies with Pong!',
    async execute(message, args, client) {
        //Permission Checking:
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban members. ");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My Role does not have the ban permission")

        //Variables:
        let reason = args.slice(1).join(" ");
        const mentionedMember = message.mentions.members.first();

        //Input Checking
        if (!reason) reason = 'No Reason Given';
        if (!args[0]) return message.channel.send('Πρέπει να επιλέξεις κάποιον να κάνεις ban. `\!ban @user reason\`');
        if (!mentionedMember) return message.channel.send('The member mentioned is not in the server');


        await mentionedMember.ban({
            reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned. " + mentionedMember.user.tag));

    }
}