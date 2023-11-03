import inquirer from "inquirer"

export default async function askProjectName() {

  let projectName = ""

  // No project's name specified
  if (!projectName) {

    while (!projectName.trim()) {
      const iq = await inquirer.prompt({
        name: "projectName",
        type: "input",
        message: "Project Name:",
        default: "express-app"
      })
      projectName = iq.projectName
    }

    return projectName
  }

  // Project's name specified
  return projectName

}
