# Next.js Playground

新機能を試したり、Next.jsの挙動をハンズオンで学習するためのプレイグラウンド環境です。

## ✨ 特徴

- **Next.js 15** - 最新のNext.jsとApp Routerを使用
- **React 19** - 最新のReact機能
- **Turbopack** - 高速なバンドラー
- **TypeScript** - 型安全性
- **Tailwind CSS v4** - 最新のスタイリング
- **Biome** - 高速なリンター＆フォーマッター

## 🚀 クイックスタート

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いて確認してください。

## 📦 プリインストールされたライブラリ

### 状態管理・データフェッチ
- **Zustand** - 軽量な状態管理
- **TanStack Query** - サーバー状態管理

### UI・スタイリング
- **Radix UI** - アクセシブルなUIコンポーネント
- **class-variance-authority** - バリアント管理
- **clsx & tailwind-merge** - クラス名の結合

### フォーム・バリデーション
- **React Hook Form** - フォーム管理
- **Zod** - スキーマバリデーション

### ユーティリティ
- **date-fns** - 日付操作
- **axios** - HTTPクライアント
- **lucide-react** - アイコンライブラリ

## 📁 ディレクトリ構造

```
src/
├── app/                # App Router (Next.js 13+)
│   ├── api/           # API Routes
│   ├── examples/      # 実装例
│   └── hooks/         # カスタムフック例
├── components/         # 再利用可能なコンポーネント
│   ├── ui/            # UI基盤コンポーネント
│   └── layout/        # レイアウトコンポーネント
├── hooks/              # カスタムフック
├── lib/                # ユーティリティ関数
└── types/              # 型定義
```

## 🛠️ 利用可能なスクリプト

```bash
# 開発サーバー起動（Turbopack使用）
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバー起動
pnpm start

# TypeScriptの型チェック
pnpm typecheck

# コードのリント
pnpm lint

# コードの自動修正
pnpm lint:fix

# コードフォーマット
pnpm format

# キャッシュクリア
pnpm clean

# バンドルサイズ分析
pnpm analyze
```

## 📚 実装例

### Server Components
サーバーサイドでレンダリングされるコンポーネントの例
- データベースアクセス
- 機密情報の安全な処理
- SEO最適化

### Client Components
クライアントサイドで実行されるインタラクティブなコンポーネント
- 状態管理
- イベントハンドリング
- リアルタイム更新

### カスタムフック
再利用可能なロジック
- `useCounter` - カウンター管理
- `useLocalStorage` - LocalStorage同期

### API Routes
サーバーサイドAPI実装
- RESTful API
- エラーハンドリング
- 型安全なレスポンス

## 🎯 学習ポイント

- **App Router vs Pages Router**
- **Server Components vs Client Components**
- **データフェッチパターン（SSR/SSG/CSR）**
- **フォーム処理とバリデーション**
- **状態管理の選択肢**
- **パフォーマンス最適化**

## 🔧 環境変数

`.env.example`をコピーして`.env.local`を作成し、必要な環境変数を設定してください。

```bash
cp .env.example .env.local
```

## 📝 開発のTips

### VS Code設定
`.vscode/settings.json`にBiome連携の設定が含まれています。

### Tailwind CSS
- CSS変数を使用したテーマシステム
- レスポンシブデザインのユーティリティクラス
- カスタムコンポーネントのスタイリング

### TypeScript
- 厳格な型チェック設定
- パス別名（`@/*`）の活用
- 型安全なAPI通信

## 🚀 本番環境へのデプロイ

### Vercel（推奨）
```bash
npx vercel
```

### その他のプラットフォーム
```bash
pnpm build
pnpm start
```

## 🤝 貢献

このプレイグラウンドに新しい例や改善を追加したい場合は、お気軽にPull Requestを送ってください。

## 📄 ライセンス

MIT License
