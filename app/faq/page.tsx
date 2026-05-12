'use client'

import WhatsAppButton from '../components/WhatsAppButton'

export default function FAQ() {
  const phone = "554196984321456"
  const whatsappLink = `https://wa.me/${phone}`

  const faqs = [
    { q: "Quanto tempo demora para vocês chegarem?", a: "Em média, chegamos em 20-40 minutos dependendo do bairro. Para emergências, nosso tempo é ainda mais rápido!" },
    { q: "O orçamento é realmente gratuito?", a: "Sim! O orçamento é 100% gratuito e sem compromisso. Você só paga após a aprovação do serviço." },
    { q: "Vocês atendem durante a noite e feriados?", a: "Sim, atendimento 24 horas, 7 dias por semana, incluindo feriados e finais de semana." },
    { q: "Como funciona o pagamento?", a: "Aceitamos PIX, cartão de crédito/débito e dinheiro. Facilitamos o pagamento para você ficar tranquilo." },
    { q: "Vocês dão garantia do serviço?", a: "Sim, oferecemos garantia de todos os serviços realizados. Se o problema voltar, retornamos sem custo adicional." },
    { q: "Qual o preço médio de um desentupimento?", a: "O valor varia conforme o tipo de serviço e complexidade. Nosso orçamento é transparente — você sabe o preço antes de aprovar." },
    { q: "Atendem todos os bairros de Curitiba?", a: "Sim! Atendemos Santa Candida, Bacacheri, Tingui, Batel, Centro e todos os bairros de Curitiba e região." },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            FAQ — Perguntas Frequentes sobre Desentupidora em Curitiba
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tire suas dúvidas sobre nossos serviços de desentupimento em Curitiba
          </p>
          <WhatsAppButton href={whatsappLink}>Falar no WhatsApp Agora</WhatsAppButton>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas? Fale Conosco!</h2>
          <WhatsAppButton href={whatsappLink} className="text-lg px-8 py-4">Falar no WhatsApp Agora</WhatsAppButton>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>Atendemos todos os bairros de Curitiba e região</p>
          <p className="text-sm text-gray-400 mt-4">© 2024 Desentupidora Curitiba</p>
        </div>
      </footer>
    </main>
  )
}