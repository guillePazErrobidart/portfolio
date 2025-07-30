import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white p-4 flex gap-6">
      <Link href="/" className="text-yellow-400 hover:text-yellow-300">Inicio</Link>
      <Link href="/about" className="hover:text-yellow-400">Sobre mí</Link>
      <Link href="/podcast" className="hover:text-yellow-400">Mi podcast</Link>
      <Link href="/contact" className="hover:text-yellow-400">Contacto</Link>
    </nav>
  )
}
