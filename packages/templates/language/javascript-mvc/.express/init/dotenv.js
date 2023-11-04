import path from "path"
import dotenv from "dotenv"
import { dirname } from "dirname-filename-esm"
import expressConfig from "../../express.config.js"

dotenv.config({ path: path.join(dirname(import.meta), "../../", `${expressConfig.env[process.env.NODE_ENV]}`) })
