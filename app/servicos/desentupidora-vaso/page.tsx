import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Desentupidora de Vaso 24h Curitiba - Sem Quebrar | Orçamento Grátis',
  description: 'Vaso sanitário entupido em Curitiba? Nós resolvemos sem quebrar! Desentupimento rápido e eficiente. Chegamos em 30 min. Orçamento grátis.',
}

const WA_LINK = 'https://wa.me/5541999999999?text=Ola%2C%20preciso%20desentupir%20um%20vaso'
const TEL = 'tel:+5541999999999'

const whyVaso = [
  'Excesso de papel higiênico',
  'Objetos caídos (brinquedos, celular)',
  'Fraldas e produtos higiênicos',
  'Problemas na tubulação',
  'Acúmulo de resíduos',
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
          <img src="/images/plumber.jpg" alt="Desentupidora Vaso Curitiba" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#dc2626] text-white px-3 py-1 mb-4 rounded text-sm font-bold uppercase tracking-wider">
            ATENDIMENTO 24H EM CURITIBA
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Vaso Entupido em Curitiba? Nós Chegamos em 30 Minutos!
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Desentupimento de vaso sanitário sem quebrar. Removemos objetos, papel higiênico e obstruções profundas. Serviço profissional 24 horas em Curitiba. Orçamento Grátis e atendimento rápido.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Solicitar Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span className="text-sm font-bold">30 minutos</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="text-sm font-bold">24 Horas</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
              <span className="text-sm font-bold">PIX</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span className="text-sm font-bold">Orçamento Grátis</span>
            </div>
            <div className="flex flex-col items-center text-center col-span-2">
              <svg className="w-10 h-10 text-[#25D366] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M21 5.5c-1.4 0-2.6.5-3.5 1.3l-7.1-5.5c-.3-.2-.7-.3-1.1-.1-.4.2-.6.6-.6 1.1v.5l2.5 2.1-6.7 8.5c-.5.6-.5 1.4-.2 2.1.4.7 1.1 1.1 1.9 1.1h11.8c.8 0 1.5-.5 1.9-1.1.3-.6.3-1.5-.2-2.1l-6.7-8.5.4.3V21h.5l1.6-1.2c.7-.6 1.1-1.4 1.1-2.3 0-1.8-1.5-3.3-3.3-3.3h-.2z"/></svg>
              <span className="text-sm font-bold">Não Quebramos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Problema com Vaso Entupido?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">O Que Fazemos:</h3>
              <ul className="space-y-2 text-[#43474e]">
                <li>• Remoção de objetos caídos</li>
                <li>• Desentupimento de papel higiênico</li>
                <li>• Limpeza de obstruções profundas</li>
                <li>• Serviço sem quebra-quebra</li>
                <li>• Atendimento 24 horas</li>
              </ul>
            </div>
            <div className="bg-[#f8f9fb] p-6 rounded-lg border border-[#c4c6cf]">
              <h3 className="font-bold text-lg mb-4">Por Que o Vaso Entupa:</h3>
              <ul className="space-y-2 text-[#43474e]">
                {whyVaso.map((reason, i) => (
                  <li key={i}>• {reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Atendemos Toda Curitiba</h2>
          <p className="text-[#43474e] mb-8">Santa Cândida, Bacacheri, Tingui, Boa Vista, Cajuru, Portão, Água Verde, Batel, Centro e todos os bairros.</p>
          <WhatsAppButton href={WA_LINK} className="px-12 py-5 rounded-full text-lg">
            SOLICITAR ORÇAMENTO VIA WHATSAPP
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