import inquirer from "inquirer"

export default async function askPackageManager() {

  const iq = await inquirer.prompt({
    name: "package_manager",
    type: "list",
    message: "Select a package manager: ",
    choices: [
      "npm",
      "yarn",
      "pnpm"
    ],
    default: "npm"
  })
  return iq.package_manager
}
