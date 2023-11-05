
import fsp from "fs/promises"
import path from "path"
import { createSpinner } from "nanospinner"
import { dirname } from "dirname-filename-esm"
import exec from "../utils/exec.js"

const TEMPLATES_PATH = path.join(dirname(import.meta), "../", "templates")

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
    await Promise.all([generateDotGitignore(projectPath, projectName)])
  }

  async function fromViewEngine() {

    // merge directory from templates/view-engine to express-app
    await fsp.cp(path.join(TEMPLATES_PATH, "view-engine", viewEngine), projectPath, { recursive: true })

    // delete js, ts file
    if (template === "javascript" || template === "javascript-mvc") {
      await fsp.unlink(path.join(projectPath, "src", "app.ts"))
    } else {
      await fsp.unlink(path.join(projectPath, "src", "app.js"))
    }

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
