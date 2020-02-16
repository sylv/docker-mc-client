const mineflayer = require("mineflayer");
const options = require("yargs-parser")(process.argv.slice(2));

if (!options.ip) throw new Error("Missing --ip");
if (!options.username) throw new Error("Missing --username");
if (!options.password) throw new Error("Missing --password");

const [hostname, port = "25565"] = options.ip.split(":");
const bot = mineflayer.createBot({
  host: hostname,
  port,
  username: options.username,
  password: options.password,
  version: options.version || false
});

bot.on("spawn", () => {
  console.log(`Connected`);
  if (options.joinMessage !== "false") {
    bot.chat("I am an AFK bot that loads chunks.");
  }
});

bot.on("kicked", reason => {
  console.error(`Kicked, reason: "${reason}"`);
  process.exit(1);
});

bot.on("end", () => {
  console.error(`Connection ended. Exiting`);
  process.exit(1);
});

bot.on("error", error => {
  console.error(error);
  process.exit(1);
});
