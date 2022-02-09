module.exports = {
    name: "user",
    aliases: ["usuario"],
    description: "Muestra la información del usuario",
    async execute(client, message, args, discord) {
        const user = message.author;
        const member = message.member;


        //------------------Embed----------------------

        const embeduser = new discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor('Nombre de usuario: ' + user.tag)
            .setThumbnail(user.avatarURL())
            .addField('Creación de la cuenta:', user.createdAt.toLocaleDateString(), true)
            .addField('Roles',
                message.member.roles.cache.map(rol => '`' + rol.name + '`').join(', ')
            )

        message.channel.send({
            embeds: [embeduser]
        });
    },
};