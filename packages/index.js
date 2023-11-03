#!/usr/bin/env node

import figlet from "figlet"
import gradient from "gradient-string"
import chalk from "chalk"
import askProjectName from "./commands/askProjectName.js"
import askTemplate from "./commands/askTemplate.js"
import { createExpressApp } from "./scripts/createExpressApp.js"
import showTips from "./scripts/showTips.js"
import askPackageManager from "./commands/askPackageManager.js"
import runProgram from "./commands/runProgram.js"
import { APP, LICENSE, VERSION } from "./constant/@.js"
import askViewEngine from "./commands/askViewEngine.js"
import isProjectAlreadyExists from "./scripts/isProjectAlreadyExists.js"

let projectName = null
let template = null
let viewEngine = null
let packageManager = null

runProgram(async (program) => {

  await welcome()

  projectName = program.args[0] || await askProjectName()

  while (isProjectAlreadyExists(projectName)) {
    console.log(`${chalk.yellow(">")} Target directory "${projectName}" is not empty. Please re-enter the project name.`)
    projectName = await askProjectName()
  }

  template = program.opts()["template"] || await askTemplate()
  viewEngine = program.opts()["view"] || await askViewEngine()
  packageManager = program.opts()["package"] || await askPackageManager()

  try {
    await createExpressApp(projectName, template, viewEngine, packageManager)
    showTips(projectName)
  } catch (err) {
    //
  }

})


async function welcome() {
  // CREATE-EXPRESS-APP
  await new Promise((r) => {
    figlet(APP, async (err, data) => {
      console.log(gradient.morning.multiline(data))
      console.log(`${chalk.yellow("-")} Version: ${VERSION}`)
      console.log(`${chalk.yellow("-")} License: ${LICENSE}`)
      console.log(`${chalk.yellow("-")} Github: ${"https://github.com/Dalufishe/gen-express-app"}`)
      console.log("")
      r()
    })
  })
}

