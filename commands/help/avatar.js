module.exports = {
    name: "avatar",
    aliases: ["pfp", "perfil", "foto"],
    description: "Muestra tu foto de perfil",
    async execute(client, message, args, discord) {

        //------------------Embed----------------------

        const embedavatar = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Mostrando tu avatar")
            .setImage(message.author.displayAvatarURL({
                format: 'gif'
            }))

        message.channel.send({
            embeds: [embedavatar]
        });
    },
};