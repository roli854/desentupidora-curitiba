import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = { title: 'Fale Conosco - Desentupidora Curitiba | 24h via WhatsApp', description: 'Entre em contato com a melhor desentupidora de Curitiba. Atendemos 24 horas. Tire dúvidas, solicite orçamento!' }

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20quero%20falar%20com%20atendente`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
]

const contactOptions = [
  { title: 'WhatsApp', desc: 'Mais rápido!', action: WA_LINK, icon: 'chat' },
  { title: 'Telefone', desc: 'Atendimento 24h', action: `tel:${PHONE}`, icon: 'call' },
  { title: 'Atendimento', desc: 'Curitiba e região', action: '#', icon: 'location_on' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <Header />
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="Contato" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1a365d]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Fale Conosco - Estamos Prontos para Você!</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Precisa de atendimento urgente em Curitiba? Entre em contato agora e receba orçamento em menos de 30 minutos.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO</WhatsAppButton>
        </div>
      </section>
      <section className="bg-[#e7e8ea] py-6"><div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">{trustBadges.map((b) => <div key={b.label} className="flex items-center gap-2"><svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="text-sm font-bold">{b.label}</span></div>)}</div></section>
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1a365d] text-center mb-10">Nossos Canais de Atendimento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-[#43474e] mb-2">Mais rápido!</p>
              <WhatsAppButton href={WA_LINK} className="text-base">Enviar mensagem</WhatsAppButton>
            </div>
            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-[#43474e] mb-2">Atendimento 24h</p>
              <a href={`tel:${PHONE}`} className="text-[#1a365d] font-bold">{PHONE}</a>
            </div>
            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
              <h3 className="font-bold text-lg mb-2">Atendimento</h3>
              <p className="text-[#43474e] mb-2">Curitiba e região</p>
              <p className="text-[#43474e]">Todos os bairros</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-[#edeef0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Horário de Atendimento</h2>
          <div className="bg-white p-8 rounded-lg border border-[#c4c6cf]">
            <ul className="space-y-4 text-[#43474e]">
              <li className="flex items-start gap-3"><span className="text-[#006d2f] font-bold text-xl">✓</span><span><strong>WhatsApp:</strong> 24 horas, 7 dias por semana</span></li>
              <li className="flex items-start gap-3"><span className="text-[#006d2f] font-bold text-xl">✓</span><span><strong>Telefone:</strong> 24 horas, 7 dias por semana</span></li>
              <li className="flex items-start gap-3"><span className="text-[#006d2f] font-bold text-xl">✓</span><span><strong>Atendimento técnico:</strong> 24 horas, incluindo feriados</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]"><div className="max-w-6xl mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-[#1a365d] mb-6">Prefere falar agora?</h2><div className="flex flex-col md:flex-row justify-center gap-4"><WhatsAppButton href={WA_LINK} className="px-12 h-16 text-lg rounded-lg">FALAR COM ATENDENTE AGORA</WhatsAppButton><a className="bg-[#1a365d] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a></div></div></section>
      <Footer />
      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}