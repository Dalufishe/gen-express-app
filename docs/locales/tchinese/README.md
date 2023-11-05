# Gen Express App

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![npm](https://img.shields.io/npm/v/gen-express-app) ![node](https://img.shields.io/node/v/gen-express-app) ![Make With Love](https://img.shields.io/badge/make_with_%E2%9D%A4%EF%B8%8F-white)

[English](/README.md) / [中文文檔](/docs/locales/tchinese/README.md)

一款簡單易用，能夠取代 express-generator 的現代化 Express 應用生成工具。

- 交互式命令行介面
- 內置支援 TypeScript
- 支援 ESM 模組化語法
- 更加現代化的項目結構

![](/docs/gen-express-app.png)

## 快速開始

```bash
npx gen-express-app@latest my-app
cd my-app
npm run dev
```

## 為何選擇 gen-express-app ？

`gen-expressp-app` 是一款啟發自 [express-generator](https://github.com/expressjs/generator)，用於創建 Express 應用程式的工具，在保留其大部分優秀功能的同時，亦擴展及做了些改進。它完全支援 `ESM 模組` ，並提供 `TypeScript` 模板可供選擇，以及易於使用的 `交互式介面`。 這些都是 express-generator 所沒有的酷功能！

## 用法

### 交互式介面

交互式介面超容易使用：

```bash
npx gen-express-app
# 或指定專案名稱
npx gen-express-app express-app
```

運行以上指令便可以開啟您的 Express 應用程式。

### 參數式選項

亦可按照您慣用的方式來使用參數式寫法，只需要執行：

- 例如：

```bash
npx gen-express-app express-app --view=ejs --package=pnpm
```

- 獲取協助：

```bash
npx gen-express-app --help
```

## 參與貢獻

如果你對 `Gen Express App` 的開發感興趣，我們很樂意接收你的貢獻！可以先在 `issues` 查看有沒有需要解決的問題 (如新功能，待解決錯誤)，`fork` 一份專案、發 `pull request` 參與貢獻。

## 給與支持

如果你認為 Gen Express App 能解決到你的問題，不妨給它一顆星星表示支持！

## 條款

[MIT](./LICENSE)

## 連結

[Github](https://github.com/Dalufishe/gen-express-app)
[Npm](https://www.npmjs.com/package/gen-express-app)
