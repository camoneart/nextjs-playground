export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Next.js Playground - Built with Next.js 15 & Tailwind CSS
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Turbopack Enabled</span>
            <span>•</span>
            <span>App Router</span>
          </div>
        </div>
      </div>
    </footer>
  )
}