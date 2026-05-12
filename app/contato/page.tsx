'use client'

import WhatsAppButton from '../components/WhatsAppButton'

export default function Contato() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fale Conosco — Desentupidora em Curitiba | Atendimento 24h
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco para atendimento emergencial em Curitiba
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton href={whatsappLink}>Solicitar Orçamento via WhatsApp</WhatsAppButton>
            <a href="tel:4196984321456" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-gray-100 text-gray-700">41 96984-321456</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp (Preferido)</h3>
              <p className="text-gray-600">Clique no botão acima para falar diretamente pelo WhatsApp. É rápido e sem burocracia!</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">(41) 96984-321456</p>
              <p className="text-gray-500 text-sm">Atendimento 24 horas, 7 dias por semana</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Área de Atendimento</h3>
              <p className="text-gray-600">Curitiba e região metropolitana</p>
              <p className="text-gray-500 text-sm">Todos os bairros: Santa Candida, Bacacheri, Tingui, Batel, Centro e muito mais!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que Falar Conosco?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento rápido e sem burocracia</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento 24h, 7 dias por semana</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Chegamos em 30 minutos na maioria dos bairros</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Orçamento gratuito e sem compromisso</span></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Não Espere — Entre em Contato Agora!</h2>
          <p className="text-gray-600 mb-8">Estamos prontos para atender você</p>
          <WhatsAppButton href={whatsappLink} className="text-lg px-8 py-4">Solicitar Orçamento via WhatsApp</WhatsAppButton>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>Desentupidora Curitiba — Todos os direitos reservados</p>
          <p className="text-sm text-gray-400 mt-4">© 2024</p>
        </div>
      </footer>
    </main>
  )
}