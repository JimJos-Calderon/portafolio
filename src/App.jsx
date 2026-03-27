const contacts = [
  {
    label: 'Email',
    value: 'hola@tuportfolio.com',
    href: 'mailto:hola@tuportfolio.com',
  },
  {
    label: 'Behance',
    value: 'behance.net/tuperfil',
    href: 'https://www.behance.net/',
  },
  {
    label: 'Telefono',
    value: '+34 600 000 000',
    href: 'tel:+34600000000',
  },
]

const projects = [
  {
    title: 'Brand Identity - Atlas Tools',
    description:
      'Sistema de marca para estudio industrial con logos, grilla modular y piezas editoriales.',
    tag: 'Branding',
  },
  {
    title: 'Poster Series - Noise Club',
    description:
      'Serie de posters con line art, tipografia extrema y bloques de color coral para eventos.',
    tag: 'Editorial',
  },
  {
    title: 'Packaging - Kettle Roasters',
    description:
      'Diseno de empaque con narrativa visual de comic y composicion neo-brutalista.',
    tag: 'Packaging',
  },
  {
    title: 'Campaign - Street Culture Fest',
    description:
      'Concepto visual para social ads, motion stills y piezas de via publica.',
    tag: 'Campaign',
  },
  {
    title: 'Art Zine Vol. 02',
    description:
      'Direccion de arte para revista indie con ritmo tipografico y lenguaje retro.',
    tag: 'Art Direction',
  },
  {
    title: 'Landing Visual Kit',
    description:
      'Biblioteca visual para landings: hero, cards, botones y bloques de testimonio.',
    tag: 'UI System',
  },
]

function IconWrap({ children }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-coral text-cream">
      {children}
    </span>
  )
}

function ContactItem({ label, value, href }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-xl border-2 border-transparent p-1 transition-all hover:border-ink hover:bg-[#f3efe9]"
    >
      {label === 'Email' && (
        <IconWrap>
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </IconWrap>
      )}
      {label === 'Behance' && (
        <IconWrap>
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            <path d="M4 7h6a3 3 0 1 1 0 6H4z" />
            <path d="M4 13h7a3 3 0 1 1 0 6H4z" />
            <path d="M15 8h5M15 12h5M15 16h5" />
          </svg>
        </IconWrap>
      )}
      {label === 'Telefono' && (
        <IconWrap>
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.5 9.5a16 16 0 0 0 7 7l1.4-1.4a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9z" />
          </svg>
        </IconWrap>
      )}

      <p className="text-sm font-medium sm:text-base">
        <span className="mr-2 font-bold uppercase">{label}:</span>
        <span className="underline-offset-4 group-hover:underline">{value}</span>
      </p>
    </a>
  )
}

function ProjectCard({ title, description, tag }) {
  return (
    <article className="rounded-2xl border-4 border-ink bg-cream p-4 shadow-[8px_8px_0px_0px_#1F1F1F] transition-transform hover:-translate-y-1 sm:p-5">
      <div className="mb-4 h-44 rounded-xl border-4 border-ink bg-[#e9e3db] sm:h-52" />

      <span className="inline-flex rounded-full border-2 border-ink bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
        {tag}
      </span>

      <h3 className="mt-3 text-xl font-extrabold leading-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed sm:text-base">{description}</p>

      <button
        type="button"
        className="mt-5 inline-flex rounded-xl border-2 border-ink bg-cream px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream"
      >
        Ver Proyecto
      </button>
    </article>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[8px_8px_0px_0px_#1F1F1F] sm:p-10">
          <h1 className="text-center font-display text-6xl uppercase leading-none text-coral sm:text-8xl md:text-9xl">
            PORTFOLIO
          </h1>
          <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.26em] sm:text-sm">
            GRAPHIC DESIGN &amp; ILLUSTRATION
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-xl border-2 border-ink bg-coral px-5 py-2 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
            >
              Contactar
            </button>
            <button
              type="button"
              className="rounded-xl border-2 border-ink bg-cream px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream"
            >
              Descargar CV
            </button>
          </div>
        </header>

        <section className="mt-14 grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none text-coral sm:text-6xl">
              HELLO!
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 sm:text-base">
              Soy disenador visual enfocado en branding, ilustracion y direccion de arte.
              Construyo identidades con caracter, contraste y un lenguaje grafico propio.
              Mi objetivo: que tu marca se vea unica y se recuerde de verdad.
            </p>

            <div className="mt-8 space-y-3">
              {contacts.map((contact) => (
                <ContactItem key={contact.label} {...contact} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-4 border-ink bg-[#f3efe9] p-6 shadow-[8px_8px_0px_0px_#1F1F1F]">
            <div className="flex min-h-[260px] items-center justify-center rounded-xl border-4 border-dashed border-ink/70 p-6 sm:min-h-[320px]">
              <div className="text-center">
                <p className="font-display text-4xl uppercase leading-none sm:text-5xl">
                  Creative
                  <br />
                  Studio
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
                  Line Art / Retro / Industrial
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-left font-display text-5xl uppercase leading-none sm:text-6xl">
              PROYECTOS
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              seleccion 2026
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
