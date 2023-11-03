import inquirer from "inquirer"
import { PACKAGE_MANAGERS } from "../constant/packageManagers.js"

export default async function askPackageManager() {

  const iq = await inquirer.prompt({
    name: "package_manager",
    type: "list",
    message: "Select a package manager: ",
    choices: [...PACKAGE_MANAGERS],
    default: PACKAGE_MANAGERS[0]
  })

  return iq.package_manager
}
