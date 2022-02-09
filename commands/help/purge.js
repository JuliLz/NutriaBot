const discord = require("discord.js");


module.exports = {
    name: "purge",
    aliases: ["del", "borrar", "limpiar"],
    description: "Borra la cantidad de mensajes especificada",

    async execute(client, message, args, discord) {

        //-------------Embeds de errores----------------------
        const embedfalta = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`**[❌]** ERROR`)
            .setDescription(`**Acordate de escribir la cantidad de mensajes que quieras borrar**`);

        const embednan = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`**[❌]** ERROR`)
            .setDescription(`**El valor ingresado no es un número**`);

        const embedmenor = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`**[❌]** ERROR`)
            .setDescription(`**El número ingresado es mayor a 100**`);

        const embedmayor = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`**[❌]** ERROR`)
            .setDescription(`**El número ingresado es menor a 1**`);

        //-----------------------------------------------------

        if (!args[0]) return message.channel.send({
            embeds: [embedfalta]
        });
        if (isNaN(args[0])) return message.channel.send({
            embeds: [embednan]
        });
        if (args[0] > 100) return message.channel.send({
            embeds: [embedmenor]
        });
        if (args[0] < 1) return message.channel.send({
            embeds: [embedmayor]
        });

        await message.channel.messages
            .fetch({
                limit: args[0]
            })
            .then((messages) => {
                message.channel.bulkDelete(messages);
            });

    },

};