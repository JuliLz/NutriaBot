module.exports = {
    name: "ping",
    description: "Muestra el tiempo de respuesta entre el mensaje y el bot",
    async execute(client, message, args, discord) {
        message.channel.send(`🏓 **Pong!** - _${client.ws.ping}ms_`);
    },
};