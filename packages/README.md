# Gen Express App

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![npm](https://img.shields.io/npm/v/gen-express-app) ![node](https://img.shields.io/node/v/gen-express-app) ![Make With Love](https://img.shields.io/badge/make_with_%E2%9D%A4%EF%B8%8F-white)

Alternative to express-generator, an easy-to-use tool for creating modern express applications.

- Interactive CLI Tool.
- Build-in TypeScript support.
- ESM module support.
- Improved app structure for modern apps.

![](/docs/gen-express-app.png)

## Quick Start

Install `gen-express-app` package:

```bash
npm install -g gen-express-app
```

### For Windows users

On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Carefully read the message displayed after executing the command and follow the instructions. Make sure you understand the implications of setting an execution policy.

## Basic usage

To create a new workspace and initial starter app:

1. Run the CLI command `eg new` and provide the name `express-app`, as shown here:

```bash
eg new express-app
```

### Note if you cannot using `eg` as global command

If u have an error on using `eg` as global command, just try to use command below:

```bash
npx gen-express-app@latest new express-app
```

2. The `eg new` command prompts you for information about features to include in the initial express app. Accept the defaults by pressing the Enter or Return key.

The CLI installs the necessary ExpressJS npm packages and other dependencies. This can take a few minutes.

The CLI creates a new workspace and a simple project`s files, ready to run.

## Run generated ExpressJS project

To run generated project just use one of this commands below:

### Production mode

```bash
cd express-app
npm run start
```

### Development mode

```bash
cd express-app
npm run dev
```

## Why gen-express-app ?

`gen-expressp-app` is an Express application generating tool inspired by [express-generator](https://github.com/expressjs/generator), retaining most of its excellent features and extending and improving where it falls short. We fully support `ESM module` and provide `TypeScript` templates to choose from, as well as an easy-to-use `interactive interface`. These are all cool features that express-generator does not have!

## Usage

### Interactive Interface

Interactive interface is super easy to use:

```bash
eg interactive
# or specify project-name
eg new project-name
```

follow the steps on CLI then you can head into your express application.

### Command Line Options

You can also use the command line options, just like the way you did before.

- example:

```bash
eg new express-app --view=ejs --package=pnpm
```

- get help by typing `--help`:

```bash
$PC ~: eg --help

Usage: eg [command]

Arguments:
  command                         name of usage command (new / generate <component_type> )

Options:
  -V, --version                   output the current version
  -t, --template <template-name>  choose express template (choices: "javascript", "typescript", "javascript-mvc", "typescript-mvc")
  -v, --view <view-engine>        choose view engine (choices: "no-view", "ejs", "pug", "hbs")
  -p, --package <package-name>    choose package manager (choices: "npm", "yarn", "pnpm")
  -h, --help                      display help for command

Commands:
  dev [options] <bin-path>        starting development server
  start [options] <bin-path>      starting production server
  new <project-name>              generate project with name
  interactive                     generate project in interactive mode
```

## Contributing

If you are interested in contributing to the development of the `Gen Express App`, we would be happy to receive your contributions! You can start by checking the `issues` to see if there are any problems that need to be addressed (such as new features or unresolved errors), `fork` the project, and submit a `pull request` to participate in the contribution.

- @Dalufishe
- @the-az-dev
- @Vocaloid2048

## Supporting Gen Express App

If you find the tool useful, consider giving us support by rating it with a `star`!

## License

[MIT](./LICENSE)

## Links

[Github](https://github.com/Dalufishe/gen-express-app)
[Npm](https://www.npmjs.com/package/gen-express-app)
