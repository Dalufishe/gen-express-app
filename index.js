#!/usr/bin/env node

import figlet from "figlet"
import gradient from "gradient-string"
import chalk from "chalk"
import askProjectName from "./commands/askProjectName.js"
import askTemplate from "./commands/askTemplate.js"
import { createExpressApp } from "./scripts/createExpressApp.js"
import showTips from "./scripts/showTips.js"
import askPackageManager from "./commands/askPackageManager.js"

const APP = "GEN-EXPRESS-APP"
const VERSION = "0.0.11"
const LICENSE = "MIT"

let projectName = null
let template = null
let packageManager = null

await welcome()

projectName = await askProjectName()
template = await askTemplate()
packageManager = await askPackageManager()

try {
  await createExpressApp(projectName, template, packageManager)
  showTips(projectName)
} catch (err) {
  //
}


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

