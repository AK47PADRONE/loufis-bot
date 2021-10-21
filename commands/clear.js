module.exports = {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Δεν μπορεις να σβήσεις μηνύματα');
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Δεν μπορω να σβήσω μηνύματα διότι δεν εχω αρκερα permissions ')
        if (!args[0]) return message.channel.send("You must state a number of messages to delete \`!clear number\`")
        const amountToDelete = Number(args[0], 10);

        if (isNaN(amountToDelete)) return message.channel.send("Number stated is not a valid number")
        if (!Number.isInteger(amountToDelete)) return message.channel.send("Number stated must be a whole number");
        if(!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('The number stated must be between 2 and 100');
        const fetched = await message.channel.messages.fetch({
          limit: amountToDelete
        });

        try {
            await message.channel.bulkDelete(fetched)
        } catch (err) {
            console.log(err);
            message.channel.send("I was unable to delete the amount stated make sure they are within 14 days old")
        }
    },
};