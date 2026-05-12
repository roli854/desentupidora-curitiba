import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'FAQ - Perguntas Frequentes | Desentupidora Curitiba',
  description: 'Tire suas dúvidas sobre serviços de desentupidora em Curitiba. Orçamento grátis, atendimento 24h.',
}

const WA_LINK = 'https://wa.me/5541999999999?text=Ola%2C%20tenho%20uma%20duvida'
const TEL = 'tel:+5541999999999'

const faqs = [
  { q: 'Quanto tempo demorar para vocês chegarem?', a: 'Em média, chegamos em 20-40 minutos dependendo do bairro. Para emergências em Santa Cândida, Bacacheri e Tingui, nosso tempo é ainda mais rápido!' },
  { q: 'O orçamento é realmente gratuito?', a: 'Sim! O orçamento é 100% gratuito e sem compromisso. Você só paga após a aprovação do serviço.' },
  { q: 'Vocês atendem durante a noite e feriados?', a: 'Sim, atendimento 24 horas, 7 dias por semana, incluindo feriados e finais de semana.' },
  { q: 'Como funciona o pagamento?', a: 'Aceitamos PIX, cartão de crédito/débito (até 12x) e dinheiro. Facilitamos o pagamento para você ficar tranquilo.' },
  { q: 'Vocês dão garantia do serviço?', a: 'Sim, oferecemos garantia de todos os serviços realizados. Se o problema voltar, retornamos sem custo adicional.' },
  { q: 'Qual o preço médio de um desentupimento?', a: 'O valor varia conforme o tipo de serviço e complexidade. Porém, nosso orçamento é transparente — você sabe o preço antes de aprovarmos qualquer trabalho.' },
  { q: 'Vocês fazem serviço sem quebra-quebra?', a: 'Sim, na maioria dos casos conseguimos resolver o entupimento sem necessidade de quebrar paredes ou pisos.' },
  { q: 'Que horas posso chamar para emergência?', a: 'Nossa central funciona 24 horas por dia, todos os dias. Pode chamar a qualquer momento!' },
  { q: 'Vocês atendem empresas e condomínios?', a: 'Sim, atendemos residências, empresas, condomínios e comércios em geral.' },
  { q: 'Como posso evitar entupimentos?', a: 'Evite jogar gordura na pia, use filtro nos ralos, não descarte objetos no vaso e faça manutenção preventiva periódica.' },
  { q: 'Vocês fazem hidrojateamento?', a: 'Sim! Oferecemos serviço de hidrojateamento com equipamento de alta pressão para limpar tubulações pesadas.' },
  { q: 'Vocês fazem caça vazamentos?', a: 'Sim! Detectamos vazamentos ocultos usando tecnologia moderna como geofone e termografia, sem quebrar paredes.' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <header className="bg-white sticky top-0 z-50 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#1a365d]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            <span className="font-bold text-[#1a365d] text-lg md:text-xl">DESENTUPIDORA CURITIBA</span>
          </div>
          <a href={TEL} className="hidden md:flex items-center gap-2 bg-[#1a365d] text-white px-4 py-2 rounded text-sm font-bold uppercase tracking-wider">
            LIGAR AGORA
          </a>
        </div>
      </header>

      <section className="relative bg-[#1a365d] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.12]">
          <img src="/images/plumber.jpg" alt="FAQ Desentupidora Curitiba" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#dc2626] text-white px-3 py-1 mb-4 rounded text-sm font-bold uppercase tracking-wider">
            ATENDIMENTO 24H EM CURITIBA
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Dúvidas sobre Desentupidora em Curitiba? Nós Respondemos!
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Tire todas as suas dúvidas sobre desentupimento, hidrojateamento e caça vazamentos em Curitiba. Nosso time está pronto para ajudar. Atendimento 24 horas!
          </p>
          <WhatsAppButton href={WA_LINK}>
            Tirar Dúvidas via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="text-sm font-bold">24 Horas</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span className="text-sm font-bold">Orçamento Grátis</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
              <span className="text-sm font-bold">Profissionais Especializados</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
              <span className="text-sm font-bold">Aceitamos PIX</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span className="text-sm font-bold">Garantia de Serviço</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[#c4c6cf] rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-[#f3f4f6] transition-colors font-bold">
                  {faq.q}
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                </summary>
                <div className="p-4 border-t border-[#c4c6cf] text-[#43474e]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Ainda tem dúvidas?</h2>
          <p className="text-[#43474e] mb-6">Fale com nosso atendimento via WhatsApp!</p>
          <WhatsAppButton href={WA_LINK} className="px-12 py-5 rounded-full text-lg">
            FALAR COM ATENDENTE AGORA
          </WhatsAppButton>
        </div>
      </section>

      <footer className="bg-[#1a365d] border-t border-white/10">
        <div className="flex flex-col items-center py-8 px-4 text-center gap-4 text-white">
          <p className="font-bold text-lg">DESENTUPIDORA CURITIBA</p>
          <p className="opacity-80">Atendimento 24h • (41) 99999-9999</p>
        </div>
      </footer>
    </main>
  )
}