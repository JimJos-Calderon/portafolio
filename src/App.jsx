const contacts = [
  {
    label: 'Email',
    value: 'jimjos.calderon@gmail.com',
    href: 'mailto:jimjos.calderon@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/JimJos-Calderon',
    href: 'https://github.com/JimJos-Calderon',
  },
  {
    label: 'Teléfono',
    value: '+34 662 575407',
    href: 'tel:+34662575407',
  },
]

const projects = [
  {
    title: 'Nuestra Lista',
    description:
      'Plataforma para crear listas de películas y series compartidas. Incluye sistema de calificación de 5 estrellas, likes/dislikes y un feed de historial de actividad.',
    tag: 'Fullstack',
    link: 'https://jandn.onrender.com/',
  },
  {
    title: 'ReadyPlater Blog',
    description:
      'Blog desarrollado como proyecto de experimentación para poner en práctica maquetación, estilos y diseño de interfaces.',
    tag: 'Frontend',
    link: 'https://readyplaterblog.onrender.com/',
  },
]

function IconWrap({ children }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-coral text-cream">
      {children}
    </span>
  )
}

function ContactIcon({ label }) {
  if (label === 'Email') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M9 18c-4 1.5-4-2-6-2" />
        <path d="M15 21v-3.5a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.7 6.8-7.8A6 6 0 0 0 19 3.8 5.6 5.6 0 0 0 18.9 0S17.7-.4 15 1.4a13 13 0 0 0-6 0C6.3-.4 5.1 0 5.1 0A5.6 5.6 0 0 0 5 3.8 6 6 0 0 0 3.2 7c0 6.1 3.5 7.4 6.8 7.8a3.5 3.5 0 0 0-1 2.7V21" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.5 9.5a16 16 0 0 0 7 7l1.4-1.4a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9z" />
    </svg>
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
      <IconWrap>
        <ContactIcon label={label} />
      </IconWrap>

      <p className="text-sm font-medium sm:text-base">
        <span className="mr-2 font-bold uppercase">{label}:</span>
        <span className="underline-offset-4 group-hover:underline">{value}</span>
      </p>
    </a>
  )
}

function ProjectCard({ title, description, tag, link }) {
  return (
    <article className="rounded-2xl border-4 border-ink bg-cream p-4 shadow-[8px_8px_0px_0px_#1F1F1F] transition-transform hover:-translate-y-1 sm:p-5">
      <div className="mb-4 h-44 rounded-xl border-4 border-ink bg-[#e9e3db] sm:h-52" />

      <span className="inline-flex rounded-full border-2 border-ink bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
        {tag}
      </span>

      <h3 className="mt-3 text-xl font-extrabold leading-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed sm:text-base">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-xl border-2 border-ink bg-cream px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream"
      >
        Ver Proyecto
      </a>
    </article>
  )
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute left-[-2rem] top-20 -z-10 hidden xl:block">
        <svg
          viewBox="0 0 280 520"
          className="h-[540px] w-[260px] text-ink/25"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M180 50 80 260l100 210" />
          <path d="M245 50 145 260l100 210" />
          <path d="M85 50 35 260l50 210" />
          <path d="M15 150h70M15 260h70M15 370h70" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-[-1rem] top-28 -z-10 hidden xl:block">
        <svg
          viewBox="0 0 320 560"
          className="h-[560px] w-[300px] text-ink/25"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="70" y="30" width="180" height="330" rx="26" />
          <path d="M105 95h110M105 140h110M105 185h75" />
          <ellipse cx="160" cy="445" rx="95" ry="36" />
          <ellipse cx="160" cy="492" rx="95" ry="36" />
          <path d="M65 445v47M255 445v47" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex min-h-[95vh] flex-col justify-between pb-20">
          <div>
            <header className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[8px_8px_0px_0px_#1F1F1F] sm:p-10">
              <h1 className="text-center font-display text-6xl uppercase leading-none text-coral sm:text-8xl md:text-9xl">
                JIMJOS
              </h1>
              <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.26em] sm:text-sm">
                DESARROLLADOR DE APLICACIONES MULTIPLATAFORMA
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
                  Soy JimJos, desarrollador de aplicaciones multiplataforma. Me apasiona el diseño
                  de interfaces frontend, pero también construyo y manejo el backend. Trabajo con
                  tecnologías como Java, TypeScript, React, Astro, Angular y JavaScript para crear
                  soluciones digitales completas, robustas y atractivas.
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
                      JIMJOS
                    </p>
                    <p className="mt-3 text-xs font-semibold tracking-[0.28em] sm:text-sm">
                      Frontend / Backend / Multiplataforma
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <a
            href="#proyectos"
            className="mx-auto mt-8 inline-flex flex-col items-center gap-2 rounded-xl border-2 border-ink bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-0.5 sm:text-sm"
          >
            Scroll para ver proyectos
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>

        <section id="proyectos" className="mt-16">
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
