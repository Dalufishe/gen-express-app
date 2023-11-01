
import { program, Option } from "commander"
import { VERSION } from "../constant/@.js"
import { PACKAGE_MANAGERS } from "../constant/packageManagers.js"
import _ from "lodash"
import { TEMPLATES } from "../constant/templates.js"

export default function runProgram(cb) {
  program
    // version
    .version(VERSION, "-v, --version", "output the current version")
    // project name
    .argument("[project-name]", "name for your express app")
    // template
    .addOption(new Option("-t, --template <template-name>", "choose your express template")
      .choices([..._.map(TEMPLATES, (v) => v)]))
    // package manager
    .addOption(new Option("-p, --package <package-name>", "choose your package manager")
      .choices([...PACKAGE_MANAGERS]))
    //
    .action(() => { cb(program) })
    .parse(process.argv)
}
