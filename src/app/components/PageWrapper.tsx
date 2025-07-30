import Link from 'next/link'

type PageWrapperProps = {
  title: string
  children: React.ReactNode
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full border border-gray-700 rounded-xl p-8 bg-[#1a1a1a] shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">{title}</h1>

        <div className="text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>

        <Link
          href="/"
          className="block mt-8 text-blue-400 underline hover:text-red-300"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}
