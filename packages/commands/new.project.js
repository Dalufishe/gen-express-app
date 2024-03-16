import {generateProject, generateProjectFull} from '../scripts/generateProject.js';

export function newProject(program) {
  program
    .command("new")
    .description("generate project with name")
    .argument("<project-name>")
    .action(async (projectName) => {
      await generateProject(program, projectName);
    })
}

export function newProjectInteractive(program) {
  program
    .command("interactive")
    .description("generate project in interactive mode")
    .action(async () => {
      await generateProjectFull(program);
    })
}