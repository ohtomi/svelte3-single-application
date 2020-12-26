# svelte3-single-page-application

このリポジトリーは、技術書典10「[いまからはじめる Svelte3](https://techbookfest.org/product/4925576424980480?productVariantID=5094401858600960)」付録のサンプルコードです。

## サンプルコードの試しかた

リポジトリーをクローンしたら、npmパッケージをインストールします。

```bash
cd svelte-app
npm install
```

そして、[Rollup](https://rollupjs.org)のモジュール・バンドル処理を実行し...

```bash
npm run dev
```

ウェブブラウザーで[localhost:5000](http://localhost:5000)にアクセスします。

## 開発環境

* [Svelte](https://svelte.dev)
* [svelte-check](https://www.npmjs.com/package/svelte-check)
* [ESLint](https://eslint.org)
* [Prettier](https://prettier.io)
* [Jest](https://jestjs.io)
* [Testing Library](https://testing-library.com)

## 開発の進めかた

コードを書き換えたら、Lintツール（svelte-check・ESLint・Prettier）で静的解析します。

```bash
npm run validate
npm run lint
```

もしESLintやPrettierがエラーを報告したら...

```bash
npm run fix
```

エラーを解消できたら、ユニットテスト（[Jest]()・[Testing Library]()）を実行します。

```bash
npm run test
```
