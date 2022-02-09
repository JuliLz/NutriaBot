module.exports = {
    name: "bobi",
    aliases: ["bobi"],
    description: "¿Sos bobi o no?",
    async execute(client, message, args, discord) {

        //------------------Embed----------------------

        const embedbobi = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("ALERTA DE BOBI")
            .setDescription("**" + message.author.username + "**" + ", Se acaba de confirmar que sos terrible bobi")
            .setImage("https://ih1.redbubble.net/image.2523533705.0401/pp,504x498-pad,600x600,f8f8f8.jpg")
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setFooter("Mostrando una foto de tu cara ahora mismo");

        message.channel.send({
            embeds: [embedbobi]
        });
    },
};