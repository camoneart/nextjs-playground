import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Next.js Playground
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            新機能を試したり、Next.jsの挙動を確認するためのプレイグラウンド環境です。
            App Router、Turbopack、最新のReact機能を使用しています。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Server Components</h2>
            <p className="text-sm text-muted-foreground text-center">
              サーバーサイドでレンダリングされるコンポーネントのテスト
            </p>
            <Button asChild>
              <Link href="/examples/server-components">試してみる</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Client Components</h2>
            <p className="text-sm text-muted-foreground text-center">
              ブラウザでインタラクティブな機能を持つコンポーネント
            </p>
            <Button asChild>
              <Link href="/examples/client-components">試してみる</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Custom Hooks</h2>
            <p className="text-sm text-muted-foreground text-center">
              再利用可能なロジックのためのカスタムフック集
            </p>
            <Button asChild>
              <Link href="/hooks">試してみる</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">API Routes</h2>
            <p className="text-sm text-muted-foreground text-center">
              サーバーサイドAPIのテストと実装例
            </p>
            <Button asChild>
              <Link href="/api/hello">試してみる</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Forms</h2>
            <p className="text-sm text-muted-foreground text-center">
              React Hook FormとZodを使用したフォーム処理
            </p>
            <Button asChild>
              <Link href="/examples/forms">試してみる</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Data Fetching</h2>
            <p className="text-sm text-muted-foreground text-center">
              SSR、SSG、CSRのデータフェッチパターン
            </p>
            <Button asChild>
              <Link href="/examples/data-fetching">試してみる</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <strong>技術スタック:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS, Turbopack
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>開発ツール:</strong> Biome, Zustand, TanStack Query, React Hook Form, Zod
          </p>
        </div>
      </div>
    </div>
  );
}
