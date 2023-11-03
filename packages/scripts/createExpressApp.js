
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

const createStructure = async function (template, viewEngine, projectName) {

  async function fromBase(projectName) {

    const projectPath = path.join(process.cwd(), projectName)

    if (fs.existsSync(projectPath) && fs.readdirSync(projectPath).length !== 0) {
      throw new Error(`Target directory "${projectName}" isn't empty.`)
    }

    // copy directory from templates/base to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "base"), projectPath, { recursive: true })

  }

  async function fromTemplate(projectName, template) {

    const projectPath = path.join(process.cwd(), projectName)


    // merge directory from templates/language to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "language", template), projectPath, { recursive: true })
    await Promise.all([generatePackageJson(projectPath, projectName), generateDotGitignore(projectPath, projectName)])
  }

  async function fromViewEngine(projectName, viewEngine) {

    const projectPath = path.join(process.cwd(), projectName)

    // merge directory from templates/view-engine to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "view-engine", viewEngine), projectPath, { recursive: true })
  }

  const templateStrategry = {
    // JavaScript
    "javascript": (projectName) => {
      return fromTemplate(projectName, "javascript")
    },
    // TypeScript
    "typescript": () => {
      throw new Error(`The feature "TypeScript" hasn't done yet. Sorry about that!`)
    },
    // JavaScript with MVC
    "javascript-mvc": (projectName) => {
      return fromTemplate(projectName, "javascript-mvc")
    },
    // TypeScript with MVC
    "typescript-mvc": () => {
      throw new Error(`The feature "TypeScript + MVC" hasn't done yet. Sorry about that!`)
    }
  }

  const viewEngineStrategry = {
    "no-view": () => {
      return fromViewEngine(projectName, "no-view")
    },
    "ejs": () => {
      return fromViewEngine(projectName, "ejs")
    },
    "pug": () => {
      return fromViewEngine(projectName, "pug")
    },
    "hbs": () => {
      return fromViewEngine(projectName, "hbs")
    },
  }

  await fromBase(projectName)
  await templateStrategry[template](projectName)
  await viewEngineStrategry[viewEngine]()

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

    spinner.start()

    // Creating app structure
    await createStructure(template, viewEngine, projectName)
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
