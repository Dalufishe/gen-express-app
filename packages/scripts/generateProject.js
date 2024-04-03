import chalk from "chalk";
import askProjectName from "./askProjectName.js";
import askTemplate from "./askTemplate.js";
import { createExpressApp } from "./createExpressApp.js";
import showTips from "./showTips.js";
import askPackageManager from "./askPackageManager.js";
import askViewEngine from "./askViewEngine.js";
import isProjectAlreadyExists from "./isProjectAlreadyExists.js";
import isValidProjectName from "./isValidProjectName.js";
import header from '../ui/header.base.js'

let projectName = null;
let template = null;
let viewEngine = null;
let packageManager = null;

export async function generateProject(program, name) {
  while (isValidProjectName(name)) {
    console.log(
      `${chalk.yellow(
        ">"
      )} Project must contains only:\n  - at least 5 characters\n  - lower case type of name\n  - project name may contain '_' and '-' characters.\nPlease re-enter the project name.`
    );
    projectName = await askProjectName();
  }
  await header();

  projectName = name || (await askProjectName());

  while (isProjectAlreadyExists(projectName)) {
    console.log(
      `${chalk.yellow(
        ">"
      )} Target directory "${projectName}" is not empty. Please re-enter the project name.`
    );
    projectName = await askProjectName();
  }
  console.log(`${chalk.green('? Project name: ')} ${chalk.blueBright(projectName)}`);

  template = program.opts()["template"] || (await askTemplate());
  viewEngine = program.opts()["view"] || (await askViewEngine());
  packageManager = program.opts()["package"] || (await askPackageManager());
  try {
    await createExpressApp(projectName, template, viewEngine, packageManager);
    showTips(projectName);
  } catch (err) {
    console.log(`Error on creating app: ${chalk.red(err.message.toString)}`);
  }
}


export async function generateProjectFull(program) {
  await header();

  projectName = await askProjectName();

  while (isValidProjectName(projectName)) {
    console.log(
      `${chalk.yellow(
        ">"
      )} Project must contains only:\n  - at least 5 characters\n  - lower case type of name\n  - project name may contain '_' and '-' characters.\nPlease re-enter the project name.`
    );
    projectName = await askProjectName();
  }

  while (isProjectAlreadyExists(projectName)) {
    console.log(
      `${chalk.yellow(
        ">"
      )} Target directory "${projectName}" is not empty. Please re-enter the project name.`
    );
    projectName = await askProjectName();
  }
  console.log(`${chalk.green('? Project name: ')} ${chalk.blueBright(projectName)}`);

  template = program.opts()["template"] || (await askTemplate());
  viewEngine = program.opts()["view"] || (await askViewEngine());
  packageManager = program.opts()["package"] || (await askPackageManager());
  try {
    await createExpressApp(projectName, template, viewEngine, packageManager);
    showTips(projectName);
  } catch (err) {
    console.log(`Error on creating app: ${chalk.red(err.message.toString)}`);
  }
}