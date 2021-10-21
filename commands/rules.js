const { color } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rules',
    description: '!ping',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;

        const embed = new MessageEmbed()
        .setColor(color)
        .setDescription(`**Οί ακόλουθοι κανόνες είναι κανόνες που ο καθένας μας πρέπει να ακολουθήσει για την ομαλή λειτουργία του server \n\n >>> Οι βρισιές επιτρέπονται, θα ήταν καλό όμως να μην χρησιμοποιούνται με σκοπό να βλάψουν κάποιον. Πάντα να υπάρχει ένα όριο. \n\n Ότι spoil στέλνεται θα πρέπει να το βάζετε σε spoiler tag το μήνυμα σας εδώ. \n\n Μην φωνάζετε και μην χρησιμοποιείται voice changer στα voice channels! Το voice changer επιτρέπετε αλλά να χρησιμοποιείται με ένα όριο και όχι συνέχεια. \n\n Το όνομα σας ΔΕΝ πρέπει να έχει CAPS, SPECIAL CHARACTERS, EMOJI ή CUSTOM FONTS!.Παράδειγμα από special characters:  !@#$%*()[]{};",./<>?| \n\n Ο ρατσισμός, η ρητορική μίσους ή οποιουδήποτε τύπου διακριτική γλώσσα δεν θα γίνεται ανεκτή και θα οδηγήσει σε perma ban \n\n Δεν επιτρέπονται τα tags/reply tags/DM σε <@&900384767462227978> <@&900385060438548551> \n\n Εάν παρατηρήσετε κάποιον που προκαλεί προβλήματα ή κάνει τους άλλους άβολους, κάντε tag ή DM οποιοδήποτε <@&900385286268268606> βρίσκεται επί του παρόντος! \n\n Απαγορεύεται η δημοσίευση περιεχομένου NSFW (GIF, video, images, emotes, detailed verbal descriptions of explicit sexual acts και ούτω καθεξής) \n\n Χρησιμοποιήστε το κάθε channel ανάλογα το θέμα του. Μην κρατάτε τα πάντα στο <#900385662778372118> \n\n Δεν επιτρέπεται κανενός είδους advertise (εκτός αν είναι στο <#900385871897964574>) \n\n Μην μιλάτε αρνητικά για άλλους <@&900386088726695966> <@&900386120007827466> \n\n Μην ενθαρρύνετε ή μην βάλετε άλλα μέλη να παραβιάσουν τους κανόνες**`)
        .setFooter(message.guild.name, message.guild.iconURL())

        message.channel.send(embed)
    },
};