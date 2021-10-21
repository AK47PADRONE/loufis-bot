module.exports = {
    name: 'clickMenu',
    async execute(menu) {
        menu.clicker.fetch()
        if (menu.values[0] == 'gtarp') {
            const gta = menu.guild.roles.cache.get('898239782356938773')
            menu.clicker.member.roles.add(gta)
        }
        if (menu.values[0] == 'fortnite') {
            const fortnite = menu.guild.roles.cache.get('898239597723648030')
            menu.clicker.member.roles.add(fortnite)
        }
        if (menu.values[0] == 'cs') {
            const cs = menu.guild.roles.cache.get('900757809774358618')
            menu.clicker.member.roles.add(cs)
        }
        if (menu.values[0] == 'lol') {
            const lol = menu.guild.roles.cache.get('898239836501188649')
            menu.clicker.member.roles.add(lol)
        }
        if (menu.values[0] == 'thleoptikos') {
            const thleoptikos = menu.guild.roles.cache.get('900757360178515978')
            menu.clicker.member.roles.add(thleoptikos)
        }
        if (menu.values[0] == 'ath') {
            const ath = menu.guild.roles.cache.get('900768122867445772')
            menu.clicker.member.roles.add(ath)
        }
        if(menu.values[0] == 'skg') {
            const skg = menu.guild.roles.cache.get('900767894365933578')
            menu.clicker.member.roles.add(skg)
        }
        if (menu.values[0] == 'antrikos') {
            const antrikos = menu.guild.roles.cache.get('900757621311701013')
            menu.clicker.member.roles.add(antrikos)
        }
            menu.reply.defer()
    },
}