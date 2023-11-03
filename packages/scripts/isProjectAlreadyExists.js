
import path from "path"
import fs from "fs"

export default function (projectName, cb = () => { }) {
  const PROJECT_PATH = path.join(process.cwd(), projectName)
  if (fs.existsSync(PROJECT_PATH) && fs.readdirSync(PROJECT_PATH).length !== 0) {
    cb()
    return true
  } else {
    return false
  }
}
