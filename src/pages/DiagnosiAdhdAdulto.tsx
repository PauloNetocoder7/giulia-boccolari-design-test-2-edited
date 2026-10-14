import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageFacade, BayHeading, ClosingDoor, Door } from '../components/Portico';

const segnali = [
  {
    title: 'Attenzione',
    desc: 'Difficoltà a mantenere la concentrazione, distrazioni frequenti o fatica a gestire attività prolungate.',
  },
  {
    title: 'Organizzazione',
    desc: 'Scadenze dimenticate, problemi nel pianificare, stimare i tempi o definire le priorità.',
  },
  {
    title: 'Avvio delle attività',
    desc: 'Difficoltà a iniziare o portare a termine compiti anche quando sono importanti.',
  },
  {
    title: 'Autoregolazione',
    desc: 'Impulsività, irrequietezza interna o difficoltà nella gestione delle reazioni emotive.',
  },
];

const fasi = [
  {
    title: 'Primo colloquio clinico',
    desc: "Esploriamo il motivo della richiesta, le difficoltà attuali, i contesti di vita e gli obiettivi dell'approfondimento.",
  },
  {
    title: 'Raccolta anamnestica',
    desc: "Ricostruiamo la storia evolutiva, scolastica, personale e familiare, considerando le caratteristiche presenti nell'infanzia e la loro evoluzione.",
  },
  {
    title: 'Interviste e strumenti diagnostici',
    desc: 'Utilizzo interviste cliniche strutturate e questionari standardizzati; quando necessario integro altri approfondimenti psicologici e cognitivi, considerando anche condizioni associate o spiegazioni alternative.',
  },
  {
    title: 'Restituzione e relazione scritta',
    desc: 'Condividiamo i risultati e il profilo emerso. Redigo una relazione psicodiagnostica che include le conclusioni cliniche e, se supportata dagli elementi raccolti, la formulazione diagnostica, oltre alle indicazioni successive.',
  },
];

const motivi = [
  'Rileggere la propria storia con maggiore consapevolezza.',
  "Distinguere l'ADHD da altre condizioni con caratteristiche simili e riconoscere eventuali condizioni associate.",
  'Identificare punti di forza e vulnerabilità nel funzionamento quotidiano.',
  'Orientare strategie e interventi personalizzati, quando indicati.',
  'Chiarire i successivi passaggi, anche rispetto a eventuali approfondimenti sanitari o documentazioni specifiche.',
];

const altriApprofondimenti = [
  {
    title: 'Autismo e profili dello spettro autistico',
    desc: 'Approfondimento delle caratteristiche comunicative, relazionali e sensoriali mediante colloqui clinici e strumenti specifici.',
  },
  {
    title: 'Plusdotazione e funzionamento cognitivo',
    desc: 'Esplorazione delle abilità cognitive e delle possibili discrepanze tra potenzialità e difficoltà quotidiane.',
  },
];

const domande = [
  {
    q: "È possibile diagnosticare l'ADHD anche in età adulta?",
    a: "Sì. Una valutazione dell'ADHD nell'adulto considera le difficoltà attuali e ricostruisce le caratteristiche presenti durante lo sviluppo, anche se in passato non erano state riconosciute.",
  },
  {
    q: 'La diagnosi viene formulata direttamente da te?',
    a: 'Sì. Mi occupo personalmente della valutazione psicodiagnostica e, quando i dati clinici soddisfano i criteri previsti, della formulazione della diagnosi psicologica di ADHD, con relativa relazione scritta.',
  },
  {
    q: 'È possibile fare la valutazione online?',
    a: 'Sì, il percorso può svolgersi anche online quando le modalità e gli strumenti scelti sono adeguati. Eventuali prove che richiedano una somministrazione in presenza vengono concordate separatamente.',
  },
  {
    q: 'Un questionario è sufficiente per avere la diagnosi?',
    a: "No. I questionari contribuiscono alla raccolta di informazioni, ma la diagnosi richiede un'integrazione clinica di anamnesi, colloqui, interviste e degli altri elementi utili.",
  },
  {
    q: 'Quanto dura il percorso?',
    a: "La durata varia in relazione alla complessità del quadro e agli approfondimenti necessari. Le fasi e le modalità vengono illustrate all'inizio del percorso.",
  },
  {
    q: "E se dalla valutazione non emergesse l'ADHD?",
    a: "La restituzione rimane utile per comprendere le difficoltà riportate, il funzionamento individuale e l'opportunità di eventuali approfondimenti alternativi.",
  },
  {
    q: 'La relazione diagnostica permette di ottenere tutele?',
    a: "La relazione può documentare il percorso svolto e le conclusioni cliniche. L'accesso a certificazioni, agevolazioni o misure specifiche dipende dai requisiti e dalle procedure previste per ciascun contesto.",
  },
];

export const DiagnosiAdhdAdulto: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: domande.map((d) => ({
      '@type': 'Question',
      name: d.q,
      acceptedAnswer: { '@type': 'Answer', text: d.a },
    })),
  };

  return (
    <>
      <SEO
        title="Diagnosi ADHD nell'adulto | In studio e online | Dott.ssa Giulia Boccolari"
        description="Valutazione psicodiagnostica e diagnosi dell'ADHD nell'adulto, in studio e online. Colloqui clinici, interviste, strumenti standardizzati, restituzione e relazione scritta."
        keywords={[
          'diagnosi ADHD adulto',
          'valutazione ADHD adulto',
          'diagnosi ADHD Modena',
          'diagnosi ADHD online',
          'ADHD nelle donne',
          'diagnosi tardiva ADHD',
        ]}
        jsonLd={jsonLd}
      />

      <PageFacade plaster="rosa" plaque="Diagnosi ADHD · Adulti · In studio e online" title="Diagnosi ADHD nell'adulto">
        <p className="font-display italic text-[1.15rem] sm:text-[1.25rem] leading-snug text-ferro">
          Comprendere il proprio funzionamento non significa ridurre la propria esperienza a un'etichetta. Significa poterla rileggere con maggiore consapevolezza.
        </p>
        <p className="text-ferro">
          L'ADHD (Disturbo da Deficit di Attenzione/Iperattività) è una condizione del neurosviluppo che può influenzare l'attenzione, le funzioni esecutive, l'organizzazione, la regolazione degli impulsi e diversi aspetti della vita quotidiana.
        </p>
        <p className="text-ferro">
          Molte persone giungono all'età adulta senza aver ricevuto una diagnosi, pur avendo incontrato difficoltà persistenti che non sempre sono state riconosciute o comprese.
        </p>
        <p className="text-ferro font-bold">
          Effettuo personalmente percorsi di valutazione psicodiagnostica finalizzati ad approfondire e, quando ne ricorrono i criteri clinici, formulare la diagnosi di ADHD.
        </p>
        <div className="pt-2">
          <Door to="/contatti" tone="terra">
            Richiedi informazioni sulla valutazione
          </Door>
        </div>
      </PageFacade>

      {/* Quando può essere utile una valutazione */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading title="Quando può essere utile una valutazione?">
            <p className="text-antracite">Alcune esperienze possono suggerire l'opportunità di un approfondimento clinico.</p>
          </BayHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ferro">
            {segnali.map((s, idx) => (
              <div
                key={s.title}
                className={`py-8 space-y-2 border-b border-ferro/25 ${idx % 2 === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'}`}
              >
                <h3 className="display-s text-ferro">{s.title}</h3>
                <p className="text-[0.98rem] text-antracite measure">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADHD nelle donne e diagnosi tardive */}
      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-5">
            <h2 className="display-l text-ferro">ADHD nelle donne e diagnosi tardive</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] text-ferro">
            <p className="measure">
              Non tutte le manifestazioni dell'ADHD corrispondono all'immagine più conosciuta di iperattività evidente. In alcune persone prevalgono la disattenzione, la difficoltà organizzativa o una sensazione continua di sovraccarico.
            </p>
            <p className="measure">
              Le caratteristiche possono essere compensate attraverso impegno, controllo e strategie costruite nel tempo. Anche quando la persona raggiunge buoni risultati nello studio, nel lavoro o nelle relazioni, il costo in termini di fatica può essere elevato.
            </p>
            <p className="measure">
              Per questo la valutazione considera non solo ciò che la persona riesce a fare, ma anche come ci riesce, quanto sforzo richiede e da quanto tempo vive queste difficoltà.
            </p>
            <blockquote className="measure border-l-4 border-terracotta bg-marmo px-6 py-5 font-display italic text-[1.15rem] leading-snug">
              Una diagnosi tardiva può offrire una chiave di lettura più accurata della propria storia. Non cancella le esperienze precedenti, ma può aiutare a comprenderle in modo diverso.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Come si svolge la valutazione */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-8">
          <BayHeading title="Come si svolge la valutazione?">
            <p className="text-antracite">
              Un percorso clinico strutturato, adattato alle caratteristiche e alla storia della persona.
            </p>
          </BayHeading>

          <ol className="border-t border-ferro">
            {fasi.map((f, idx) => (
              <li
                key={f.title}
                className="py-8 sm:py-10 border-b border-ferro/20 last:border-b-0 grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2"
              >
                <span className="sm:col-span-3 font-display text-terracotta-deep text-[1.05rem] tabular-nums pt-1">
                  Passo {idx + 1}
                </span>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="display-m text-ferro">{f.title}</h3>
                  <p className="text-antracite measure">{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Perché può essere importante una diagnosi */}
      <section className="plaster-rosa limewash">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="display-l text-ferro">Perché può essere importante una diagnosi?</h2>
            <p className="text-[1.05rem] text-ferro">
              Una diagnosi non esaurisce la complessità della persona. Può però offrire una cornice clinica per comprendere difficoltà, risorse e bisogni che, fino a quel momento, possono essere rimasti senza una spiegazione chiara.
            </p>
          </div>
          <ul className="lg:col-span-7 ruled text-[1.02rem] text-ferro">
            {motivi.map((m) => (
              <li key={m} className="py-3.5 flex items-baseline gap-3">
                <span className="tick text-terracotta-deep" aria-hidden="true" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dopo la diagnosi: la psicoeducazione ADHD */}
      <section className="plaster-terracotta limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="display-l text-marmo">Dopo la diagnosi: la psicoeducazione ADHD</h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[1.05rem] text-crema measure">
              Comprendere il proprio funzionamento può rappresentare l'inizio di un lavoro concreto sulla quotidianità. Quando utile, è possibile proseguire con un percorso di psicoeducazione individualizzato.
            </p>
            <p className="text-[1.05rem] text-crema measure">
              Il lavoro può riguardare l'organizzazione, la gestione del tempo, l'avvio delle attività, le funzioni esecutive, la regolazione emotiva e il riconoscimento dei propri bisogni.
            </p>
            <blockquote className="measure border-l-4 border-crema/70 pl-6 py-1 font-display italic text-[1.15rem] leading-snug text-marmo">
              L'obiettivo non è chiedere alla persona di funzionare come qualcun altro, ma costruire strategie concrete e sostenibili a partire dalle sue caratteristiche e dai contesti di vita.
            </blockquote>
            <Door to="/neurodivergenze-adulti" tone="marble">
              Scopri il percorso di psicoeducazione
            </Door>
          </div>
        </div>
      </section>

      {/* Altri approfondimenti: secondari rispetto alla diagnosi ADHD */}
      <section className="plaster-crema">
        <div className="portico py-14 sm:py-16 space-y-6">
          <h2 className="display-m text-ferro">Altri approfondimenti sulle neurodivergenze</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ferro/40">
            {altriApprofondimenti.map((a, idx) => (
              <div
                key={a.title}
                className={`py-6 space-y-1.5 border-b border-ferro/20 ${idx === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'}`}
              >
                <h3 className="font-display text-[1.08rem] font-semibold leading-snug text-ferro">{a.title}</h3>
                <p className="text-[0.95rem] text-antracite measure">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domande frequenti: sezioni espandibili */}
      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-24 space-y-8">
          <BayHeading title="Domande frequenti" />
          <div className="ruled max-w-4xl">
            {domande.map((d) => (
              <details key={d.q} className="group">
                <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="display-s text-ferro">{d.q}</h3>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 mt-0.5 text-terracotta-deep transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-6 pr-10 text-[1.02rem] text-ferro measure">{d.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingDoor
        plaster="rosa"
        plaque="Hai delle domande?"
        title="Possiamo partire dalla tua richiesta."
        actions={
          <Door to="/contatti" tone="terra">
            Richiedi informazioni
          </Door>
        }
      >
        <p>
          Se desideri approfondire la possibilità di ADHD o ricevere informazioni sulle modalità della valutazione, puoi contattarmi per un primo colloquio.
        </p>
      </ClosingDoor>
    </>
  );
};
