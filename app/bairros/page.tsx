import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Desentupidora em Todos os Bairros de Curitiba', description: 'Atendemos todos os bairros de Curitiba! Santa Cândida, Bacacheri, Tingui e muito mais. Chegamos em 30 min.' }

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20de%20desentupidora`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORCAMENTO GRAITO' },
]

const neighborhoods = [
  { name: 'Santa Cândida', time: '~20 min' },
  { name: 'Bacacheri', time: '~25 min' },
  { name: 'Tingui', time: '~25 min' },
  { name: 'Boa Vista', time: '~30 min' },
  { name: 'Cajuru', time: '~30 min' },
  { name: 'Portão', time: '~35 min' },
  { name: 'Água Verde', time: '~35 min' },
  { name: 'Batel', time: '~40 min' },
  { name: 'Centro', time: '~40 min' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <header className="sticky top-0 z-50 bg-white border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#002045]" viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
            <span className="text-xl font-extrabold text-[#002045]">DESENTUPIDORA CURITIBA</span>
          </div>
          <span className="hidden md:block text-sm font-bold text-[#002045] hover:bg-gray-100 px-4 py-2 rounded">URGÊNCIA 24H</span>
        </div>
      </header>
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="Bairros" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#002045]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Desentupidora no Seu Bairro de Curitiba</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Atendimento em todos os bairros de Curitiba e região metropolitana. Técnicos locais, chegada em até 30 minutos.</p>
          <a className="inline-flex items-center justify-center bg-[#006d2f] text-white px-8 h-16 text-lg font-bold rounded-lg" href={WA_LINK}>SOLICITAR ORÇAMENTO VIA WHATSAPP</a>
        </div>
      </section>
      <section className="bg-[#e7e8ea] py-6"><div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">{trustBadges.map((b) => <div key={b.label} className="flex items-center gap-2"><svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="text-sm font-bold">{b.label}</span></div>)}</div></section>
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#002045] text-center mb-10">Bairros Atendidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {neighborhoods.map((n) => (
            <div key={n.name} className="p-4 border border-[#c4c6cf] rounded-lg text-center hover:bg-white transition-colors">
              <p className="font-bold text-[#002045]">{n.name}</p>
              <p className="text-sm text-[#43474e]">{n.time}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#43474e] mt-8">+ Região Metropolitana: Pinhais, São José Pinhais, Araucária, Colombo...</p>
      </section>
      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]"><div className="max-w-6xl mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-[#002045] mb-6">Atendimento no seu bairro!</h2><div className="flex flex-col md:flex-row justify-center gap-4"><a className="bg-[#006d2f] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={WA_LINK}>SOLICITAR ORÇAMENTO VIA WHATSAPP</a><a className="bg-[#002045] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a></div></div></section>
      <footer className="bg-[#002045] text-white pb-28 border-t border-[#c4c6cf]"><div className="flex flex-col items-center text-center px-6 py-10 max-w-6xl mx-auto"><div className="text-xl font-extrabold mb-4">DESENTUPIDORA CURITIBA</div><div className="flex flex-wrap justify-center gap-6 mb-8"><a className="text-sm font-bold text-white/80" href="/">Início</a><a className="text-sm font-bold text-white/80" href="/servicos/desentupidora-pia">Serviços</a><a className="text-sm font-bold text-white/80" href="/bairros">Bairros</a><a className="text-sm font-bold text-white/80" href="/contato">Contato</a></div><p className="text-sm opacity-70">© 2026 Desentupidora Curitiba 24h</p></div></footer>
      <nav className="fixed bottom-0 left-0 right-0 z-50 h-[72px] bg-[#006d2f] border-t-4 border-[#5dfd8a] flex w-full"><a className="flex-1 items-center justify-center bg-[#006d2f] text-white h-full" href={WA_LINK}><span className="text-lg font-bold">CHAMAR WHATSAPP</span></a><a className="flex-1 items-center justify-center text-white h-full opacity-90" href={`tel:${PHONE}`}><span className="text-lg font-bold">LIGAR AGORA</span></a></nav>
    </main>
  )
}