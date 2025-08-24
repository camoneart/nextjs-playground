"use client"

import { Button } from "@/components/ui/button"
import { useCounter } from "@/hooks/use-counter"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { useState } from "react"

export default function HooksPage() {
  const { count, increment, decrement, reset } = useCounter(0)
  const [savedValue, setSavedValue] = useLocalStorage("playground-value", "")
  const [inputValue, setInputValue] = useState("")

  const handleSaveToStorage = () => {
    setSavedValue(inputValue)
    setInputValue("")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Custom Hooks Examples</h1>
          <p className="text-muted-foreground mt-2">
            再利用可能なReactフックのサンプル集
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* useCounter Hook */}
          <div className="space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">useCounter Hook</h2>
            <p className="text-muted-foreground">
              カウンターロジックを簡単に再利用できるフック
            </p>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">{count}</div>
              <div className="flex gap-2 justify-center">
                <Button onClick={decrement} variant="outline">
                  -1
                </Button>
                <Button onClick={increment}>
                  +1
                </Button>
                <Button onClick={reset} variant="secondary">
                  リセット
                </Button>
              </div>
            </div>
          </div>

          {/* useLocalStorage Hook */}
          <div className="space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">useLocalStorage Hook</h2>
            <p className="text-muted-foreground">
              LocalStorageとの同期を簡単にするフック
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">値を入力:</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="何か入力してください"
                />
                <Button onClick={handleSaveToStorage} className="w-full">
                  LocalStorageに保存
                </Button>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">保存された値:</label>
                <div className="p-3 bg-muted rounded-md min-h-[2.5rem] flex items-center">
                  {savedValue || "まだ保存されていません"}
                </div>
                <Button 
                  onClick={() => setSavedValue("")} 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  クリア
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-lg font-semibold mb-2">その他の利用可能なフック</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <code>useCounter</code> - カウンター状態管理</li>
            <li>• <code>useLocalStorage</code> - LocalStorage同期</li>
            <li>• その他のフックも追加予定...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}