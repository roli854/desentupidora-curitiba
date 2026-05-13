import type { Metadata } from 'next'
import WhatsAppButton from '../../components/WhatsAppButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = { 
  title: 'Desentupidora de Pia em Curitiba | Atendimento 24h', 
  description: 'Desentupimento de pia de cozinha e banheiro em Curitiba. Remoção completa de gordura e restos de alimentos. Orçamento gratuito!' 
}

const PHONE = '5596984321456'
const WA_LINK = `https://wa.me/${PHONE}?text=Ola%2C%20preciso%20desentupir%20uma%20pia`

const trustBadges = [
  { icon: 'verified', label: '90 DIAS DE GARANTIA' },
  { icon: 'credit_card', label: 'PARCELAMOS NO CARTAO' },
  { icon: 'schedule', label: 'CHEGADA EM 30 MIN' },
  { icon: 'workspace_premium', label: 'ORÇAMENTO GRÁTIS' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <Header />
      <section className="relative min-h-[500px] flex items-center justify-center py-10 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0"><img alt="Desentupidora de Pia" src="/images/plumber.jpg" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1a365d]/85"></div></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block bg-[#730007] text-white px-3 py-1 mb-4 text-sm font-bold">ATENDIMENTO IMEDIATO EM TODOS OS BAIRROS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Desentupidora de Pia em Curitiba</h1>
          <p className="text-lg text-white opacity-90 mb-8 max-w-[600px]">Desentupimento de pia de cozinha e banheiro. Removemos gordura, restos de alimentos e objetos com segurança.</p>
          <WhatsAppButton href={WA_LINK} className="px-8 h-16 text-lg rounded-lg">SOLICITAR ORÇAMENTO VIA WHATSAPP</WhatsAppButton>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">24h</div>
              <div className="text-gray-600">Atendimento</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">30min</div>
              <div className="text-gray-600">Chegamos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Clientes</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">PIX</div>
              <div className="text-gray-600">Aceitamos</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-0 left-0 right-0 bg-[#25D366] text-white py-4 px-4 flex items-center justify-between shadow-lg z-50">
        <span className="font-bold">Precisa de desentupimento agora?</span>
        <WhatsAppButton href={WA_LINK} className="bg-white text-[#25D366] px-6 py-2 rounded-full font-bold hover:bg-gray-100">Solicitar Orçamento via WhatsApp</WhatsAppButton>
      </div>
    </main>
  )
}