'use client'

import WhatsAppButton from '../components/WhatsAppButton'

export default function Bairros() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  const bairrosNorte = ['Santa Candida', 'Bacacheri', 'Alto Boqueirão', 'Xaxim', 'Pinheirinho', 'Portão']
  const bairrosSul = ['Cidade Industrial (CIC)', 'Riviera', 'Santa Felicidade', 'Campo Comprido', 'Mossunguê']
  const bairrosCentral = ['Água Verde', 'Batel', 'Centro', 'Rebouças', 'Bigorrilho', 'Juvevê']

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Desentupidora em Curitiba: Atendemos Todos os Bairros, 24 Horas!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Precisando de desentupidora em Curitiba? Atendemos todos os bairros com velocidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton href={whatsappLink}>Solicitar Orçamento via WhatsApp</WhatsAppButton>
            <a href="tel:4196984321456" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-gray-100 text-gray-700">41 96984-321456</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">24h</div><div className="text-gray-600">Atendimento</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">30min</div><div className="text-gray-600">Chegamos</div></div>
          <div className="text-center p-4"><div className="text-2xl font-bold text-green-600">500+</div><div className="text-gray-600">Clientes</div></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Zona Norte de Curitiba</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bairrosNorte.map((bairro) => (
              <div key={bairro} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="font-semibold text-gray-700">{bairro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Zona Central de Curitiba</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bairrosCentral.map((bairro) => (
              <div key={bairro} className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
                <span className="font-semibold text-gray-700">{bairro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Zona Sul de Curitiba</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bairrosSul.map((bairro) => (
              <div key={bairro} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="font-semibold text-gray-700">{bairro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que Escolher Nossa Desentupidora em Curitiba?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento em todos os bairros</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento 24h</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Chegamos em 30 minutos</span></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Não Importa o Bairro — мыResolveremos!</h2>
          <p className="text-gray-600 mb-8">Atendemos toda Curitiba e região</p>
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