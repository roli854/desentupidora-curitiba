import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'FAQ - Perguntas Frequentes | Desentupidora Curitiba',
  description: 'Perguntas frequentes sobre serviços de desentupidora em Curitiba. Tire suas dúvidas sobre atendimento, preço e garantia.',
}

const WA_LINK = 'https://wa.me/5596984321456?text=Ola%2C%20tenho%20uma%20duvida'
const TEL = 'tel:+5596984321456'

const faqs = [
  { q: 'Quanto tempo demorar para vocês chegarem?', a: 'Em média, chegamos em 20-40 minutos dependendo do bairro. Para emergências em Santa Cândida, Bacacheri e Tingui, nosso tempo é ainda mais rápido!' },
  { q: 'O orçamento é realmente gratuito?', a: 'Sim! O orçamento é 100% gratuito e sem compromisso. Você só paga após a aprovação do serviço.' },
  { q: 'Vocês atendem durante a noite e feriados?', a: 'Sim, atendimento 24 horas, 7 dias por semana, incluindo feriados e finais de semana.' },
  { q: 'Como funciona o pagamento?', a: 'Aceitamos PIX, cartão de crédito/débito e dinheiro. Facilitamos o pagamento para você ficar tranquilo.' },
  { q: 'Vocês dão garantia do serviço?', a: 'Sim, oferecemos garantia de todos os serviços realizados. Se o problema voltar, retornamos sem custo adicional.' },
  { q: 'Qual o preço médio de um desentupimento?', a: 'O valor varia conforme o tipo de serviço e complexidade. Porém, nosso orçamento é transparente — você sabe o preço antes de aprovarmos qualquer trabalho.' },
  { q: 'Vocês fazem serviço sem quebra-quebra?', a: 'Sim, na maioria dos casos conseguimos resolver o entupimento sem necessidade de quebrar paredes ou pisos.' },
  { q: 'Que horas posso chamar para emergência?', a: 'Nossa central funciona 24 horas por dia, todos os dias. Pode chamar a qualquer momento!' },
  { q: 'Vocês atendem empresas e condomínios?', a: 'Sim, atendemos residências, empresas, condomínios e comércios em geral.' },
  { q: 'Como posso evitar entupimentos?', a: 'Evite jogar gordura na pia, use filtro nos ralos, não descarte objetos no vaso e faça manutenção preventiva periódica.' },
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

      <section className="relative bg-[#1a365d] text-white py-12 md:py-16 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Tire suas dúvidas sobre nossos serviços de desentupidora em Curitiba.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Falar com atendimento
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Dúvidas sobre desentupidora</h2>
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
          <div className="flex flex-col items-center gap-4">
            <WhatsAppButton href={WA_LINK} className="px-12 py-5 rounded-full text-lg">
              FALAR COM ATENDENTE AGORA
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a365d] border-t border-white/10">
        <div className="flex flex-col items-center py-8 px-4 text-center gap-4 text-white">
          <p className="font-bold text-lg">DESENTUPIDORA CURITIBA</p>
          <p className="opacity-80">© 2024 Desentupidora Curitiba Emergencial. Atendimento 24h.</p>
        </div>
      </footer>
    </main>
  )
}