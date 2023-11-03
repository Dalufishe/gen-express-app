# Gen Express App

一款簡單易用，能夠替代 express-generator 的 Express 應用程式創建工具

- 互動式指令行介面
- 內置支援TypeScript
- 支援ESM模組

![]("./../../gen-express-app.png)

### 快速開始

```bash
npx gen-express-app@latest my-app
cd my-app
npm run dev
```

### 為何選擇 gen-expressp-app ？

`gen-expressp-app` 是一款啟發自[express-generator](https://github.com/expressjs/generator)，用於創建Express 應用程式的工具，在保留其大部分優秀功能的同時，亦擴展及改進其短處。它完全支援 `ESM 模組` ，並提供 `TypeScript` 模板可供選擇，以及易於使用的 `互動介面`。 這些都是 express-generator 所沒有的酷功能！

### 用法

#### 互動介面

互動介面超容易使用：

```bash
npx gen-express-app
# or specify project-name
npx gen-express-app express-app 
```

運行以上指令便可以開啟您的 Express 應用程式

#### 指令選項

亦可按照您慣用的方式來使用指令行介面，只需要執行：

- 例如:

```bash
npx gen-express-app express-app --view=ejs --package=pnpm
```

- 獲取協助:


```bash
npx gen-express-app --help
```

### 條款

[MIT](./LICENSE)

### 連結

[Github](https://github.com/Dalufishe/gen-express-app)
[Npm](https://www.npmjs.com/package/gen-express-app)
