import path from "path"
import dotenv from "dotenv"
import { __dirname } from "../__dirname.js"
import expressConfig from "../../express.config.js"

dotenv.config({ path: path.join(__dirname(import.meta.url), "../../", `${expressConfig.env[process.env.NODE_ENV]}`) })
