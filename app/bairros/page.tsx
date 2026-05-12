import type { Metadata } from 'next'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Bairros Atendidos em Curitiba | Desentupidora 24h',
  description: 'Atendemos todos os bairros de Curitiba: Santa Cândida, Bacacheri, Tingui e muito mais. Serviço 24h com chegada em 30 min.',
}

const WA_LINK = 'https://wa.me/5596984321456?text=Ola%2C%20preciso%20de%20desentupidora'
const TEL = 'tel:+5596984321456'

const neighborhoods = [
  { name: 'Santa Cândida', time: '~20 min', zone: 'Norte' },
  { name: 'Bacacheri', time: '~25 min', zone: 'Norte' },
  { name: 'Tingui', time: '~25 min', zone: 'Norte' },
  { name: 'Boa Vista', time: '~30 min', zone: 'Norte' },
  { name: 'Cajuru', time: '~30 min', zone: 'Sul' },
  { name: 'Portão', time: '~35 min', zone: 'Leste' },
  { name: 'Água Verde', time: '~35 min', zone: 'Centro' },
  { name: 'Batel', time: '~40 min', zone: 'Centro' },
  { name: 'Centro', time: '~40 min', zone: 'Centro' },
  { name: 'Mercês', time: '~35 min', zone: 'Centro' },
  { name: 'Ahú', time: '~30 min', zone: 'Norte' },
  { name: 'Capão Raso', time: '~35 min', zone: 'Sul' },
  { name: 'Pinheirinho', time: '~40 min', zone: 'Sul' },
  { name: 'Xaxim', time: '~45 min', zone: 'Sul' },
  { name: 'Fazendinha', time: '~40 min', zone: 'Sul' },
  { name: 'Cidade Industrial', time: '~45 min', zone: 'Leste' },
  { name: 'Rebouças', time: '~35 min', zone: 'Centro' },
  { name: 'Bigorrilho', time: '~35 min', zone: 'Centro' },
  { name: 'Jardim das Américas', time: '~40 min', zone: 'Sul' },
  { name: 'Capão da Imbuia', time: '~30 min', zone: 'Norte' },
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
            Atendemos Todos os Bairros de Curitiba
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Serviço de desentupidora 24 horas em toda Curitiba e região metropolitana. Tempo de resposta rápido!
          </p>
          <WhatsAppButton href={WA_LINK}>
            Solicitar Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Bairros que atendemos</h2>
          <p className="text-[#43474e] mb-8">Clique no bairro para ver o tempo aproximado de chegada:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="p-4 border border-[#c4c6cf] rounded-lg text-center hover:bg-[#f8f9fb] transition-colors cursor-pointer">
                <p className="font-bold text-[#1a365d]">{n.name}</p>
                <p className="text-sm text-[#43474e]">{n.time}</p>
                <p className="text-xs text-[#1a365d] opacity-70">{n.zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Zonas de Curitiba</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#c4c6cf]">
              <h3 className="font-bold text-lg mb-4 text-[#1a365d]">Zona Norte</h3>
              <p className="text-[#43474e]">Santa Cândida, Bacacheri, Tingui, Boa Vista, Ahú, Capão da Imbuia e redondezas.</p>
              <p className="font-bold mt-4 text-[#25D366]">Tempo médio: 25 min</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4c6cf]">
              <h3 className="font-bold text-lg mb-4 text-[#1a365d]">Zona Sul</h3>
              <p className="text-[#43474e]">Cajuru, Capão Raso, Pinheirinho, Xaxim, Fazendinha, Jardim das Américas.</p>
              <p className="font-bold mt-4 text-[#25D366]">Tempo médio: 40 min</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4c6cf]">
              <h3 className="font-bold text-lg mb-4 text-[#1a365d]">Centro e Leste</h3>
              <p className="text-[#43474e]">Água Verde, Batel, Centro, Mercês, Rebouças, Bigorrilho, Portão.</p>
              <p className="font-bold mt-4 text-[#25D366]">Tempo médio: 35 min</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Não encontrou seu bairro?</h2>
          <p className="text-[#43474e] mb-6">Atendemos toda Curitiba e região. Entre em contato para confirmar o atendimento!</p>
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