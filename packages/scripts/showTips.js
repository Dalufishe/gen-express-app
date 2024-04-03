
import chalk from "chalk"

export default async function showTips(projectName) {
  console.log("For run your project use this instruction below:")
  console.log("")
  console.log(chalk.white("  Start server in development mode."))
  console.log(chalk.yellowBright("    cd") + ` ${projectName}`)
  console.log(chalk.yellowBright("    npm run dev"))
  console.log("")
  console.log(chalk.white("  Start server in production mode."))
  console.log(chalk.yellowBright("    cd") + ` ${projectName}`)
  console.log(chalk.yellowBright("    npm run start"))
  console.log("")
  console.log(chalk.white("  For VSCode users:"))
  console.log(chalk.yellowBright("    cd") + ` ${projectName}`)
  console.log(chalk.yellowBright("    code ."))
  console.log(chalk.yellowBright("    npm run dev"))
}
