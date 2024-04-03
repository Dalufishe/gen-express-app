import _ from "lodash"
import { program, Option } from "commander"
import { VERSION } from "../constant/@.js"
import { PACKAGE_MANAGERS } from "../constant/packageManagers.js"
import { TEMPLATES } from "../constant/templates.js"
import { VIEW_ENGINES } from "../constant/viewEngines.js"
import { dev } from "../commands/dev.js"
import { start } from "../commands/start.js"
import { newProject, newProjectInteractive } from "../commands/new.project.js"


export default function runProgram(cb) {

  program
    .name("eg")
    .usage("[command]")
    .version(VERSION, "-V, --version", "output the current version")
    // command type
    .argument("[command]", "name of usage command (new / generate <component_type> )")
    // template
    .addOption(new Option("-t, --template <template-name>", "choose express template")
      .choices([..._.map(TEMPLATES, (v) => v)]))
    // view engine
    .addOption(new Option("-v, --view <view-engine>", "choose view engine")
      .choices([...VIEW_ENGINES]))
    // package manager
    .addOption(new Option("-p, --package <package-name>", "choose package manager")
      .choices([...PACKAGE_MANAGERS]))
    //
    .action(() => {
      cb(program)
    })

  dev(program)
  start(program)
  newProject(program)
  newProjectInteractive(program)

  program.parse(process.argv)

}
