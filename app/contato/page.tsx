import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Contato | Desentupidora Curitiba 24h',
  description: 'Entre em contato com a Desentupidora Curitiba. WhatsApp, telefone ou formulário. Atendimento 24 horas!',
}

const WA_LINK = 'https://wa.me/5596984321456?text=Ola%2C%20quero%20falar%20com%20atendente'
const TEL = 'tel:+5596984321456'

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
            Fale Conosco
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Entre em contato com a Desentupidora Curitiba. Estamos prontos para atender você!
          </p>
          <WhatsAppButton href={WA_LINK}>
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Nossos canais de atendimento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-[#43474e] mb-4">Resposta rápida,envie uma mensagem!</p>
              <a href={WA_LINK} className="text-[#25D366] font-bold hover:underline">
                +55 96 98432-1456
              </a>
            </div>

            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-[#43474e] mb-4">Atendimento telefônico 24h</p>
              <a href={TEL} className="text-[#1a365d] font-bold hover:underline">
                (96) 98432-1456
              </a>
            </div>

            <div className="text-center p-8 border border-[#c4c6cf] rounded-lg">
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Atendimento</h3>
              <p className="text-[#43474e] mb-4">Curitiba e região</p>
              <p className="text-[#43474e]">
                Santa Cândida, Bacacheri, Tingui e todos os bairros
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Horário de atendimento</h2>
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

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Prefere falar agora?</h2>
          <p className="text-[#43474e] mb-6">Estamos prontos para resolver seu problema!</p>
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