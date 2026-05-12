import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Caça Vazamentos em Curitiba | Detecção sem Quebra | Tecnologia Moderna',
  description: 'Caça vazamentos em Curitiba. Detecção de vazamentos em tubulações ocultas sem quebrar paredes. Tecnologia moderna!',
}

const WA_LINK = 'https://wa.me/5596984321456?text=Ola%2C%20preciso%20localizar%20um%20vazamento'
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
            Caça Vazamentos em Curitiba
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Detecção de vazamentos em tubulações ocultas. Tecnologia moderna para localizar sem quebrar paredes.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Solicitar Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Sinais de vazamento oculto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-[#43474e]">
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span>Conta de água muito alta inexplicavelmente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span>Manchas de umidade nas paredes ou teto</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span>Odores de mofo persistente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-xl">✓</span>
                <span>Pisos soltos ou abaulados</span>
              </li>
            </ul>
            <div className="bg-[#f8f9fb] p-6 rounded-lg border border-[#c4c6cf]">
              <h3 className="font-bold text-lg mb-4">Tecnologia que utilizamos:</h3>
              <ul className="space-y-2 text-[#43474e]">
                <li>• Geofone eletrônico</li>
                <li>• Câmera termográfica</li>
                <li>• Detector de umidade</li>
                <li>• Equipamento de correlação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Por que detectar vazamentos?</h2>
          <ul className="space-y-4 text-[#43474e] max-w-2xl">
            <li className="flex items-start gap-3">
              <span className="text-[#25D366] font-bold text-xl">✓</span>
              <span>Economize na conta de água</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#25D366] font-bold text-xl">✓</span>
              <span>Evite danos estruturais graves</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#25D366] font-bold text-xl">✓</span>
              <span>Prevenindo proliferação de mofo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#25D366] font-bold text-xl">✓</span>
              <span>Sem quebra-quebra desnecessário</span>
            </li>
          </ul>
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