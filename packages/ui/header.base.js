import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";
import { APP, VERSION } from "../constant/@.js";

export default async function header() {
  // CREATE-EXPRESS-APP
  await new Promise((r) => {
    figlet(APP, async (err, data) => {
      console.log(gradient.morning.multiline(data));
      console.log(`${chalk.yellow("-")} Version: ${VERSION}`);
      r();
    });
  });
}
