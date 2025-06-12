# スタイルガイド

このドキュメントは、grandcolline.com プロジェクトのコーディングスタイルとベストプラクティスを定義します。

## Communication Rules

- すべての応答は日本語で行うこと
- コードやコマンドは英語のままで構わないが、説明は日本語で行うこと

## 一般原則

- シンプルで読みやすいコードを心がける
- 既存のコードスタイルに従う
- 不要な複雑性を避ける

## TypeScript/JavaScript

### 命名規則
- 変数・関数名: camelCase
- 定数: UPPER_SNAKE_CASE
- 型・インターフェース: PascalCase

## Astro コンポーネント

### ファイル構造
```astro
---
// インポート
import Layout from '../layouts/Layout.astro';

// Props定義
export interface Props {
  title: string;
}

// ロジック
const { title } = Astro.props;
---

<!-- HTML構造 -->
<Layout title={title}>
  <!-- コンテンツ -->
</Layout>

<style>
  /* スタイル */
</style>
```

### 命名規則
- コンポーネントファイル: PascalCase.astro
- ページファイル: kebab-case.astro または kebab-case.md

## CSS/UnoCSS

### クラス命名
- ユーティリティクラスを優先使用
- カスタムクラスは BEM 記法を参考に
- 日本語コメントでスタイルの意図を説明

### UnoCSS 使用方法
```html
<!-- 推奨 -->
<div class="flex items-center gap-4 p-4">

<!-- 非推奨: インラインスタイル -->
<div style="display: flex; align-items: center;">
```

## ファイル・ディレクトリ構成

### 配置ルール
- レイアウト: `src/layouts/`
- ページ: `src/pages/`
- スタイル: `src/styles/`
- 静的ファイル: `public/`

## Git コミット

### コミットメッセージ
- 日本語で記述
- Conventional Commits形式を使用
- 例: `feat: 新機能を追加`、`fix: バグを修正`

### ブランチ命名
- `feature/機能名`
- `fix/修正内容`
- `docs/ドキュメント名`
