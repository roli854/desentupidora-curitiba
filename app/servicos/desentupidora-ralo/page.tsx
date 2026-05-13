'use client'

import WhatsAppButton from '../../components/WhatsAppButton'

export default function DesentupidoraRalo() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Desentupir Ralo em Curitiba | Desentupidora de Ralo 24h</h1>
          <p className="text-lg text-gray-600 mb-8">Ralo Entupido? Solução Imediata em Curitiba!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton href={whatsappLink}>Solicitar Orçamento via WhatsApp</WhatsAppButton>
            <a href="tel:4196984321456" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-gray-100 text-gray-700">41 96984-321456</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">24h</div><div className="text-gray-600">Atendimento</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Chegamos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Resolvemos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">PIX</div><div className="text-gray-600">Aceitamos</div></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços de Desentupimento de Ralo em Curitiba</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Ralo de Chão</h3>
              <p className="text-gray-600">Removemos obstruções em ralos de chão de áreas internas e externas.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Box de Banheiro</h3>
              <p className="text-gray-600">Desobstruímos ralos de box de banheiro rapidamente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que Escolher Nossa Desentupidora de Ralo?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Serviço rápido</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento 24h</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Chegamos em 30min</span></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ralo Entupido? Solicite Agora</h2>
          <WhatsAppButton href={whatsappLink} className="text-lg px-8 py-4">Solicitar Orçamento via WhatsApp</WhatsAppButton>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>Atendemos todos os bairros de Curitiba</p>
          <p className="text-sm text-gray-400 mt-4">© 2024 Desentupidora Curitiba</p>
        </div>
      </footer>
    </main>
  )
}