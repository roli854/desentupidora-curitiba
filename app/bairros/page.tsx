import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = { title: 'Desentupidora em Todos os Bairros de Curitiba', description: 'Atendemos todos os bairros de Curitiba! Santa Cândida, Bacacheri, Tingui e muito mais. Chegamos em 30 min.' }

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20de%20desentupidora`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
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
      <Header />
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="Bairros" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1a365d]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Desentupidora no Seu Bairro de Curitiba</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Atendimento em todos os bairros de Curitiba e região metropolitana. Técnicos locais, chegada em até 30 minutos.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO VIA WHATSAPP</WhatsAppButton>
        </div>
      </section>
      <section className="bg-[#e7e8ea] py-6"><div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">{trustBadges.map((b) => <div key={b.label} className="flex items-center gap-2"><svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="text-sm font-bold">{b.label}</span></div>)}</div></section>
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1a365d] text-center mb-10">Bairros Atendidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {neighborhoods.map((n) => (
            <div key={n.name} className="p-4 border border-[#c4c6cf] rounded-lg text-center hover:bg-white transition-colors">
              <p className="font-bold text-[#1a365d]">{n.name}</p>
              <p className="text-sm text-[#43474e]">{n.time}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#43474e] mt-8">+ Região Metropolitana: Pinhais, São José Pinhais, Araucária, Colombo...</p>
      </section>
      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]"><div className="max-w-6xl mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-[#1a365d] mb-6">Atendimento no seu bairro!</h2><div className="flex flex-col md:flex-row justify-center gap-4"><WhatsAppButton href={WA_LINK} className="px-12 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO VIA WHATSAPP</WhatsAppButton><a className="bg-[#1a365d] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a></div></div></section>
      <Footer />
      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}