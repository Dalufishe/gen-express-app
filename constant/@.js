
import fs from "fs"
import path from "path"
import { __dirname } from "../utils/__dirname.js"

export const APP = "GEN-EXPRESS-APP"
export const VERSION = getVersion()
export const LICENSE = "MIT"

function getVersion() {
  return JSON.parse(fs.readFileSync(path.join(__dirname(import.meta.url), "../", "package.json"), "utf-8")).version
}
