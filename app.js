//----------------------REQUERIMIENTOS-------------------------
const discord = require("discord.js");
require("dotenv").config();

const prefix = process.env.PREFIX;

const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//-----------------------CONEXIÓN A MONGODB------------------

const mongoose = require("mongoose");
const mg = process.env.DB;

mongoose.connect(mg, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Evento cargado: Conexión a MongoDB")
  }).catch((e) => {
    console.log(e)
  });

//-----------------------ON READY----------------------------

client.once("ready", async (bot) => {
  client.user.setStatus("online")
  client.user.setActivity("-help", {
    type: "WATCHING"
  })
  client.slash.set(SCommand[0].name, SCommand[0])

  await client.application.commands.set(SCommand)
});

//--------------------------COMMAND HANDLER-------------------------------

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});

//--------------------------ON INTERACTION--------------------------------

client.on("interactionCreate", async (Interaction) => {
  if (Interaction.isCommand()) {
    await Interaction.deferReply({
      ephemeral: false
    }).catch((obj) => {
      console.log(obj);
    });
    console.log(client.slash.get(Interaction.commandName));

    const command = client.slash.get(Interaction.commandName);

    if (!command)
      return Interaction.followUp({
        content: "Ese comando no existe"
      });

    const args = [];

    try {
      command.run(client, Interaction, args)
    } catch (error) {
      console.log(error)
    }
  }
});

//-----------------------SLASHCOMMAND----------------------------

let SCommand = [{
  name: "saludo",
  description: "Te saludo",
  run: async (client, Interaction, args) => {
    await Interaction.followUp({
      content: `Hola! ¿Cómo estás? 🦦`
    });
  },
}, ]

client.slash = new discord.Collection();

//----------------------------LOGIN------------------

client.login(process.env.TOKEN);