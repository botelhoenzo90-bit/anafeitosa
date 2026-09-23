import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Leaf, MessageCircle, Menu, Sparkles, Star, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5524993272763?text=Ol%C3%A1%20Ana%2C%20gostaria%20de%20agendar%20uma%20conversa.";

const services = [
  ["Psicanálise", "Um espaço de escuta para compreender sua história, emoções e padrões.", "01"],
  ["Terapia", "Acompanhamento individual para atravessar momentos difíceis com mais clareza.", "02"],
  ["Ansiedade", "Acolhimento para pensamentos acelerados, sobrecarga e preocupações.", "03"],
  ["Naturopatia", "Um olhar integrativo para hábitos, rotina e bem-estar.", "04"],
  ["Adolescentes", "Escuta acolhedora para mudanças, inseguranças e desafios da adolescência.", "05"],
  ["Adultos", "Um espaço para se compreender melhor e cuidar do que pede atenção.", "06"],
];

const moments = [
  ["Ansiedade e sobrecarga", "Quando a mente não desacelera e tudo parece exigir atenção ao mesmo tempo."],
  ["Autoconhecimento", "Para compreender padrões, escolhas, emoções e relações com mais consciência."],
  ["Mudanças", "Para atravessar novos ciclos, decisões e fases de vida com apoio."],
  ["Relacionamentos", "Um espaço para olhar para vínculos, limites, sentimentos e conflitos."],
];

const faqs = [
  ["Como funciona o atendimento online?", "As sessões acontecem por videochamada, em ambiente reservado e acolhedor. Você pode ser atendido de onde estiver."],
  ["Você atende adolescentes?", "Sim. O acompanhamento contempla adolescentes e adultos, respeitando a fase de vida e as necessidades de cada pessoa."],
  ["Como funciona a primeira conversa?", "É um momento para contar o que você está vivendo, tirar dúvidas e conhecer a proposta de acompanhamento."],
  ["Psicanálise e terapia são iguais?", "São abordagens com características diferentes. A conversa inicial ajuda a compreender sua necessidade e explicar a proposta."],
  ["A naturopatia substitui atendimento médico?", "Não. A naturopatia é complementar e não substitui avaliação ou tratamento médico quando necessários."],
];

function BookingButton({ children = "Agendar atendimento" }: { children?: React.ReactNode }) {
  return <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">{children}<ArrowRight size={18} /></a>;
}

function Index() {
  const [faq, setFaq] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);

  return (
    <main className="site">
      <nav className="simple-nav">
        <a className="brand" href="#inicio"><strong>ANA</strong> FEITOSA <small>PSICANALISTA · TERAPEUTA · NATUROPATA</small></a>
        <div className={menu ? "simple-links open" : "simple-links"}>
          <a href="#sobre" onClick={() => setMenu(false)}>Sobre Ana</a>
          <a href="#atendimentos" onClick={() => setMenu(false)}>Atendimentos</a>
          <a href="#processo" onClick={() => setMenu(false)}>Como funciona</a>
          <a href="#faq" onClick={() => setMenu(false)}>Dúvidas</a>
          <a className="nav-book" href={whatsapp} target="_blank" rel="noreferrer">Agendar <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Abrir menu">{menu ? <X /> : <Menu />}</button>
      </nav>

      <section id="inicio" className="hero-clean">
        <div className="hero-content">
          <div className="eyebrow"><span /> CUIDADO EMOCIONAL · ATENDIMENTO ONLINE</div>
          <h1>Um espaço para você <em>se ouvir</em> com mais calma.</h1>
          <p>Psicanálise, terapia e naturopatia com uma abordagem acolhedora para adultos e adolescentes.</p>
          <BookingButton>Agendar minha conversa</BookingButton>
          <div className="trust-row"><span><Check /> Escuta acolhedora</span><span><Check /> Atendimento online</span><span><Check /> Cuidado individual</span></div>
        </div>
      </section>

      <section className="green-strip" aria-label="Informações">
        <div className="strip-track">{[...Array(2)].flatMap(() => ["ATENDIMENTO ONLINE", "ADULTOS E ADOLESCENTES", "ESCUTA ACOLHEDORA", "CUIDADO INDIVIDUALIZADO", "PSICANÁLISE · TERAPIA · NATUROPATIA"]).map((item, i) => <span key={i}>{item}<b>✦</b></span>)}</div>
      </section>

      <section className="welcome section">
        <div className="section-heading center">
          <div className="kicker">Um primeiro passo</div>
          <h2>Você não precisa ter tudo <em>resolvido.</em></h2>
          <p>Às vezes, começar é apenas encontrar um lugar seguro para colocar em palavras aquilo que vem pesando.</p>
          <BookingButton>Quero conversar com a Ana</BookingButton>
        </div>
        <div className="welcome-grid">
          {["Escuta sem julgamentos", "Respeito pela sua história", "Atendimento individual", "Espaço reservado"].map((item) => <div className="soft-pill" key={item}><Heart size={20} />{item}</div>)}
        </div>
      </section>

      <section id="sobre" className="about section">
        <div className="about-image-wrap">
          <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=88" alt="Ambiente de acolhimento e conversa" />
          <div className="image-caption"><Leaf size={18} /><span>Escuta · presença · cuidado</span></div>
        </div>
        <div className="section-copy">
          <div className="kicker">Quem é Ana Feitosa</div>
          <h2>Cuidar da mente também é aprender a <em>se tratar com gentileza.</em></h2>
          <p>Meu trabalho parte da escuta e do respeito pela história de cada pessoa. Não existe um roteiro pronto para aquilo que você vive.</p>
          <p>Como <strong>psicanalista, terapeuta e naturopata</strong>, ofereço um espaço de acolhimento para adultos e adolescentes, com atendimento online e olhar individualizado.</p>
          <div className="check-list"><span><Check /> Escuta sem julgamentos</span><span><Check /> Atendimento individual</span><span><Check /> Adultos e adolescentes</span><span><Check /> Formato online</span></div>
          <BookingButton>Agendar atendimento</BookingButton>
        </div>
      </section>

      <section id="atendimentos" className="services section">
        <div className="section-heading center">
          <div className="kicker">Áreas de cuidado</div>
          <h2>Encontre espaço para aquilo que <em>você está vivendo.</em></h2>
          <p>Conheça as possibilidades de acompanhamento e escolha o que faz sentido para o seu momento.</p>
        </div>
        <div className="services-marquee">
          <div className="services-track">
            {[...services, ...services].map(([title, desc, number], i) => <article className="service-card" key={i}>
              <div className="card-number">{number}</div><div className="service-icon"><Sparkles size={25} /></div><h3>{title}</h3><p>{desc}</p>
              <a href={whatsapp} target="_blank" rel="noreferrer">Agendar conversa <ArrowRight size={16} /></a>
            </article>)}
          </div>
        </div>
        <BookingButton>Quero saber qual atendimento combina comigo</BookingButton>
      </section>

      <section className="moments section">
        <div className="section-heading center">
          <div className="kicker">Seu momento importa</div>
          <h2>O que está pedindo <em>atenção em você?</em></h2>
          <p>Você pode buscar acompanhamento para diferentes momentos da vida. Não é preciso esperar chegar ao limite.</p>
        </div>
        <div className="moments-grid">
          {moments.map(([title, desc], i) => <article className="moment-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{desc}</p><a href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre isso <ArrowRight size={16} /></a></article>)}
        </div>
        <BookingButton>Falar sobre meu momento</BookingButton>
      </section>

      <section id="processo" className="process section">
        <div className="section-heading center">
          <div className="kicker">Como funciona</div>
          <h2>Começar pode ser mais simples do que <em>parece.</em></h2>
          <p>Você não precisa saber exatamente o que dizer. O primeiro passo é simplesmente abrir espaço para conversar.</p>
        </div>
        <div className="steps">
          {[["01", "Você entra em contato", "Chame pelo WhatsApp e conte, do seu jeito, o que está buscando."], ["02", "Conhecemos seu momento", "Conversamos sobre sua história, necessidades e dúvidas."], ["03", "Combinamos o acompanhamento", "Definimos juntos a melhor forma de conduzir o processo."], ["04", "Você começa seu processo", "Com constância, escuta e espaço para perceber novos caminhos."]].map(([n, title, desc]) => <div className="step" key={n}><b>{n}</b><div><h3>{title}</h3><p>{desc}</p></div></div>)}
        </div>
        <BookingButton>Agendar primeira conversa</BookingButton>
      </section>

      <section className="online section">
        <div className="online-copy section-copy">
          <div className="kicker">Atendimento online</div>
          <h2>Seu cuidado pode acontecer de onde <em>você estiver.</em></h2>
          <p>Tenha um espaço reservado na sua rotina para olhar para si, sem precisar se deslocar. Escolha um lugar tranquilo e esteja presente para o seu processo.</p>
          <div className="online-points"><span><Check /> Mais praticidade</span><span><Check /> Horário combinado</span><span><Check /> Ambiente reservado</span></div>
          <BookingButton>Ver disponibilidade</BookingButton>
        </div>
        <div className="online-image"><img src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=1100&q=88" alt="Atendimento online em ambiente tranquilo" /></div>
      </section>

      <section className="reviews section">
        <div className="section-heading center">
          <div className="kicker">Avaliações</div>
          <h2>Uma apresentação inspirada no <em>Google.</em></h2>
          <p>Bloco visual pronto para receber avaliações reais autorizadas da profissional.</p>
        </div>
        <div className="google-grid">
          {[["A", "Avaliação real", "Seu depoimento autorizado entra aqui."], ["C", "Avaliação real", "Seu depoimento autorizado entra aqui."], ["M", "Avaliação real", "Seu depoimento autorizado entra aqui."]].map(([initial, name, text]) => <article className="google-card" key={initial}><div className="google-top"><span className="avatar">{initial}</span><div><strong>{name}</strong><small>Google · avaliação autorizada</small></div><b className="google-g">G</b></div><div className="stars">{[1,2,3,4,5].map((x) => <Star key={x} fill="currentColor" size={17} />)}</div><p>{text}</p><small className="review-note">Substitua este conteúdo pelo relato real.</small></article>)}
        </div>
        <BookingButton>Agendar atendimento</BookingButton>
      </section>

      <section id="faq" className="faq section">
        <div className="section-heading center"><div className="kicker">Dúvidas frequentes</div><h2>Antes de começar, <em>tire suas dúvidas.</em></h2><p>Se sua pergunta não estiver aqui, fale diretamente pelo WhatsApp.</p><BookingButton>Tirar uma dúvida</BookingButton></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <div className={"faq-item " + (faq === i ? "open" : "")} key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown /></button><div className="answer"><p>{a}</p></div></div>)}</div>
      </section>

      <section className="final-cta">
        <div className="kicker">Seu próximo passo</div><h2>Você pode começar com uma <em>conversa.</em></h2><p>Não precisa ter tudo resolvido. Basta dar espaço para o que você está sentindo.</p><BookingButton>Agendar atendimento pelo WhatsApp</BookingButton>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#inicio"><strong>ANA</strong> FEITOSA <small>PSICANALISTA · TERAPEUTA · NATUROPATA</small></a><p>Escuta, cuidado e presença.</p></div>
        <div className="footer-links"><strong>Navegação</strong><a href="#sobre">Quem é Ana</a><a href="#atendimentos">Atendimentos</a><a href="#processo">Como funciona</a><a href="#faq">Dúvidas</a></div>
        <div className="footer-contact"><strong>Agendamentos</strong><a href={whatsapp} target="_blank" rel="noreferrer">+55 24 99327-2763</a><a className="footer-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar agora <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom">© {new Date().getFullYear()} Ana Feitosa · Atendimento online</div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span>Agendar pelo WhatsApp</span></a>
    </main>
  );
}
