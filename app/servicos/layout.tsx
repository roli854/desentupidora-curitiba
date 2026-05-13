import Link from 'next/link'
import StickyFooter from '../components/StickyFooter'

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-white border-b py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/servicos/caca-vazamentos" className="text-green-600 hover:underline">Caça Vazamentos</Link>
          <Link href="/servicos/hidrojateamento" className="text-green-600 hover:underline">Hidrojateamento</Link>
          <Link href="/servicos/desentupidora-vaso" className="text-green-600 hover:underline">Vaso</Link>
          <Link href="/servicos/desentupidora-pia" className="text-green-600 hover:underline">Pia</Link>
          <Link href="/servicos/desentupidora-ralo" className="text-green-600 hover:underline">Ralo</Link>
          <Link href="/servicos/desentupidora-esgoto" className="text-green-600 hover:underline">Esgoto</Link>
          <Link href="/bairros" className="text-green-600 hover:underline">Bairros</Link>
          <Link href="/faq" className="text-green-600 hover:underline">FAQ</Link>
          <Link href="/contato" className="text-green-600 hover:underline">Contato</Link>
        </div>
      </nav>
      {children}
      <StickyFooter />
    </>
  )
}