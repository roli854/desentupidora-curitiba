import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Fale Conosco - Desentupidora em Curitiba | 24h via WhatsApp',
  description: 'Entre em contato com a melhor desentupidora de Curitiba. Atendemos 24 horas, chegamos em 30 min. Tire dúvidas, solicite orçamento agora!',
}

const WA_LINK = 'https://wa.me/5541999999999?text=Ola%2C%20quero%20falar%20com%20atendente'
const TEL = 'tel:+5541999999999'

const contactReasons = [
  'Emergência de entupimento',
  'Serviço de hidrojateamento',
  'Caça vazamentos',
  'Dúvidas sobre serviços',
  'Solicitar orçamento',
  'Agendar visita técnica',
  'Reclamação ou sugestão',
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
          <img src="/images/plumber.jpg" alt="Contato Desentupidora Curitiba" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#dc2626] text-white px-3 py-1 mb-4 rounded text-sm font-bold uppercase tracking-wider">
            ATENDIMENTO 24H EM CURITIBA
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Fale Conosco - Estamos Prontos para Você!
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Precisa de atendimento Urgente em Curitiba? Entre em contato agora pelo WhatsApp e receba orçamento em menos de 30 minutos. Nossa equipe está disponível 24 horas, 7 dias por semana.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Falar Conosco via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-[#43474e] mb-2">Mais rápido!</p>
              <a href={WA_LINK} className="text-[#25D366] font-bold">Enviar mensagem</a>
            </div>

            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-[#43474e] mb-2">Atendimento 24h</p>
              <a href={TEL} className="text-[#1a365d] font-bold">(41) 99999-9999</a>
            </div>

            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Atendimento</h3>
              <p className="text-[#43474e] mb-2">Curitiba e região</p>
              <p className="text-[#43474e]">Todos os bairros</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Por Que Falar Conosco?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contactReasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#c4c6cf] rounded">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span className="text-[#43474e]">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Horário de Atendimento</h2>
          <div className="bg-white p-8 rounded-lg border border-[#c4c6cf]">
            <ul className="space-y-4 text-[#43474e]">
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span><strong>WhatsApp:</strong> 24 horas, 7 dias por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span><strong>Telefone:</strong> 24 horas, 7 dias por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span><strong>Atendimento técnico:</strong> 24 horas, incluindo feriados</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1a365d] text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefere falar agora?</h2>
          <p className="text-lg mb-8 opacity-80">Estamos prontos para resolver seu problema!</p>
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