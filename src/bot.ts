import { Client, Message, MessageEmbed } from "discord.js";
import fetch from "node-fetch";

const bot = new Client();

function ready() {
  console.log(`login as ${bot.user!.tag}`);
}

async function rm(msg: Message) {
  if (msg.content === "!ping") {
    msg.reply("!pong");
  }

  if (msg.content === "!aac") {
    const result = await fetch(
      "https://reddit.com/r/animalalbumcovers/random.json",
    );
    const data = await result.json();

    const post = data[0].data.children[0].data;

    msg.reply(
      new MessageEmbed({ title: post.title, image: { url: post.url } }),
    );
  }

  if (msg.content === "!gb") {
    const result = await fetch(
      "https://reddit.com/r/gentlemanboners/random.json",
    );
    const data = await result.json();

    const post = data[0].data.children[0].data;

    msg.reply(
      new MessageEmbed({ title: post.title, image: { url: post.url } }),
    );
  }
}

bot.on("ready", ready);
bot.on("message", rm);

bot.login("ODMzMzQ0Mjg4ODU5MjI2MTU0.YHw-WQ.x32XEkBEqZs5l0r9CpOFlbcJelE");
