import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Desentupidora de Vaso em Curitiba | Atendimento 24h',
  description: 'Desentupimento de vaso sanitário em Curitiba sem quebrar. Remoção de objetos, papel higiênico. Orçamento gratuito!',
}

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20desentupir%20um%20vaso`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORCAMENTO GRAITO' },
]

const whyVaso = [
  { title: 'Excesso de Papel', desc: 'Acúmulo de papel higiênico no vaso.' },
  { title: 'Objetos Caídos', desc: 'Brinquedos, celular e outros itens.' },
]

const faqs = [
  { q: 'Qual o preço do desentupimento de vaso?', a: 'O valor depende da extensão da obstrução. Realizamos orçamento gratuito no local para passar o valor exato sem compromisso.' },
  { q: 'Vocês precisam quebrar o vaso?', a: 'Não! Utilizamos equipamentos profissionais que desobstruem o vaso sem danificar a cerâmica, mantendo a integridade do seu banheiro.' },
  { q: 'Quanto tempo demora o serviço?', a: 'Em média, um desentupimento de vaso comum leva de 20 a 40 minutos para ser totalmente concluído após a chegada do técnico.' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <header className="sticky top-0 z-50 bg-white border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#002045]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            <span className="text-xl font-extrabold text-[#002045]">DESENTUPIDORA CURITIBA</span>
          </div>
          <span className="hidden md:block text-sm font-bold text-[#002045] hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">
            URGÊNCIA 24H
          </span>
        </div>
      </header>

      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Desentupimento Vaso" src="/images/plumber.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#002045]/85"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">
            ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Desentupimento de Vaso Sanitário em Curitiba - Sem Quebrar
          </h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">
            Remoção de objetos, papel higiênico e obstruções profundas. Serviço profissional sem danificar a cerâmica.
          </p>
          <a className="inline-flex items-center justify-center bg-[#006d2f] text-white px-8 h-16 text-lg font-bold rounded-lg hover:brightness-110 transition-all gap-3 shadow-lg" href={WA_LINK}>
            SOLICITAR ORÇAMENTO VIA WHATSAPP
          </a>
        </div>
      </section>

      <section className="bg-[#e7e8ea] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[#006d2f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="text-sm font-bold">{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-white border border-[#c4c6cf] p-8">
            <h2 className="text-2xl font-bold text-[#002045] mb-4">Por que seu vaso entupiu?</h2>
            <p className="text-[#43474e] mb-6">
              O acúmulo de papel higiênico, objetos acidentalmente caída e resíduos são os principais motivos. Nossa técnica profissional remove a obstrução sem quebrar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyVaso.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#006d2f] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <div><span className="block font-bold text-[#002045]">{item.title}</span><span className="text-sm text-[#43474e]">{item.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 bg-[#002045] text-white p-8 flex flex-col items-center text-center justify-center">
            <svg className="w-12 h-12 text-[#66ff8e] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <h3 className="text-xl font-bold mb-2">Plantão Curitiba</h3>
            <p className="opacity-80 text-sm mb-6">Atendemos todos os bairros de Curitiba e Região Metropolitana agora mesmo.</p>
            <div className="text-xl font-bold border-t border-white/20 pt-4 w-full">(41) 9999-9999</div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#edeef0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#002045] text-center mb-10">Dúvidas Frequentes</h2>
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-[#c4c6cf]">
                <summary className="w-full flex justify-between items-center p-5 text-left font-bold text-[#002045] cursor-pointer">
                  {faq.q}
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[#43474e]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#002045] mb-6">Vaso entupido não pode esperar</h2>
          <p className="text-[#43474e] mb-10 max-w-[700px] mx-auto">Evite transtornos e mau cheiro. Nossos técnicos estão de prontidão em Curitiba.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a className="bg-[#006d2f] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg hover:brightness-110 transition-all shadow-md" href={WA_LINK}>SOLICITAR ORÇAMENTO VIA WHATSAPP</a>
            <a className="bg-[#002045] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg hover:bg-[#1a365d] transition-all shadow-md" href={`tel:${PHONE}`}>LIGAR AGORA</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#002045] text-white pb-28 border-t border-[#c4c6cf]">
        <div className="flex flex-col items-center text-center w-full px-6 py-10 gap-4 max-w-6xl mx-auto">
          <div className="text-xl font-extrabold mb-4">DESENTUPIDORA CURITIBA</div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a className="text-sm font-bold text-white/80 hover:text-[#66ff8e] transition-colors" href="/">Início</a>
            <a className="text-sm font-bold text-white/80 hover:text-[#66ff8e] transition-colors" href="/servicos/desentupidora-pia">Serviços</a>
            <a className="text-sm font-bold text-white/80 hover:text-[#66ff8e] transition-colors" href="/bairros">Bairros</a>
            <a className="text-sm font-bold text-white/80 hover:text-[#66ff8e] transition-colors" href="/contato">Contato</a>
          </div>
          <p className="text-sm opacity-70">© 2026 Desentupidora Curitiba 24h - Atendimento em todos os bairros</p>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 right-0 z-50 h-[72px] bg-[#006d2f] border-t-4 border-[#5dfd8a] shadow-lg flex w-full">
        <a className="flex-1 items-center justify-center gap-2 bg-[#006d2f] text-white h-full hover:brightness-110" href={WA_LINK}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span className="text-lg font-bold">CHAMAR WHATSAPP</span>
        </a>
        <a className="flex-1 items-center justify-center gap-2 text-white h-full opacity-90 hover:brightness-110" href={`tel:${PHONE}`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span className="text-lg font-bold">LIGAR AGORA</span>
        </a>
      </nav>
    </main>
  )
}