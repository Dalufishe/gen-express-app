
import fs from "fs"
import path from "path"
import { dirname } from "dirname-filename-esm"

export const APP = "GEN-EXPRESS-APP"
export const VERSION = getVersion()
export const LICENSE = "MIT"

function getVersion() {
  return JSON.parse(fs.readFileSync(path.join(dirname(import.meta), "../", "package.json"), "utf-8")).version
}
