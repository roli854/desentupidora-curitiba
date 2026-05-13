import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = { title: 'Hidrojateamento em Curitiba | Limpeza de Tubulações', description: 'Hidrojateamento profissional em Curitiba. Limpeza de tubulações com jato de água de alta pressão. Orçamento gratuito!' }

const PHONE = '5541999999999'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20de%20hidrojateamento`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <Header />
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="Hidrojateamento" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1a365d]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Hidrojateamento em Curitiba</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Limpeza de tubulações com jato de água de alta pressão. Remove calcificação, raízes e sujeira acumulada.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO VIA WHATSAPP</WhatsAppButton>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">24h</div>
              <div className="text-gray-600">Atendimento</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">30min</div>
              <div className="text-gray-600">Chegamos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Clientes</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">PIX</div>
              <div className="text-gray-600">Aceitamos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7e8ea] py-6"><div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">{trustBadges.map((b) => <div key={b.label} className="flex items-center gap-2"><svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="text-sm font-bold">{b.label}</span></div>)}</div></section>
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6"><div className="bg-white border border-[#c4c6cf] p-8"><h2 className="text-2xl font-bold text-[#1a365d] mb-4">O que é Hidrojateamento?</h2><p className="text-[#43474e] mb-6">Método de limpeza com água em alta pressão que remove gordura, calcificação, raízes e resíduos acumulados nas tubulações.</p></div></section>
      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]"><div className="max-w-6xl mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-[#1a365d] mb-6">Precisa de Hidrojateamento?</h2><div className="flex flex-col md:flex-row justify-center gap-4"><WhatsAppButton href={WA_LINK} className="px-12 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO VIA WHATSAPP</WhatsAppButton><a className="bg-[#1a365d] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a></div></div></section>
      <Footer />
      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}