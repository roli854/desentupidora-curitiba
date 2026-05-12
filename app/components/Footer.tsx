'use client'

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] border-t border-white/10 pb-8">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <p className="font-bold text-lg mb-2">DESENTUPIDORA CURITIBA</p>
            <p className="opacity-80 text-sm">Especialistas em desentupimento 24h em Curitiba e região metropolitana.</p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3 uppercase opacity-80">Serviços</p>
            <ul className="space-y-2 text-sm">
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-pia">Desentupidora de Pia</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-vaso">Desentupidora de Vaso</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-ralo">Desentupidora de Ralo</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-esgoto">Desentupidora de Esgoto</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/hidrojateamento">Hidrojateamento</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/servicos/caca-vazamentos">Caça Vazamentos</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3 uppercase opacity-80">Navegação</p>
            <ul className="space-y-2 text-sm">
              <li><a className="opacity-80 hover:opacity-100" href="/">Início</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/bairros">Bairros</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/faq">Dúvidas Frequentes</a></li>
              <li><a className="opacity-80 hover:opacity-100" href="/contato">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm opacity-60">© 2026 Desentupidora Curitiba 24h — Atendimento em todos os bairros</p>
        </div>
      </div>
    </footer>
  )
}
