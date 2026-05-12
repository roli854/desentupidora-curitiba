'use client'

import WhatsAppButton from '../../components/WhatsAppButton'

export default function Hidrojateamento() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Hidrojateamento em Curitiba | Limpeza de Esgoto e Caixa de Gordura 24h
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Esgoto Entupido ou Saturado? Hidrojateamento de Alta Pressão em Curitiba!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton href={whatsappLink}>
              Solicitar Orçamento via WhatsApp
            </WhatsAppButton>
            <a href="tel:4196984321456" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              (41) 96984-321456
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços de Hidrojateamento em Curitiba</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Hidrojateamento de Esgoto</h3>
              <p className="text-gray-600">Limpeza de tubulações de esgoto com jato de água de alta pressão. Remove calcificação, raízes e sujeira acumulada.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Limpeza de Caixa de Gordura</h3>
              <p className="text-gray-600">Remoção de gordura acumulada em caixas de gordura residenciais e comerciais.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Hidrojateamento de Fossas</h3>
              <p className="text-gray-600">Limpeza e esgotamento de fossas sépticas com equipamento especializado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que Escolher Nosso Hidrojateamento em Curitiba?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Equipamento de alta pressão profissional</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Atendimento 24 horas</span></li>
            <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Técnicos especializados</span></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problema de Esgoto? Solicite Hidrojateamento Agora</h2>
          <WhatsAppButton href={whatsappLink} className="text-lg px-8 py-4">Solicitar Orçamento via WhatsApp</WhatsAppButton>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">Atendemos todos os bairros de Curitiba e região</p>
          <p className="text-sm text-gray-400">© 2024 Desentupidora Curitiba Emergencial</p>
        </div>
      </footer>
    </main>
  )
}