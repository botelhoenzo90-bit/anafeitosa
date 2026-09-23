import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight,
  Heart, Leaf, MessageCircle, ShieldCheck, Sparkles, UserRound,
  Video, Brain, Flower2, Clock3, Check, Menu, X
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5524993272763?text=Ol%C3%A1%20Ana%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.";

const workCards = [
  { title: "Psicanálise", text: "Um espaço de escuta para compreender emoções, padrões e conflitos com mais profundidade.", icon: Brain },
  { title: "Terapia", text: "Acolhimento e acompanhamento para atravessar fases difíceis e construir novas formas de viver.", icon: Heart },
  { title: "Ansiedade", text: "Entenda os gatilhos, organize o que sente e desenvolva recursos para lidar com o dia a dia.", icon: Sparkles },
  { title: "Naturopatia", text: "Uma abordagem integrativa que considera hábitos, rotina e bem-estar de forma individualizada.", icon: Leaf },
  { title: "Adolescentes", text: "Escuta cuidadosa para as transformações, inseguranças e desafios próprios da adolescência.", icon: UserRound },
  { title: "Adultos", text: "Atendimento para quem deseja se conhecer melhor, aliviar sofrimentos e recuperar equilíbrio.", icon: Flower2 },
];

const faq = [
  ["Como funciona o atendimento online?", "As sessões acontecem por videochamada, em um ambiente reservado e acolhedor. Você pode ser atendido de onde estiver, com praticidade e privacidade."],
  ["Psicanálise e terapia são a mesma coisa?", "São abordagens com características diferentes. Na conversa inicial, podemos entender sua necessidade e explicar como o acompanhamento pode ser conduzido."],
  ["Você atende adolescentes?", "Sim. O atendimento contempla adolescentes e adultos, respeitando a fase de vida e as necessidades de cada pessoa."],
  ["A naturopatia substitui um tratamento médico?", "Não. A naturopatia é uma abordagem complementar de cuidado e não substitui avaliação, diagnóstico ou tratamento médico quando necessários."],
  ["Quanto tempo dura uma sessão?", "A duração e a frequência podem variar conforme a modalidade e a necessidade de cada pessoa. Esses detalhes são combinados no início do acompanhamento."],
  ["Como saber se devo procurar ajuda?", "Você não precisa esperar chegar ao limite. Se emoções, ansiedade, relacionamentos ou rotina estiverem pesando, conversar com um profissional pode ser um primeiro passo."],
];

const focus = ["Ansiedade", "Autoconhecimento", "Emoções", "Relacionamentos", "Fases de mudança", "Adolescência"];

function Index() {
  const [work, setWork] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);

  const moveWork = (dir: number) => setWork((v) => (v + dir + workCards.length) % workCards.length);
  const testimonials = [
    { quote: "Um espaço para respirar, organizar o que sinto e olhar para mim com mais gentileza.", name: "Experiência de acompanhamento", detail: "Relato ilustrativo • substitua por depoimentos autorizados" },
    { quote: "O atendimento online trouxe praticidade sem perder a sensação de acolhimento e presença.", name: "Experiência de atendimento", detail: "Relato ilustrativo • substitua por depoimentos autorizados" },
    { quote: "Aprender a perceber meus padrões mudou a forma como encaro minhas escolhas e relações.", name: "Experiência de processo", detail: "Relato ilustrativo • substitua por depoimentos autorizados" },
  ];

  return (
    <main className="site">
      <header className="nav">
        <a href="#inicio" className="brand"><span>ANA</span> FEITOSA <small>Psicanalista • Terapeuta • Naturopata</small></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["Sobre", "Atendimentos", "Como funciona", "Dúvidas"].map((item, i) => (
            <a key={item} href={["#sobre","#atendimentos","#como-funciona","#faq"][i]} onClick={() => setMenu(false)}>{item}</a>
          ))}
          <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar conversa <ArrowUpRight size={16}/></a>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Abrir menu">{menu ? <X/> : <Menu/>}</button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Cuidado emocional • Atendimento online</div>
          <h1>Você não precisa <em>carregar tudo</em> sozinho.</h1>
          <p className="hero-lead">Um espaço seguro para compreender o que você sente, cuidar da sua saúde emocional e encontrar caminhos possíveis para uma vida mais leve.</p>
          <div className="hero-actions">
            <a className="btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Quero conversar com a Ana <ArrowRight size={18}/></a>
            <a className="text-link" href="#como-funciona">Entenda como funciona <ChevronRight size={17}/></a>
          </div>
          <div className="trust-row"><span><ShieldCheck size={17}/> Escuta acolhedora</span><span><Video size={17}/> 100% online</span><span><Heart size={17}/> Atendimento individual</span></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-card">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85" alt="Ambiente acolhedor de atendimento" />
            <div className="portrait-overlay"><div className="mini-avatar">AF</div><div><strong>Ana Feitosa</strong><span>Psicanalista • Terapeuta</span></div></div>
          </div>
          <div className="floating-note"><Sparkles size={16}/><span><b>Um espaço para você.</b><br/>Sem julgamentos, com presença.</span></div>
        </div>
      </section>

      <section className="pain-section">
        <div className="section-kicker">Talvez você esteja vivendo isso</div>
        <h2>Quando a mente não desliga,<br/><i>até coisas simples pesam.</i></h2>
        <div className="pain-grid">
          {[
            ["01","Pensamentos que não param","Você tenta descansar, mas a preocupação continua ocupando espaço."],
            ["02","Ansiedade no cotidiano","O corpo acelera, o peito aperta e tudo parece exigir mais de você."],
            ["03","Cansaço emocional","Você segue funcionando, mas sente que está se afastando de si."],
            ["04","Dificuldade para se entender","Alguns padrões se repetem e você não sabe exatamente por quê."],
          ].map(([n,t,d]) => <article className="pain-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
        <div className="bridge"><span>Existe outro caminho</span><ArrowDownIcon /><b>Começar a se escutar também é uma forma de cuidado.</b></div>
      </section>

      <section id="sobre" className="about">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1100&q=85" alt="Momento de autocuidado e tranquilidade"/><div className="quote-card">“Cuidar de si não é egoísmo.<br/><b>É presença.</b>”</div></div>
        <div className="about-copy">
          <div className="section-kicker">Quem é Ana Feitosa</div>
          <h2>Um atendimento que olha para <i>a pessoa inteira.</i></h2>
          <p>Meu trabalho nasce da escuta: acolher aquilo que muitas vezes fica difícil colocar em palavras e construir, junto com você, um caminho de compreensão e cuidado.</p>
          <p>Como <b>psicanalista, terapeuta e naturopata</b>, integro diferentes perspectivas de cuidado, sempre respeitando sua história, seu momento e os limites de cada abordagem.</p>
          <div className="credentials"><span><Check/> Adultos e adolescentes</span><span><Check/> Atendimento online</span><span><Check/> Olhar individualizado</span><span><Check/> Acolhimento sem julgamentos</span></div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="outline-btn">Falar com a Ana <ArrowUpRight size={17}/></a>
        </div>
      </section>

      <section id="atendimentos" className="work-section">
        <div className="section-head"><div><div className="section-kicker">Áreas de cuidado</div><h2>O que podemos <i>trabalhar juntos</i></h2></div><div className="carousel-controls"><button onClick={() => moveWork(-1)} aria-label="Anterior"><ChevronLeft/></button><button onClick={() => moveWork(1)} aria-label="Próximo"><ChevronRight/></button></div></div>
        <div className="work-carousel">
          {[0,1,2].map((offset) => { const item = workCards[(work+offset)%workCards.length]; const Icon=item.icon; return <article className="work-card" key={item.title}><div className="card-icon"><Icon/></div><span className="card-index">0{(work+offset)%workCards.length+1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Saiba mais <ArrowRight size={16}/></a></article> })}
        </div>
        <div className="carousel-dots">{workCards.map((_,i)=><button key={i} className={i===work?"active":""} onClick={()=>setWork(i)} aria-label={"Ir para "+(i+1)}/>)}</div>
      </section>

      <section id="como-funciona" className="process">
        <div className="process-intro"><div className="section-kicker">Como funciona</div><h2>Um processo simples,<br/><i>no seu ritmo.</i></h2><p>Você não precisa saber exatamente o que dizer ou por onde começar. A primeira conversa serve para entendermos o momento que você está vivendo.</p><a className="btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar primeira conversa <ArrowRight size={18}/></a></div>
        <div className="steps">
          {[["01","Primeiro contato","Você chama pelo WhatsApp e conta, do seu jeito, o que está buscando."],["02","Conversa inicial","Conhecemos sua história, suas necessidades e esclarecemos como será o acompanhamento."],["03","Plano de cuidado","Definimos a melhor forma de conduzir o processo, respeitando seu momento."],["04","Acompanhamento","Seguimos com constância, escuta e espaço para perceber mudanças ao longo do caminho."]].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
        </div>
      </section>

      <section className="focus-section">
        <div className="focus-copy"><div className="section-kicker">Para diferentes momentos</div><h2>O que está acontecendo <i>com você hoje?</i></h2><p>Não existe uma única razão para buscar terapia. O ponto de partida é aquilo que está pedindo atenção na sua vida agora.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre meu momento <ArrowRight size={17}/></a></div>
        <div className="focus-pills">{focus.map((x,i)=><div key={x} className={"focus-pill f"+i}><span>0{i+1}</span>{x}<ArrowUpRight size={15}/></div>)}</div>
      </section>

      <section className="testimonial-section">
        <div className="section-kicker">Experiências de cuidado</div><h2>Um espaço que pode fazer <i>diferença na sua rotina.</i></h2>
        <div className="testimonial-wrap"><button onClick={()=>setTestimonial((testimonial-1+testimonials.length)%testimonials.length)}><ChevronLeft/></button><article className="testimonial"><div className="stars">★★★★★</div><blockquote>“{testimonials[testimonial].quote}”</blockquote><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].detail}</span></article><button onClick={()=>setTestimonial((testimonial+1)%testimonials.length)}><ChevronRight/></button></div>
        <div className="carousel-dots">{testimonials.map((_,i)=><button key={i} className={i===testimonial?"active":""} onClick={()=>setTestimonial(i)} aria-label={"Depoimento "+(i+1)}/>)}</div>
      </section>

      <section className="online-section"><div className="online-art"><div className="orb"><Video size={30}/></div><span className="orbit one"/><span className="orbit two"/></div><div><div className="section-kicker">Atendimento online</div><h2>Seu cuidado também pode <i>caber na sua rotina.</i></h2><p>Sem deslocamentos e com mais flexibilidade para encaixar o acompanhamento na sua semana. Escolha um lugar tranquilo e reservado e esteja presente para você.</p><div className="online-points"><span><Check/> De onde você estiver</span><span><Check/> Horários combinados</span><span><Check/> Ambiente reservado</span></div><a className="btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Ver disponibilidade <ArrowRight size={18}/></a></div></section>

      <section id="faq" className="faq-section"><div className="faq-title"><div className="section-kicker">Perguntas frequentes</div><h2>Talvez sua dúvida<br/><i>esteja aqui.</i></h2><p>Se não encontrar o que procura, fale diretamente comigo pelo WhatsApp.</p><a className="outline-btn" href={whatsapp} target="_blank" rel="noreferrer">Tirar uma dúvida <MessageCircle size={17}/></a></div><div className="faq-list">{faq.map(([q,a],i)=><div className={"faq-item "+(openFaq===i?"open":"")} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></section>

      <section className="final-cta"><div className="final-decoration"><Flower2/></div><div className="section-kicker">Seu próximo passo</div><h2>Talvez hoje seja um bom dia<br/>para <i>começar por você.</i></h2><p>Você não precisa ter todas as respostas antes de procurar ajuda. Uma conversa pode ser o começo.</p><a className="btn-light" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Falar com Ana Feitosa</a><small>Atendimento online • Adultos e adolescentes</small></section>

      <footer><div className="footer-brand"><a href="#inicio" className="brand"><span>ANA</span> FEITOSA <small>Psicanalista • Terapeuta • Naturopata</small></a><p>Um espaço de escuta, cuidado e presença.</p></div><div className="footer-links"><a href="#sobre">Sobre</a><a href="#atendimentos">Atendimentos</a><a href="#como-funciona">Como funciona</a><a href="#faq">FAQ</a></div><div className="footer-contact"><span>Agendamentos</span><a href={whatsapp} target="_blank" rel="noreferrer">+55 24 99327-2763</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ana Feitosa. Todos os direitos reservados.</span><span>Atendimento online</span></div></footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
    </main>
  );
}

function ArrowDownIcon() { return <span className="arrow-down"><ChevronDown size={16}/></span>; }
