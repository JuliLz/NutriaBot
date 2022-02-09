//----------------------MODELOS MONGODB------------------
const userModel = require("../../models/userSchema");

module.exports = async (client, discord, member, message) => {

  //--------------REGISTRO DE USUARIO MONGODB----------------

  try {
    let user = await userModel.create({
      userID: message.author.id,
      userName: message.author.username,
      serverID: message.guild.id,
    });
    user.save();
  } catch (error) {
    console.log(error);
  }

  // ROL
  const guild = member.guild;
  const rol = guild.roles.cache.find((role) => role.name === "User");
  member.roles.add(rol);
  // ROL
  require("dotenv").config();

  const prefix = process.env.PREFIX;
  const channel = member.guild.channels.cache.find(
    (channel) => channel.id === "933538216219390023"
  );

  const reglas = member.guild.channels.cache.find(
    (channel) => channel.id === "933230436858081320"
  );

  const general = member.guild.channels.cache.find(
    (channel) => channel.id === "928294071355703300"
  );


  const embedbienvenida = new discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`Bienvenido/a **${member.user.username}**`)
    .setDescription(`- Acordate de pasar por ${reglas}\n\n- El canal de charlas es ${general}`)
    .setThumbnail("https://c.tenor.com/iAsvBAwn5AUAAAAd/cat.gif");

  channel.send({
    embeds: [embedbienvenida]
  });
};