import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";
import { APP, LICENSE, VERSION } from "../constant/@.js";

export default async function welcome() {
    // CREATE-EXPRESS-APP
    await new Promise((r) => {
      figlet(APP, async (err, data) => {
        console.log(gradient.morning.multiline(data));
        console.log(`${chalk.yellow("-")} Version: ${VERSION}`);
        console.log(`${chalk.yellow("-")} License: ${LICENSE}`);
        console.log(
          `${chalk.yellow(
            "-"
          )} Github: ${"https://github.com/Dalufishe/gen-express-app"}`
        );
        console.log(
          `${chalk.yellow("NOTE:")} Type ${chalk.greenBright(
            "`eg new <project_name>`"
          )} for creating new project`
        );
        console.log(
          `${chalk.yellow("NOTE:")} Type ${chalk.greenBright(
            "`eg --help`"
          )} for show list of commands`
        );
        console.log("");
        r();
      });
    });
  }