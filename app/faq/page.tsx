import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = { title: 'FAQ - Perguntas Frequentes | Desentupidora Curitiba', description: 'Tire suas dúvidas sobre serviços de desentupidora em Curitiba. Orçamento grátis, atendimento 24h.' }

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20tenho%20uma%20duvida`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
]

const faqs = [
  { q: 'Qual o preço do desentupimento?', a: 'O valor depende da extensão da obstrução. Realizamos orçamento gratuito sem compromisso.' },
  { q: 'Vocês precisam quebrar?', a: 'Não! Na maioria dos casos resolvemos sem quebrar paredes ou pisos.' },
  { q: 'Quanto tempo para chegar?', a: 'Em média 20-40 minutos dependendo do bairro.' },
  { q: 'Atendem à noite e feriados?', a: 'Sim, atendimento 24 horas, 7 dias por semana.' },
  { q: 'Vocês dão garantia?', a: 'Sim, 90 dias de garantia em todos os serviços.' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <Header />
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="FAQ" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1a365d]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Dúvidas Frequentes</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Tire suas dúvidas sobre nossos serviços de desentupidora em Curitiba.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO</WhatsAppButton>
        </div>
      </section>
      <section className="bg-[#e7e8ea] py-6"><div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">{trustBadges.map((b) => <div key={b.label} className="flex items-center gap-2"><svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="text-sm font-bold">{b.label}</span></div>)}</div></section>
      <section className="py-10 md:py-20 bg-[#edeef0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1a365d] text-center mb-10">Perguntas Frequentes</h2>
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-[#c4c6cf]">
                <summary className="w-full flex justify-between items-center p-5 text-left font-bold text-[#1a365d] cursor-pointer">{faq.q}<svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></summary>
                <div className="px-5 pb-5 text-[#43474e]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]"><div className="max-w-6xl mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-[#1a365d] mb-6">Ainda tem dúvidas?</h2><div className="flex flex-col md:flex-row justify-center gap-4"><WhatsAppButton href={WA_LINK} className="px-12 h-16 text-lg rounded-lg">FALAR COM ATENDENTE AGORA</WhatsAppButton><a className="bg-[#1a365d] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a></div></div></section>
      <Footer />
      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}