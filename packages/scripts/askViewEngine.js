import inquirer from "inquirer"
import { VIEW_ENGINES } from "../constant/viewEngines.js"

export default async function askViewEngine() {

  const iq = await inquirer.prompt({
    name: "view_engine",
    type: "list",
    message: "Select a view engine: ",
    choices: [...VIEW_ENGINES],
    default: VIEW_ENGINES[0]
  })

  return iq.view_engine
}
