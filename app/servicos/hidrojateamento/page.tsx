import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Hidrojateamento em Curitiba | Limpeza de Tubulações | Alta Pressão',
  description: 'Hidrojateamento em Curitiba. Limpeza de tubulações com jato de água de alta pressão. Remove calcificação, raízes e sujeira.',
}

const WA_LINK = 'https://wa.me/5596984321456?text=Ola%2C%20preciso%20de%20hidrojateamento'
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
            Hidrojateamento em Curitiba
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Limpeza de tubulações com jato de água de alta pressão. Remove calcificação, raízes e sujeira acumulada.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Solicitar Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">O que é hidrojateamento?</h2>
          <p className="text-[#43474e] mb-6">
            O hidrojateamento é um método de limpeza que utiliza água em alta pressão para desobstruir e limpar tubulações. É extremamente eficaz para remover:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-[#43474e]">
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Acúmulo de gordura</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Calcificação nas paredes do tubo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Raízes que invadiram a tubulação</span>
              </li>
            </ul>
            <ul className="space-y-3 text-[#43474e]">
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Resíduos sólidos acumulados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Sedimentos de construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold">✓</span>
                <span>Obstruções difíceis</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Aplicações do hidrojateamento</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#c4c6cf] rounded-lg">
              <h3 className="font-bold text-lg mb-3">Residencial</h3>
              <p className="text-[#43474e]">Limpeza de sistemas de esgoto e drenagem de casas e apartamentos.</p>
            </div>
            <div className="p-6 border border-[#c4c6cf] rounded-lg">
              <h3 className="font-bold text-lg mb-3">Comercial</h3>
              <p className="text-[#43474e]">Manutenção de tubulações de empresas, restaurantes e condomínios.</p>
            </div>
            <div className="p-6 border border-[#c4c6cf] rounded-lg">
              <h3 className="font-bold text-lg mb-3">Industrial</h3>
              <p className="text-[#43474e]">Limpeza de redes industriais e sistemas de grande porte.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
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