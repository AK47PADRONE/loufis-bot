const { logchannel, color } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'clickMenu',
    async execute(menu, button) {
        if (menu.values[0] == 'omerta') {
            await menu.clicker.fetch()
            let questions = {
                firstQuestion: "**Τι ηλικία έχεις ?**",
                secondQuestion: "**Ποσες ωρες 𝗙𝗶𝘃𝗲𝗠 εχεις ?**",
                thirdQuestion: "**Ποσες ωρες μπορεις να εισαι μεσα καθημερινα ?**",
                fourthQuestion: "**Πες μας λίγα λόγια για εσενα **",
                fifthQuestion: "**Εχεις ξαναπαιξει Mafia 𝗥𝗽 , αν ναι τοτε σε ποιον 𝘀𝗲𝗿𝘃𝗲𝗿 και τι Mafia ?**",
            }
            menu.clicker.user.send('**Άμα θές να ακυρώσεις την αίτηση γράψε**``cancel``')
            menu.clicker.user.send(questions.firstQuestion).then(msg => {
                const filter1 = m => m.author.id === menu.clicker.user.id
                msg.channel.awaitMessages(filter1, {
                    time: 5 * 60000,
                    max: 1
                }).then(messages => {
                    let msg1 = messages.first().content
                    if (msg1.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                    menu.clicker.user.send(questions.secondQuestion).then(msg => {
                        const filter1 = m => m.author.id === menu.clicker.user.id
                        msg.channel.awaitMessages(filter1, {
                            time: 5 * 60000,
                            max: 1
                        }).then(messages => {
                            let msg2 = messages.first().content
                            if (msg2.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                            menu.clicker.user.send(questions.thirdQuestion).then(msg => {
                                const filter1 = m => m.author.id === menu.clicker.user.id
                                msg.channel.awaitMessages(filter1, {
                                    time: 5 * 60000,
                                    max: 1
                                }).then(messages => {
                                    let msg3 = messages.first().content
                                    if (msg3.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                    menu.clicker.user.send(questions.fourthQuestion).then(msg => {
                                        const filter1 = m => m.author.id === menu.clicker.user.id
                                        msg.channel.awaitMessages(filter1, {
                                            time: 5 * 60000,
                                            max: 1
                                        }).then(messages => {
                                            let msg4 = messages.first().content
                                            if (msg4.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                            menu.clicker.user.send(questions.fifthQuestion).then(msg => {
                                                const filter1 = m => m.author.id === menu.clicker.user.id
                                                msg.channel.awaitMessages(filter1, {
                                                    time: 5 * 60000,
                                                    max: 1
                                                }).then(messages => {
                                                    let msg5 = messages.first().content
                                                    if (msg5.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                                    menu.clicker.user.send("**H αίτηση σου έχει σταλθεί θα ενημερωθείς σύντομα για το αν έχει γίνει δεκτή**").then(msg => {
                                                        menu.client.channels.cache.get(logchannel).send(
                                                            new Discord.MessageEmbed()
                                                                .setTitle('Νεα αίτηση για τους OMERTA')
                                                                .setDescription(`**Η αίτηση είναι απο τον <@${menu.clicker.user.id}>-${menu.clicker.user.id}**`)
                                                                .setTimestamp()
                                                                .setColor(color)
                                                                .addField(questions.firstQuestion, "Απάντηση: " + msg1)
                                                                .addField(questions.secondQuestion, "Απάντηση: " + msg2)
                                                                .addField(questions.thirdQuestion, "Απάντηση: " + msg3)
                                                                .addField(questions.fourthQuestion, "Απάντηση: " + msg4)
                                                                .addField(questions.fifthQuestion, "Απάντηση: " + msg5)
                                                        )
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            menu.reply.defer()
        } else {
            if (menu.values[0] == 'moderator') {
                menu.clicker.fetch()
                let questions = {
                    firstQuestion: "**Τι ηλικία έχεις ;**",
                    secondQuestion: "**Υπάρχει κάποιος περιορισμός στις ώρες που μπορείς να είσαι online ;**",
                    thirdQuestion: "**Σε ποια περίπτωση ρίχνεις σε κάποιον ban και πότε 𝐭𝐢𝐦𝐞𝐨𝐮𝐭 ; **",
                    fourthQuestion: "**Αν σου ζητηθεί , θα μπορείς να είσαι σε κλήση με τους υπόλοιπους moderator's ;**",
                }
                menu.clicker.user.send('**Άμα θές να ακυρώσεις την αίτηση γράψε**``cancel``')
                menu.clicker.user.send(questions.firstQuestion).then(msg => {
                    const filter1 = m => m.author.id === menu.clicker.user.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg1 = messages.first().content
                        if (msg1.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                        menu.clicker.user.send(questions.secondQuestion).then(msg => {
                            const filter1 = m => m.author.id === menu.clicker.user.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(messages => {
                                let msg2 = messages.first().content
                                if (msg2.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                menu.clicker.user.send(questions.thirdQuestion).then(msg => {
                                    const filter1 = m => m.author.id === menu.clicker.user.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                        let msg3 = messages.first().content
                                        if (msg3.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                        menu.clicker.user.send(questions.fourthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === menu.clicker.user.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                            }).then(messages => {
                                                let msg4 = messages.first().content
                                                if (msg4.toLowerCase() === "cancel") return menu.clicker.user.send("Η αίτηση σου ακυρώθηκε")
                                                 menu.clicker.user.send("**H αίτηση σου έχει σταλθεί θα ενημερωθείς σύντομα για το αν έχει γίνει δεκτή**").then(msg => {
                                                    menu.clicker.user.send("**H αίτηση σου έχει σταλθεί θα ενημερωθείς σύντομα για το αν έχει γίνει δεκτή**").then(msg => {
                                                        menu.client.channels.cache.get(logchannel).send(
                                                            new Discord.MessageEmbed()
                                                                .setTitle('Νέα αίτηση Moderator')
                                                                .setDescription(`Η αίτηση είναι απο τον <@${menu.clicker.user.id}>-${menu.clicker.user.id}`)
                                                                .setTimestamp()
                                                                .setColor(color)
                                                                .addField(questions.firstQuestion, "Απάντηση: " + msg1)
                                                                .addField(questions.secondQuestion, "Απάντηση: " + msg2)
                                                                .addField(questions.thirdQuestion, "Απάντηση: " + msg3)
                                                                .addField(questions.fourthQuestion, "Απάντηση: " + msg4)
                                                        )
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                menu.reply.defer()
            }
        }
    }
}