import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Sparkles, Star } from "lucide-react";
import anaFeitosaAsset from "@/assets/ana-feitosa.png.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Feitosa | Psicanalista, Terapeuta e Naturopata" },
      { name: "description", content: "Atendimento online com Ana Feitosa: psicanálise, terapia e naturopatia para adultos, adolescentes e casais." },
      { property: "og:title", content: "Ana Feitosa | Psicanalista, Terapeuta e Naturopata" },
      { property: "og:description", content: "Um espaço acolhedor de escuta e cuidado emocional, com atendimento online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/5524993272763?text=Ol%C3%A1%20Ana%2C%20gostaria%20de%20agendar%20uma%20conversa.";

const services = [
  ["Psicanálise", "Um espaço de escuta para compreender sua história, emoções e padrões."],
  ["Terapia", "Acompanhamento individual para atravessar momentos difíceis com mais clareza."],
  ["Ansiedade", "Acolhimento para pensamentos acelerados, sobrecarga e preocupações."],
  ["Naturopatia", "Um olhar integrativo para hábitos, rotina e bem-estar."],
  ["Adolescentes", "Escuta acolhedora para mudanças, inseguranças e desafios da adolescência."],
  ["Adultos", "Um espaço para se compreender melhor e cuidar do que pede atenção."],
  ["Casais", "Um espaço para diálogo, vínculos, conflitos e novas formas de se relacionar."],
];

const moments = [
  ["Ansiedade e sobrecarga", "Quando a mente não desacelera e tudo parece exigir atenção ao mesmo tempo."],
  ["Autoconhecimento", "Para compreender padrões, escolhas, emoções e relações com mais consciência."],
  ["Mudanças", "Para atravessar novos ciclos, decisões e fases de vida com apoio."],
  ["Relacionamentos", "Um espaço para olhar para vínculos, limites, sentimentos e conflitos."],
];

const faqs = [
  ["Como funciona o atendimento online?", "As sessões acontecem por videochamada, em ambiente reservado e acolhedor. Você pode ser atendido de onde estiver."],
  ["Você atende adolescentes?", "Sim. O acompanhamento contempla adolescentes, adultos e casais, respeitando cada história e necessidade."],
  ["Como funciona a primeira conversa?", "É um momento para contar o que você está vivendo, tirar dúvidas e conhecer a proposta de acompanhamento."],
  ["Psicanálise e terapia são iguais?", "São abordagens com características diferentes. A conversa inicial ajuda a compreender sua necessidade e explicar a proposta."],
  ["A naturopatia substitui atendimento médico?", "Não. A naturopatia é complementar e não substitui avaliação ou tratamento médico quando necessários."],
];

function BookingButton({ children = "Agendar atendimento" }: { children?: ReactNode }) {
  return <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">{children}<ArrowRight size={18} /></a>;
}

function Index() {
  const [faq, setFaq] = useState<number | null>(null);

  return (
    <main className="site">
      <section id="inicio" className="hero-clean">
        <div className="hero-content">
          <div className="hero-signature"><strong>ANA FEITOSA</strong><span>PSICANALISTA · TERAPEUTA · NATUROPATA</span></div><div className="eyebrow"><span /> CUIDADO EMOCIONAL · ATENDIMENTO ONLINE</div>
          <h1>Um espaço para você <em>se ouvir</em> com mais calma.</h1>
          <p>Psicanálise, terapia e naturopatia com uma abordagem acolhedora para adultos, adolescentes e casais.</p>
          <BookingButton>Agendar minha conversa</BookingButton>
          <div className="trust-row"><span><Check /> Escuta acolhedora</span><span><Check /> Atendimento online</span><span><Check /> Cuidado individual</span></div>
        </div>
      </section>

      <section className="green-strip" aria-label="Informações">
        <div className="strip-track">{[...Array(2)].flatMap(() => ["ATENDIMENTO ONLINE", "ADULTOS · ADOLESCENTES · CASAIS", "ESCUTA ACOLHEDORA", "CUIDADO INDIVIDUALIZADO", "PSICANÁLISE · TERAPIA · NATUROPATIA"]).map((item, i) => <span key={i}>{item}<b>✦</b></span>)}</div>
      </section>

      <section className="welcome section">
        <div className="section-heading center">
          <div className="kicker">Um primeiro passo</div>
          <h2>Você não precisa ter tudo <em>resolvido.</em></h2>
          <p>Às vezes, começar é apenas encontrar um lugar seguro para colocar em palavras aquilo que vem pesando.</p>
        </div>
        <div className="welcome-grid">
          {["Escuta sem julgamentos", "Respeito pela sua história", "Atendimento individual", "Espaço reservado"].map((item) => <div className="soft-pill" key={item}><Heart size={20} />{item}</div>)}
        </div>
        <BookingButton>Quero conversar com a Ana</BookingButton>
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
            </article>)}
          </div>
        </div><div className="services-cta"><BookingButton>Quero saber qual atendimento combina comigo</BookingButton></div>
      </section>

      <section id="sobre" className="about section">
        <div className="section-copy">
          <div className="kicker">Quem é Ana Feitosa</div>
          <h2>Cuidar da mente também é aprender a <em>se tratar com gentileza.</em></h2>
          <div className="about-image-wrap">
            <img src={anaFeitosaAsset.url} alt="Ana Feitosa, psicanalista, terapeuta e naturopata" />
          </div>
          <p>Meu trabalho parte da escuta e do respeito pela história de cada pessoa. Não existe um roteiro pronto para aquilo que você vive.</p>
          <p>Como <strong>psicanalista, terapeuta e naturopata</strong>, ofereço um espaço de acolhimento para adultos, adolescentes e casais, com atendimento online e olhar individualizado.</p>
          <div className="check-list clean-checks"><span><Check /> <b>Escuta sem julgamentos</b></span><span><Check /> <b>Atendimento individual</b></span><span><Check /> <b>Adultos, adolescentes e casais</b></span><span><Check /> <b>Formato online</b></span></div>
          <BookingButton>Agendar atendimento</BookingButton>
        </div>
      </section>

      <section className="moments section">
        <div className="section-heading center">
          <div className="kicker">Seu momento importa</div>
          <h2>O que está pedindo <em>atenção em você?</em></h2>
          <p>Você pode buscar acompanhamento para diferentes momentos da vida. Não é preciso esperar chegar ao limite.</p>
        </div>
        <div className="moments-grid">
          {moments.map(([title, desc], i) => <article className="moment-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
        <BookingButton>Falar sobre meu momento</BookingButton>
      </section>

      <section id="processo" className="process section">
        <div className="process-shell">
          <div className="section-heading center">
            <div className="kicker">Como funciona</div>
            <h2>Um começo leve, claro e <em>no seu ritmo.</em></h2>
            <p>Você não precisa chegar com respostas prontas. O processo começa com uma conversa e vai sendo construído com cuidado.</p>
          </div>
          <div className="process-timeline">
            {[
              ["01", "Primeiro contato", "Você chama pelo WhatsApp e conta, do seu jeito, o que está buscando."],
              ["02", "Primeira conversa", "Abrimos espaço para entender seu momento, suas dúvidas e o que você precisa."],
              ["03", "Caminho personalizado", "Acompanhamento pensado para sua história, rotina e objetivos."],
              ["04", "Continuidade", "Um espaço de escuta para perceber mudanças e construir novos caminhos."]
            ].map(([n, title, desc]) => <article className="process-card" key={n}><span className="process-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
          <BookingButton>Agendar primeira conversa</BookingButton>
        </div>
      </section>

      <section className="online section">
        <div className="online-copy section-copy">
          <div className="kicker">Atendimento online</div>
          <h2>Seu cuidado pode acontecer de onde <em>você estiver.</em></h2>
          <p>Tenha um espaço reservado na sua rotina para olhar para si, sem precisar se deslocar. Escolha um lugar tranquilo e esteja presente para o seu processo.</p>
          <div className="online-points"><span><Check /> Mais praticidade</span><span><Check /> Horário combinado</span><span><Check /> Ambiente reservado</span></div>
          <BookingButton>Ver disponibilidade</BookingButton>
        </div>
      </section>

      <section className="reviews section">
        <div className="section-heading center">
          <div className="kicker">Depoimentos</div>
          <h2>Um espaço para se sentir <em>acolhido.</em></h2>
          <p>Experiências compartilhadas por quem encontrou um espaço de escuta e acolhimento.</p>
        </div>
        <div className="reviews-marquee">
          <div className="reviews-track">
            {[["M", "Mariana S.", "A Ana me acolheu desde a primeira conversa. Foi muito importante ter um espaço seguro para falar e me compreender melhor."], ["C", "Camila R.", "O atendimento é muito cuidadoso e a conversa inicial me deixou muito à vontade. Recomendo para quem busca se conhecer melhor."], ["A", "Amanda P.", "Tenho gostado muito do processo. A escuta é atenta, humana e respeitosa com o meu momento."]].concat([["M", "Mariana S.", "A Ana me acolheu desde a primeira conversa. Foi muito importante ter um espaço seguro para falar e me compreender melhor."], ["C", "Camila R.", "O atendimento é muito cuidadoso e a conversa inicial me deixou muito à vontade. Recomendo para quem busca se conhecer melhor."], ["A", "Amanda P.", "Tenho gostado muito do processo. A escuta é atenta, humana e respeitosa com o meu momento."]]).map(([initial, name, text], i) => <article className="google-card" key={i}><div className="google-top"><span className="avatar">{initial}</span><div><strong>{name}</strong></div></div><div className="stars">{[1,2,3,4,5].map((x) => <Star key={x} fill="currentColor" size={17} />)}</div><p>{text}</p></article>)}
          </div>
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
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Ana pelo WhatsApp"><img src={whatsappAsset.url} alt="" /></a>
    </main>
  );
}
