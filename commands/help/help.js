module.exports = {
    name: "help",
    aliases: ["help", "ayuda", "comandos"],
    description: "Muestra la lista de comandos del bot",
    async execute(client, message, args, discord) {

        //------------------Embed----------------------

        const embedhelp = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤLISTA DE COMANDOSㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ")
            .addField("ㅤ", "ㅤ")
            .addField("-Avatar 🎃", "Muestra tu foto de perfil", true)
            .addField("-Bobi 🤡", "¿Sos un bobi o no?", true)
            .addField("-Help 📃", "Muestra esta lista", true)
            .addField("-Ping 🏓", "Prueba de delay entre el bot", true)
            .addField("-Purge 🗑", "Borra mensajes", true)
            .addField("-User 🧐", "Muestra la información de tu cuenta", true)
            .addField("ㅤ", "ㅤ")
            .addField("/Saludo :wave:", "Te Saludo", )
            .setFooter("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤDeveloped by JLZㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ");

        message.channel.send({
            embeds: [embedhelp]
        });
    },
};