import type { Metadata } from 'next'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Desentupidora 24h Curitiba - Orçamento Grátis | Santa Cândida, Bacacheri, Tingui',
  description: 'Desentupidora 24h em Curitiba. Chegamos em 30 min! Desentupimento de pia, vaso, ralo e esgoto. Atendimento em Santa Cândida, Bacacheri, Tingui e toda Curitiba. Solicite orçamento grátis agora!',
  keywords: 'desentupidora curitiba, desentupidora 24h, desentupidora santa candida, desentupimento curitiba, desentupidora bacacheri',
  openGraph: {
    title: 'Desentupidora 24h Curitiba - Orçamento Grátis | Santa Cândida, Bacacheri, Tingui',
    description: 'Desentupidora 24h em Curitiba. Chegamos em 30 min! Solicite orçamento grátis agora!',
    type: 'website',
    locale: 'pt_BR',
  },
}

const WA_LINK = 'https://wa.me/5541999999999?text=Ola%2C%20preciso%20de%20um%20or%C3%A7amento%20de%20desentupidora'
const TEL = 'tel:+5541999999999'

const trustBadges = [
  { icon: 'schedule', label: '24 Horas' },
  { icon: 'speed', label: 'Chegamos em 30min' },
  { icon: 'payments', label: 'Aceitamos PIX' },
  { icon: 'location_on', label: 'Orçamento Grátis' },
  { icon: 'engineering', label: 'Especialistas' },
  { icon: 'verified', label: 'Garantia Total' },
]

const services = [
  { icon: 'sink', title: 'Desentupidora de Pia', desc: 'Desentupimento rápido de pias de cozinha e banheiro. Removemos gordura, restos de comida e objetos com equipamento profissional.', link: '/servicos/desentupidora-pia' },
  { icon: 'toilet', title: 'Desentupidora de Vaso', desc: 'Desentupimento de vaso sanitário sem quebrar. Removemos objetos, papel higiênico excessivo e obstruções profundas.', link: '/servicos/desentupidora-vaso' },
  { icon: 'shower', title: 'Desentupidora de Ralo', desc: 'Desentupimento de ralos de chão, box de banheiro e áreas de serviço. Solução imediata para evitar alagamentos.', link: '/servicos/desentupidora-ralo' },
  { icon: 'water', title: 'Desentupidora de Esgoto', desc: 'Desentupimento completo de rede de esgoto residencial e comercial. Diagnóstico e solução para problemas graves.', link: '/servicos/desentupidora-esgoto' },
  { icon: 'water_drop', title: 'Hidrojateamento', desc: 'Limpeza de tubulações com jato de água de alta pressão. Remove calcificação, raízes e sujeira acumulada.', link: '/servicos/hidrojateamento' },
  { icon: 'search', title: 'Caça Vazamentos', desc: 'Detecção de vazamentos em tubulações ocultas. Tecnologia moderna para localizar sem quebrar paredes.', link: '/servicos/caca-vazamentos' },
]

const neighborhoods = [
  { name: 'Santa Cândida', time: '~20 min' },
  { name: 'Bacacheri', time: '~25 min' },
  { name: 'Tingui', time: '~25 min' },
  { name: 'Boa Vista', time: '~30 min' },
  { name: 'Cajuru', time: '~30 min' },
  { name: 'Portão', time: '~35 min' },
  { name: 'Água Verde', time: '~35 min' },
  { name: 'Batel', time: '~40 min' },
  { name: 'Centro', time: '~40 min' },
]

const testimonials = [
  { text: '"Tinha vaso entupido na sexta à noite, achei que teria que esperar segunda. Liguei, chegou em 25 minutos, resolveu tudo em 15 minutos. Preço justo, recomendo!"', author: '— Maria S., Santa Cândida', service: 'Desentupidora de Vaso', time: 'Chegamos em 25min' },
  { text: '"Desentupiu minha pia da cozinha que estava completamente travada. Chegaram rapidinho, trabalho limpo, nada de sujeira. Agora sei quem chamar!"', author: '— Carlos M., Bacacheri', service: 'Desentupidora de Pia', time: 'Chegamos em 20min' },
  { text: '"Problema no ralo do banheiro que estava causando mau cheiro há semanas. Resolveu de primeira, técnico muito atencioso. Recomendo demais!"', author: '— Ana Paula R., Tingui', service: 'Desentupidora de Ralo', time: 'Chegamos em 30min' },
]

const faqs = [
  { q: 'Quanto tempo demorar para vocês chegarem?', a: 'Em média, chegamos em 20-40 minutos dependendo do bairro. Para emergências em Santa Cândida, Bacacheri e Tingui, nosso tempo é ainda mais rápido!' },
  { q: 'O orçamento é realmente gratuito?', a: 'Sim! O orçamento é 100% gratuito e sem compromisso. Você só paga após a aprovação do serviço.' },
  { q: 'Vocês atendem durante a noite e feriados?', a: 'Sim, atendimento 24 horas, 7 dias por semana, incluindo feriados e finais de semana.' },
  { q: 'Como funciona o pagamento?', a: 'Aceitamos PIX, cartão de crédito/débito e dinheiro. Facilitamos o pagamento para você ficar tranquilo.' },
  { q: 'Vocês dão garantia do serviço?', a: 'Sim, oferecemos garantia de todos os serviços realizados. Se o problema voltar, retornamos sem custo adicional.' },
  { q: 'Qual o preço médio de um desentupimento?', a: 'O valor varia conforme o tipo de serviço e complexidade. Porém, nosso orçamento é transparente — você sabe o preço antes de aprovarmos qualquer trabalho.' },
]

const serviceIcons: Record<string, string> = {
  sink: 'M3 21v-4h18v4H3zm3-8V5h12v8H6zm1-5h10v2H7V8zm-2 4h2v-2H5v2zm4 4h2v-2H9v2zm4 0h2v-2h-2v2z',
  toilet: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  shower: 'M4.5 9.5C4.5 6.46 6.96 4 10 4h4c3.04 0 5.5 2.46 5.5 5.5v6c0 1.1-.9 2-2 2H6.5c-1.1 0-2-2-2-2v-6z',
  water: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z',
  water_drop: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z',
  search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191c1e]">
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%231a365d' d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/></svg>" />

      <header className="bg-white sticky top-0 z-50 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#1a365d]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            <span className="font-bold text-[#1a365d] text-lg md:text-xl">DESENTUPIDORA CURITIBA</span>
          </div>
          <a href={TEL} className="hidden md:flex items-center gap-2 bg-[#1a365d] text-white px-4 py-2 rounded text-sm font-bold uppercase tracking-wider">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            LIGAR AGORA
          </a>
          <a href={TEL} className="md:hidden flex items-center justify-center w-10 h-10 bg-[#1a365d] text-white rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </a>
        </div>
      </header>

      <section className="relative bg-[#1a365d] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.12]">
          <img src="/images/plumber.jpg" alt="Desentupidora Curitiba - Técnico profissional em ação" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center md:text-left">
          <div className="inline-block bg-[#dc2626] text-white px-3 py-1 mb-6 rounded text-sm font-bold uppercase tracking-wider">
            ATENDIMENTO 24H EM CURITIBA
          </div>
          <h1 className="text-2xl md:text-5xl font-extrabold mb-6 leading-tight">
            Desentupidora 24 Horas em Curitiba — Chegamos em 30 Minutos
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
            Atendimento emergencial para toda Curitiba e região. Especialistas em desentupimento de pia, vaso sanitário, ralo e esgoto. Serviço rápido, Orçamento Grátis e atendimento 24 horas.
          </p>
          <WhatsAppButton href={WA_LINK}>
            Solicitar Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-[#c4c6cf]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center">
                <svg className="w-10 h-10 text-[#1a365d] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d={badge.icon === 'schedule' ? 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z' :
                    badge.icon === 'speed' ? 'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' :
                    badge.icon === 'payments' ? 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z' :
                    badge.icon === 'location_on' ? 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' :
                    badge.icon === 'engineering' ? 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z' :
                    'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'}
                  />
                </svg>
                <span className="text-sm font-bold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-16 md:py-20 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center md:text-left">Nossos Serviços Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <a key={s.title} href={s.link} className="bg-white p-6 border border-[#c4c6cf] rounded-lg flex flex-col h-full hover:border-[#1a365d] hover:shadow-md transition-all">
                <svg className="w-10 h-10 text-[#1a365d] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={serviceIcons[s.icon] || serviceIcons.sink} />
                </svg>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="mb-4 flex-grow text-[#43474e]">{s.desc}</p>
                <span className="text-[#25D366] font-bold text-sm">Solicitar Orçamento via WhatsApp →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tradição e Agilidade em Curitiba</h2>
            <p className="mb-4 text-[#43474e]">Somos especialistas em desentupimento com mais de 10 anos de atuação em toda a região metropolitana de Curitiba. Nosso compromisso é com o atendimento imediato e a transparência total.</p>
            <p className="mb-6 text-[#43474e]">Utilizamos equipamentos de ponta para garantir que o problema seja resolvido na primeira visita, sem quebra-quebra desnecessário e com limpeza absoluta do local de trabalho.</p>
            <h3 className="text-lg font-bold mb-4">Por que nos escolher?</h3>
            <ul className="space-y-2 text-[#43474e]">
              <li className="flex items-start gap-2"><span className="text-[#25D366] font-bold">✓</span> Tempo de resposta: Chegamos em até 30 minutos na maioria dos bairros</li>
              <li className="flex items-start gap-2"><span className="text-[#25D366] font-bold">✓</span> Preço transparente: Você sabe quanto vai pagar antes de começarmos</li>
              <li className="flex items-start gap-2"><span className="text-[#25D366] font-bold">✓</span> Equipamento moderno: Máquinas profissionais para qualquer entupimento</li>
              <li className="flex items-start gap-2"><span className="text-[#25D366] font-bold">✓</span> Profissionais treinados: Técnicos conhecem cada bairro</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/images/van.jpg" alt="Van de desentupidora Curitiba com equipamentos profissionais" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Bairros Atendidos</h2>
              <p className="opacity-70">Atendimento ultra-rápido nas seguintes regiões:</p>
            </div>
            <div className="flex items-center gap-2 text-[#1a365d] font-bold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              Curitiba e Região
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="p-4 border border-[#c4c6cf] rounded text-center font-bold">
                {n.name}<br/><span className="text-sm font-normal opacity-70">{n.time}</span>
              </div>
            ))}
            <a href="/bairros" className="p-4 border border-[#1a365d] bg-[#d6e3ff] rounded text-center font-bold text-[#1a365d] hover:bg-[#c0d4f0] transition-colors">Ver todos...</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 border border-[#c4c6cf] rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="mb-4">{t.text}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-green-600 font-medium">{t.service}</p>
                  <p className="text-sm text-gray-500">{t.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[#c4c6cf] rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-[#f3f4f6] transition-colors font-bold">
                  {faq.q}
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                </summary>
                <div className="p-4 border-t border-[#c4c6cf] text-[#43474e]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a365d] text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Não espere. Desentupimento rápido agora!</h2>
          <p className="text-lg mb-8 opacity-80">Problema de entupimento não resolve sozinho. Quanto mais você espera, pior fica. Nossa equipe está pronta para resolver seu problema agora mesmo.</p>
          <div className="flex flex-col items-center gap-4">
            <WhatsAppButton href={WA_LINK} className="px-12 py-5 rounded-full text-lg">
              FALAR COM ATENDENTE AGORA
            </WhatsAppButton>
            <p className="opacity-70">WhatsApp: +55 41 99999-9999 | Rua Exemplo, Santa Cândida, Curitiba - PR | Atendimento 24h / 7 dias</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a365d] border-t border-white/10 pb-8">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <p className="font-bold text-lg mb-2">DESENTUPIDORA CURITIBA</p>
              <p className="opacity-80 text-sm">Especialistas em desentupimento 24h em Curitiba e região metropolitana.</p>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 uppercase opacity-80">Serviços</p>
              <ul className="space-y-2 text-sm">
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-pia">Desentupidora de Pia</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-vaso">Desentupidora de Vaso</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-ralo">Desentupidora de Ralo</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/desentupidora-esgoto">Desentupidora de Esgoto</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/hidrojateamento">Hidrojateamento</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/servicos/caca-vazamentos">Caça Vazamentos</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 uppercase opacity-80">Navegação</p>
              <ul className="space-y-2 text-sm">
                <li><a className="opacity-80 hover:opacity-100" href="/">Início</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/bairros">Bairros</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/faq">Dúvidas Frequentes</a></li>
                <li><a className="opacity-80 hover:opacity-100" href="/contato">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-sm opacity-60">© 2026 Desentupidora Curitiba 24h — Atendimento em todos os bairros</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-4 z-40">
        <WhatsAppButton href={WA_LINK}>
          Solicitar Orçamento
        </WhatsAppButton>
      </div>
    </main>
  )
}
