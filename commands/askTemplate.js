import inquirer from "inquirer"
import _ from "lodash"
import { TEMPLATES } from "../constant/templates.js"

export default async function askTemplate() {

  const iq = await inquirer.prompt({
    name: "template",
    type: "list",
    message: "Select a template: ",
    choices() {
      return _.map(TEMPLATES, (v, k) => k)
    },
    default: Object.keys(TEMPLATES)[0]
  })
  return TEMPLATES[iq.template]
}
