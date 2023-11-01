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

let projectName = null
let template = null
let packageManager = null

runProgram(async (program) => {

  await welcome()

  projectName = program.args[0] || await askProjectName()
  template = program.opts()["template"] || await askTemplate()
  packageManager = program.opts()["package"] || await askPackageManager()

  try {
    await createExpressApp(projectName, template, packageManager)
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
      console.log("")
      r()
    })
  })
}

