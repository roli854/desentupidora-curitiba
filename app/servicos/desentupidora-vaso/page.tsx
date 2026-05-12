'use client'

import WhatsAppButton from '../../components/WhatsAppButton'

export default function DesentupidoraVaso() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Desentupir Vaso Sanitário em Curitiba | Serviço Rápido 24h
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Vaso Entupido? Sem Quebrar, sem sujeira. Servicio Rápido em Curitiba!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton href={whatsappLink}>Solicitar Orçamento via WhatsApp</WhatsAppButton>
            <a href="tel:4196984321456" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-gray-100 text-gray-700 hover:bg-gray-200">41 96984-321456</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">24h</div><div className="text-gray-600">Atendimento</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Chegamos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Resolvemos</div></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços de Desentupimento de Vaso em Curitiba</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Vaso Residencial</h3>
              <p className="text-gray-600">Removemos objetos, papel higiênico excessivo e obstruções profundas sem quebrar o vaso.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Desentupimento de Vaso Comercial</h3>
              <p className="text-gray-600">Atendemos banheiros de empresas, restaurantes, shops e condomínios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que Escolher Nossa Desentupidora de Vaso em Curitiba?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Sem quebrar o vaso</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento 24 horas</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Chegamos em 30 minutos</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Garantia do serviço</span></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vaso Entupido? Solicitie Agora</h2>
          <WhatsAppButton href={whatsappLink} className="text-lg px-8 py-4">Solicitar Orçamento via WhatsApp</WhatsAppButton>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>Atendemos todos os bairros de Curitiba e região</p>
          <p className="text-sm text-gray-400 mt-4">© 2024 Desentupidora Curitiba Emergencial</p>
        </div>
      </footer>
    </main>
  )
}