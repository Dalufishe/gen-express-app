# Gen Express App

[English](/README.md) / [中文文檔](/docs/locales/tchinese/README.md)

Alternative to express-generator, an easy-to-use tool for creating modern express applications.

- Interactive CLI Tool.
- Build-in TypeScript support.
- ESM module support.
- Improved app structure for modern apps.

![](/docs/gen-express-app.png)

## Quick Start

```bash
npx gen-express-app@latest my-app
cd my-app
npm run dev
```

## Why gen-express-app ?

`gen-expressp-app` is an Express application generating tool inspired by [express-generator](https://github.com/expressjs/generator), retaining most of its excellent features and extending and improving where it falls short. We fully support `ESM module` and provide `TypeScript` templates to choose from, as well as an easy-to-use `interactive interface`. These are all cool features that express-generator does not have!

## Usage

### Interactive Interface

Interactive interface is super easy to use:

```bash
npx gen-express-app
# or specify project-name
npx gen-express-app express-app
```

follow the steps on CLI then you can head into your express application.

### Command Line Options

You can also use the command line options, just like the way you did before.

- example:

```bash
npx gen-express-app express-app --view=ejs --package=pnpm
```

- get help:

```bash
npx gen-express-app --help
```

## Contributing

If you are interested in contributing to the development of the `Gen Express App`, we would be happy to receive your contributions! You can start by checking the `issues` to see if there are any problems that need to be addressed (such as new features or unresolved errors), `fork` the project, and submit a `pull request` to participate in the contribution.

## Supporting Gen Express App

If you find the tool useful, consider giving us support by rating it with a `star`!

## License

[MIT](./LICENSE)

## Links

[Github](https://github.com/Dalufishe/gen-express-app)
[Npm](https://www.npmjs.com/package/gen-express-app)
