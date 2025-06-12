# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際の Claude Code (claude.ai/code) へのガイダンスを提供します。

## Communication Rules

- すべての応答は日本語で行うこと
- コードやコマンドは英語のままで構わないが、説明は日本語で行うこと

## Git Commit Rules

- すべてのコミットメッセージは日本語で記述すること
- コミットメッセージは Conventional Commits に従うこと
- コミットの前に、可能な限り `bun run check` を実行すること

## Pull Request Rules

- PR を作成する際は、`.github/pull_request_template.md` のテンプレートに従うこと
- すべてのセクションを適切に記入すること

## Project Overview

**grandcolline.com** は、Astro、UnoCSS、TypeScriptで構築された個人ポートフォリオサイトです。Cloudflare Pagesにデプロイされた静的サイトで、コンテンツ要約、年間「of-the-year」ページ、PWA機能を特徴としています。

## Core Architecture

- **フレームワーク**: Astro（静的サイト生成）
- **スタイリング**: UnoCSS（WindiCSS v3プリセット使用）
- **パッケージマネージャー**: Bun（`bun.lockb`が存在）
- **コード品質**: Biome（フォーマッターのみ、リンターは無効）
- **デプロイメント**: Cloudflare Pages

## Commands

- `bun install` - 依存パッケージをインストール（初回セットアップ時のみ必要）
- `bun run dev` - 開発サーバーをHMR付きで起動 (http://localhost:4321)
- `bun run build` - プロダクション用ビルド
- `bun run preview` - 本番ビルドのプレビュー
- `bun run check` - コードフォーマット・インポート整理

## Project Structure

- `src/layouts/` - Astroレイアウトコンポーネント（Layout.astro、Markdown.astro）
- `src/pages/` - ファイルベースルーティング、`contents/`サブディレクトリにコンテンツページ
- `src/styles/markdown.css` - カスタムMarkdownスタイリング
- `public/` - PWAマニフェストとCloudflare設定を含む静的アセット

## Key Configuration Details

- **UnoCSS**: WindiCSS v3プリセット、カスタムテーマ（width: 700px）、Google Fonts統合（Sawarabi Gothic、VT323、Inter）
- **Biome**: 2スペースインデント、フォーマッター有効、リンター無効、organizeImports有効
- **TypeScript**: 厳密なAstro設定
- **PWA**: `public/`でマニフェストとアイコンを設定

## Content Management

コンテンツは主に`src/pages/contents/`のMarkdownファイルで、年間コンテンツ要約とポリシーページを含みます。カスタムスタイリングでAstroの組み込みMarkdown処理を使用します。

## Deployment Notes

`_headers`と`_routes.json`でCloudflare Pages用に設定済み。認証用の`robots.txt`と`keybase.txt`を含みます。
