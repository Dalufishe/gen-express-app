
import chalk from "chalk"

export default async function showTips(projectName) {
  console.log(chalk.yellowBright("  npm run dev"))
  console.log("    Start the development server.")
  console.log("")
  console.log(chalk.yellowBright("  npm run start"))
  console.log("    Start the production server.")
  console.log("")
  console.log("  We suggest that you begin by typing:")
  console.log("")
  console.log(chalk.yellowBright("    cd") + ` ${projectName}`)
  console.log(chalk.yellowBright("    npm run dev"))
  console.log("")
  console.log("  If you're using VSCode, then run:")
  console.log("")
  console.log(chalk.yellowBright("    cd") + ` ${projectName}`)
  console.log(chalk.yellowBright("    code ."))
  console.log(chalk.yellowBright("    npm run dev"))
}
