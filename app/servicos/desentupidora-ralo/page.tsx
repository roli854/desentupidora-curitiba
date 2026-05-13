import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Desentupidora de Ralo em Curitiba | Atendimento 24h',
  description: 'Desentupimento de ralo de chão, box e área de serviço em Curitiba. Serviço rápido sem quebrar. Orçamento gratuito!',
}

const PHONE = '+5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20desentupir%20um%20ralo`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
]

const whyRalo = [
  { title: 'Ralo de Chão', desc: 'Cabelos, sabão e resíduos acumulados.' },
  { title: 'Box de Banheiro', desc: 'Pelo e fragmentos de sabonete.' },
]

const faqs = [
  { q: 'Qual o preço do desentupimento de ralo?', a: 'O valor depende da extensão da obstrução. Realizamos orçamento gratuito no local.' },
  { q: 'Vocês precisam quebrar o piso?', a: 'Não! Utilizamos equipamentos profissionais que desobstruem sem danificar o piso.' },
  { q: 'Quanto tempo demora o serviço?', a: 'Em média, 20 a 40 minutos após a chegada do técnico.' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <Header />

      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Desentupimento Ralo" src="/images/plumber.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1a365d]/85"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Desentupimento de Ralo em Curitiba</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Desobstrução de ralos de chão, box e área de serviço. Serviço rápido e sem quebra-quebra.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO</WhatsAppButton>
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
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Por que seu ralo entupiu?</h2>
            <p className="text-[#43474e] mb-6">O acúmulo de cabelos, sabão e resíduos é o principal motivo. Nossa técnica profissional remove a obstrução completa.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyRalo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#006d2f] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <div><span className="block font-bold text-[#1a365d]">{item.title}</span><span className="text-sm text-[#43474e]">{item.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 bg-[#1a365d] text-white p-8 flex flex-col items-center text-center justify-center">
            <svg className="w-12 h-12 text-[#66ff8e] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <h3 className="text-xl font-bold mb-2">Plantão Curitiba</h3>
            <p className="opacity-80 text-sm mb-6">Atendemos todos os bairros agora mesmo.</p>
            <div className="text-xl font-bold border-t border-white/20 pt-4 w-full">+5596984321456</div>
          </div>
        </div>
      </section>

<section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">24h</div><div className="text-gray-600">Atendimento</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Chegamos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Resolvemos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">PIX</div><div className="text-gray-600">Aceitamos</div></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços de Desentupimento de Ralo em Curitiba</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Ralo de Chão</h3>
              <p className="text-gray-600">Removemos obstruções em ralos de chão de áreas internas e externas.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Box de Banheiro</h3>
              <p className="text-gray-600">Desobstruímos ralos de box de banheiro rapidamente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#edeef0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1a365d] text-center mb-10">Dúvidas Frequentes</h2>
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
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white border-t border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Ralo entupido não pode esperar</h2>
          <p className="text-[#43474e] mb-10 max-w-[700px] mx-auto">Evite alagamentos e mau cheiro. Nossos técnicos estão de prontidão.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <WhatsAppButton href={WA_LINK} className="px-12 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO</WhatsAppButton>
            <a className="bg-[#1a365d] text-white px-12 h-16 flex items-center justify-center text-lg font-bold rounded-lg" href={`tel:${PHONE}`}>LIGAR AGORA</a>
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}