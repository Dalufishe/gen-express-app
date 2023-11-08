
export function dev(program) {
  program
    .command("dev")
    .description("starting development server")
    .argument("<bin-path>")
    .option("--typescript", "use typescript", false)
    .action(async (binPath, option) => {
      if (option?.typescript) {

        const ROOT_PATH = path.join(binPath, "../", "../")
        await fsp.cp(path.join(ROOT_PATH, "src"), path.join(ROOT_PATH, "dist"), { recursive: true })

        const c_p = exec(`set NODE_ENV=development&&nodemon -e ts --exec \"tsc && node --experimental-specifier-resolution=node ${binPath}\"`)
        c_p.stdout.pipe(process.stdout);
      } else {
        const c_p = exec(`set NODE_ENV=development&&nodemon --experimental-specifier-resolution=node ${binPath}`)
        c_p.stdout.pipe(process.stdout);
      }
    })
}
