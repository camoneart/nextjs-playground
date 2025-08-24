"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ClientComponentsPage() {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Client Components Example</h1>
          <p className="text-muted-foreground mt-2">
            "use client"ディレクティブを使用したクライアントコンポーネント
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Interactive Counter */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Interactive Counter</h2>
            <p className="text-muted-foreground">
              状態管理とイベントハンドリングの例
            </p>
            
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold">{count}</div>
              <div className="flex gap-2 justify-center">
                <Button onClick={() => setCount(count - 1)} variant="outline">
                  -1
                </Button>
                <Button onClick={() => setCount(count + 1)}>
                  +1
                </Button>
                <Button onClick={() => setCount(0)} variant="secondary">
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Real-time Clock */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Real-time Clock</h2>
            <p className="text-muted-foreground">
              useEffectとsetIntervalを使用したリアルタイム更新
            </p>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-mono">
                {currentTime.toLocaleTimeString('ja-JP')}
              </div>
              <div className="text-muted-foreground">
                {currentTime.toLocaleDateString('ja-JP')}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-lg font-semibold mb-2">Client Componentsの特徴</h3>
          <ul className="space-y-1 text-sm">
            <li>• ブラウザで実行される</li>
            <li>• useState、useEffectなどのReactフックが使用可能</li>
            <li>• イベントハンドリングが可能</li>
            <li>• ハイドレーションが必要</li>
            <li>• バンドルサイズに含まれる</li>
          </ul>
        </div>
      </div>
    </div>
  )
}