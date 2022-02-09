require("dotenv").config();

const prefix = process.env.PREFIX;
const userModel = require("../../models/userSchema");

module.exports = async (client, discord, message, member) => {
  if (message.author.bot) return;

  //-------------REGISTRAR USUARIO MONGODB---------------

  let userData;

  try {
    userData = await userModel.findOne({
      userID: message.author.id
    });
    if (!userData) {
      let user = await userModel.create({
        userID: message.author.id,
        userName: message.author.username,
        serverID: message.guild.id,
      });
      user.save();
    } else {
      console.log("Usuario ya registrado");
    }
  } catch (error) {
    console.log(error)
  }
  //------------------------------------------------------

  if (message.content.startsWith(prefix)) {

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd_help = args.shift().toLowerCase();

    const command = client.commands.get(cmd_help);
    if (command) command.execute(client, message, args, discord);
    if (!command) return message.channel.send("**Comando inexistente** 😞");
  }

};