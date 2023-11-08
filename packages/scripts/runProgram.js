import _ from "lodash"
import { program, Option } from "commander"
import { VERSION } from "../constant/@.js"
import { PACKAGE_MANAGERS } from "../constant/packageManagers.js"
import { TEMPLATES } from "../constant/templates.js"
import { VIEW_ENGINES } from "../constant/viewEngines.js"
import { exec } from "child_process"
import fsp from "fs/promises"
import path from "path"
import { dev } from "../commands/dev.js"
import { start } from "repl"

export default function runProgram(cb) {

  program
    .name("gen-express-app")
    .usage("[project-name]")
    .version(VERSION, "-V, --version", "output the current version")
    // project name
    .argument("[project-name]", "name for your express app")
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
    .action(() => { cb(program) })


  dev(program)
  start(program)

  program.parse(process.argv)

}
