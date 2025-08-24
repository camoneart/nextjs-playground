import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Examples</h1>
          <p className="text-muted-foreground mt-2">
            Next.jsの様々な機能とパターンの実装例
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Server Components</h2>
            <p className="text-muted-foreground">
              サーバーサイドでレンダリングされるコンポーネントの例。
              データベースアクセスやAPIコールを直接含めることができます。
            </p>
            <Button asChild>
              <Link href="/examples/server-components">詳細を見る</Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Client Components</h2>
            <p className="text-muted-foreground">
              ブラウザで実行されるインタラクティブなコンポーネントの例。
              状態管理、イベントハンドリング、useEffectなどが使用できます。
            </p>
            <Button asChild>
              <Link href="/examples/client-components">詳細を見る</Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Forms</h2>
            <p className="text-muted-foreground">
              React Hook FormとZodを使用したフォーム処理の実装例。
              バリデーション、エラーハンドリング、送信処理を含みます。
            </p>
            <Button asChild>
              <Link href="/examples/forms">詳細を見る</Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Data Fetching</h2>
            <p className="text-muted-foreground">
              SSR、SSG、CSRなど、さまざまなデータフェッチパターンの
              実装例と使い分けについて説明します。
            </p>
            <Button asChild>
              <Link href="/examples/data-fetching">詳細を見る</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}