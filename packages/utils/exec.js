import { exec } from "child_process"

export default (script) => new Promise(r => exec(script, () => { r() }))
