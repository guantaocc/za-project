import { parse } from '@babel/parser'
// code -> ast
import traverse from '@babel/traverse'
// traverse
import generate from '@babel/generator'
// ast -> code

const code = 'const n = 1'

// 将源代码转换为AST
const ast = parse(code)

console.log(ast)

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x'
    }
  },
})

const output = generate(ast, {})
console.log(output.code)

// @babel/preset-env

// 转换es6 到 es5 的 polyfill
// @babel/plugin-transform-runtime
// @babel/runtime-corejs

// types:
// @types/webpack-env @types/react @types/react-dom

// eslint:
// eslint eslint-config-prettier
// eslint-import-resolver-webpack 解析 webpack alias
// eslint-import-resolver-typescript
// @typescript-eslint/eslint-plugin
// @typescript-eslint/parser

// postcss
// postcss、postcss-flexbugs-fixes、postcss-loaderpostcss-preset-env，autoprefixer
// postcss-preset-env：这个插件主要是集成了（有了它不用下载autoprefixer插件）
// postcss-loader
// style-resoures-loader

// webpack: webpack、webpack-bundle-analyzer、webpack-cli、webpack-dev-server、webpack-merge、webpackbar
// clean-webpack-plugin
// copy-webpack-plugin
// cross-env: 设置环境变量
// mini-css-extract-plugin、css-minimizer-webpack-plugin
// detect-port-alt: 端口占用
// error-overlay-webpack-plugin
// fork-ts-checker-webpack-plugin
// html-webpack-plugin
// terser-webpack-plugin

// stylelint:
// stylelint-config-prettier：关闭所有不必要的或可能与 Prettier 冲突的规则。
// stylelint-config-rational-order: 顺序(一般可不需要)
// stylelint-config-standard
// stylelint-declaration-block-no-ignored-properties: 不起样式的规则

// commitlint
// conventional-changelog-cli、@commitlint/cli、@commitlint/config-conventional

// husky、lint-staged
