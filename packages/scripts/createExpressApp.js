
import fsp from "fs/promises"
import fs from "fs"
import path from "path"
import { __dirname } from "../utils/__dirname.js"
import { createSpinner } from "nanospinner"
import exec from "../utils/exec.js"

const TEMPLATES_PATH = path.join(__dirname(import.meta.url), "../", "templates")

const generatePackageJson = (projectPath, projectName) => {
  return fsp.writeFile(path.join(projectPath, "package.json"), JSON.stringify({
    "name": projectName,
    "version": "0.0.0",
    "private": true,
    "type": "module",
    "scripts": {
      "dev": "set NODE_ENV=development&&nodemon ./.express/www.js",
      "start": "set NODE_ENV=production&&node ./.express/www.js"
    },
    "dependencies": {
      "cookie-parser": "~1.4.4",
      "debug": "~2.6.9",
      "dotenv": "^16.3.1",
      "express": "~4.16.1",
      "http-errors": "~1.6.3",
      "morgan": "~1.9.1",
      "pug": "2.0.0-beta11",
      "ejs": "~2.6.1",
      "hbs": "~4.0.4",
    },
    "devDependencies": {
      "nodemon": "^3.0.1"
    }
  }
    , null, 4), "utf-8")
}

const generateDotGitignore = (projectPath) => {
  return fsp.writeFile(path.join(projectPath, ".gitignore"), `
  .env
  node_modules
  `, "utf-8")
}

const createStructure = async function (template, viewEngine, projectName, projectPath) {

  async function fromBase() {

    // copy directory from templates/base to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "base"), projectPath, { recursive: true })

  }

  async function fromTemplate() {

    // merge directory from templates/language to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "language", template), projectPath, { recursive: true })
    await Promise.all([generatePackageJson(projectPath, projectName), generateDotGitignore(projectPath, projectName)])
  }

  async function fromViewEngine() {

    // merge directory from templates/view-engine to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "view-engine", viewEngine), projectPath, { recursive: true })
  }

  await fromBase()
  await fromTemplate()
  await fromViewEngine()

}

const installDependency = {
  "npm": (projectName) => {
    return exec(`cd ${projectName}&&npm i&&cd ${process.cwd()}`)
  },
  "yarn": (projectName) => {
    return exec(`cd ${projectName}&&yarn install&&cd ${process.cwd()}`)
  },
  "pnpm": (projectName) => {
    return exec(`cd ${projectName}&&pnpm i&&cd ${process.cwd()}`)
  },
}

export async function createExpressApp(projectName, template, viewEngine, packageManager) {
  const spinner = createSpinner("Creating project...")

  try {

    const PROJECT_PATH = path.join(process.cwd(), projectName)

    spinner.start()

    // Creating app structure
    await createStructure(template, viewEngine, projectName, PROJECT_PATH)
    // downloading dependency
    await installDependency[packageManager](projectName)

    spinner.success({ text: "Done." })
    console.log("")
  } catch (err) {

    spinner.error({ text: err })
    console.log("")
    throw new Error(err)
  }

}
