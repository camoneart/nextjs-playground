import { formatDate } from "@/lib/utils"

async function getServerData() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    message: "This data was fetched on the server",
    timestamp: new Date(),
    randomNumber: Math.floor(Math.random() * 1000),
    userAgent: "Server-side rendered",
  }
}

export default async function ServerComponentsPage() {
  const serverData = await getServerData()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Server Components Example</h1>
          <p className="text-muted-foreground mt-2">
            サーバーサイドでレンダリングされるコンポーネント
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Server-fetched Data */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Server-fetched Data</h2>
            <p className="text-muted-foreground">
              サーバーサイドで取得されたデータ
            </p>
            
            <div className="space-y-2 text-sm">
              <div><strong>Message:</strong> {serverData.message}</div>
              <div><strong>Timestamp:</strong> {formatDate(serverData.timestamp)}</div>
              <div><strong>Random Number:</strong> {serverData.randomNumber}</div>
              <div><strong>User Agent:</strong> {serverData.userAgent}</div>
            </div>
          </div>

          {/* Environment Info */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Environment Info</h2>
            <p className="text-muted-foreground">
              サーバー環境の情報
            </p>
            
            <div className="space-y-2 text-sm">
              <div><strong>Node Version:</strong> {process.version}</div>
              <div><strong>Platform:</strong> {process.platform}</div>
              <div><strong>Architecture:</strong> {process.arch}</div>
              <div><strong>Render Time:</strong> {formatDate(new Date())}</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-lg font-semibold mb-2">Server Componentsの特徴</h3>
          <ul className="space-y-1 text-sm">
            <li>• サーバーサイドで実行される</li>
            <li>• データベースやファイルシステムに直接アクセス可能</li>
            <li>• バンドルサイズに含まれない</li>
            <li>• 機密情報を安全に扱える</li>
            <li>• ハイドレーションが不要</li>
            <li>• Reactフック（useState、useEffectなど）は使用不可</li>
          </ul>
        </div>
      </div>
    </div>
  )
}