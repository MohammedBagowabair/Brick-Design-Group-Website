import { useState } from 'react'
import { useI18n } from './i18n'
import { Reveal } from './Reveal'
import {
  phone, wa, email, maps, facebook, pitchWa, projects, asset,
} from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-brick-800/15 bg-white/70 p-1 text-xs font-semibold tracking-wide shadow-sm backdrop-blur">
      {(['en', 'ms'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 rounded-full px-2.5 transition-all duration-300 ${
            lang === l ? 'bg-brick-700 text-white shadow-sm' : 'text-charcoal/60 hover:text-charcoal'
          }`}
          aria-pressed={lang === l}
        >
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

function Nav() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const links = [
    ['#about', 'nav_about'], ['#services', 'nav_services'], ['#work', 'nav_work'],
    ['#process', 'nav_process'], ['#contact', 'nav_contact'],
  ] as const
  return (
    <header className="glass-header fixed inset-x-0 top-0 z-50 border-b border-brick-900/8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-brick-900 sm:text-lg">
          <span className="relative inline-block h-8 w-8 shrink-0 overflow-hidden rounded bg-brick-700 shadow-md transition group-hover:scale-105" aria-hidden>
            <span className="absolute inset-x-1 top-1.5 h-1.5 rounded-sm bg-brick-100/90" />
            <span className="absolute inset-x-1 top-3.5 h-1.5 rounded-sm bg-brick-200/80" />
            <span className="absolute inset-x-1 top-5.5 h-1.5 rounded-sm bg-brick-100/70" />
          </span>
          <span className="truncate">Brick Design</span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-wide text-charcoal/70 lg:flex">
          {links.map(([href, key]) => (
            <a key={href} href={href} className="relative transition hover:text-brick-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brick-700 after:transition-all hover:after:w-full">
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <a href={`https://wa.me/${wa}`}
            className="hidden min-h-11 items-center rounded-full bg-brick-700 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brick-900/15 transition hover:bg-brick-800 hover:shadow-lg sm:inline-flex">
            {t('nav_cta')}
          </a>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-brick-800/12 bg-white/50 lg:hidden"
            aria-expanded={open} aria-label={open ? t('menu_close') : t('menu_open')}
            onClick={() => setOpen((v) => !v)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-brick-900/8 bg-brick-50/95 px-4 py-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([href, key]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                className="min-h-11 rounded-xl px-3 py-3 text-base font-medium text-charcoal transition hover:bg-brick-100">
                {t(key)}
              </a>
            ))}
            <a href={`https://wa.me/${wa}`} onClick={() => setOpen(false)}
              className="mt-2 min-h-12 rounded-full bg-brick-700 px-4 py-3 text-center text-sm font-semibold text-white">
              {t('nav_cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* Cinematic hero */}
      <section className="relative overflow-hidden border-b-[6px] border-brick-800 pt-20 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brick-100 via-brick-50 to-brick-200/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-14 sm:gap-10 md:grid-cols-12 md:px-6 md:pb-20 lg:pb-28">
          <div className="md:col-span-7">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brick-700 sm:text-xs">
                <span className="h-px w-8 bg-brick-600" aria-hidden />
                {t('hero_kicker')}
              </p>
              <h1 className="font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {t('hero_title')}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/70 sm:mt-7 sm:text-lg">{t('hero_sub')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <a href={`https://wa.me/${wa}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brick-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brick-900/20 transition hover:-translate-y-0.5 hover:bg-brick-800">
                  {t('hero_cta')}
                </a>
                <a href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-brick-800/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-charcoal backdrop-blur transition hover:border-brick-700 hover:bg-white">
                  {t('hero_cta2')}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="img-zoom relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border-[5px] border-brick-800 shadow-2xl shadow-brick-950/25 md:max-w-none">
                <img src={asset('images/hero.jpg')} alt="" className="h-full w-full object-cover" width={800} height={1000} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brick-950/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium tracking-wide text-brick-50">
                  Brick Design Group · Kuala Lumpur
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-700">{t('about_label')}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-4xl">
              {t('about_title')}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <p className="text-base leading-relaxed text-charcoal/75 sm:text-lg">{t('about_body')}</p>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t-[3px] border-brick-800/15 pt-8">
              {([['about_stat1','about_stat1_label'],['about_stat2','about_stat2_label'],['about_stat3','about_stat3_label']] as const).map(([v,l]) => (
                <div key={v} className="rounded-lg bg-white/60 p-3 shadow-sm ring-1 ring-brick-800/5 sm:p-4">
                  <p className="font-display text-2xl font-semibold tracking-tight text-brick-700 sm:text-4xl">{t(v)}</p>
                  <p className="mt-1 text-[11px] text-charcoal/55 sm:text-sm">{t(l)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="relative border-y-[5px] border-brick-800 bg-charcoal text-brick-50 grain">
        <div className="relative z-[2] mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-300">{t('services_label')}</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t('services_title')}</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[1,2,3,4].map((n) => (
              <Reveal key={n} delay={n * 70}>
                <article className="group h-full border border-brick-50/10 bg-brick-950/50 p-6 transition hover:border-brick-400/35 hover:bg-brick-950/80 sm:p-7">
                  <p className="font-display text-5xl font-semibold text-brick-600/50 transition group-hover:text-brick-500">0{n}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold">{t(`svc${n}_title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brick-100/65">{t(`svc${n}_body`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-700">{t('work_label')}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t('work_title')}</h2>
            </div>
            <p className="max-w-md text-sm text-charcoal/50">{t('work_note')}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.titleEN} delay={(i % 3) * 80}>
              <figure className="img-zoom group relative overflow-hidden border border-brick-800/10 bg-white shadow-md shadow-brick-900/5">
                <img src={asset(p.img)} alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" loading="lazy" width={800} height={600} />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brick-950/85 via-brick-950/20 to-transparent p-5 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  <p className="font-display text-lg font-semibold text-white">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                  <p className="text-sm text-brick-200/80">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                </figcaption>
                <figcaption className="border-t border-brick-800/10 px-4 py-3 sm:hidden">
                  <p className="font-display text-base font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                  <p className="text-sm text-charcoal/55">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="bg-brick-100/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-700">{t('process_label')}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t('process_title')}</h2>
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[1,2,3,4].map((n) => (
              <Reveal key={n} delay={n * 60}>
                <li className="relative h-full border-l-[5px] border-brick-700 bg-white/90 p-5 shadow-sm backdrop-blur">
                  <span className="font-display text-5xl font-bold leading-none text-brick-200">{n}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{t(`step${n}_t`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{t(`step${n}_b`)}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-700">{t('testimonials_label')}</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t('testimonials_title')}</h2>
          <blockquote className="mt-8 font-display text-xl italic leading-relaxed text-charcoal/80 sm:text-2xl md:text-[1.75rem]">
            “{t('test1')}”
          </blockquote>
          <p className="mt-5 text-sm font-semibold tracking-wide text-brick-700">Google · 5.0 ★</p>
        </Reveal>
      </section>

      <section id="contact" className="border-t-[5px] border-brick-800 bg-charcoal text-brick-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:gap-12 sm:py-20 md:grid-cols-2 md:px-6 md:py-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brick-300">{t('contact_label')}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t('contact_title')}</h2>
            <p className="mt-6 text-sm text-brick-100/65 sm:text-base">{t('contact_hours')}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brick-100/80 sm:text-base">{t('contact_address')}</p>
            <div className="mt-9 flex flex-wrap gap-2.5">
              <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center rounded-full bg-brick-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-brick-500">{t('contact_phone')}</a>
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-emerald-500">{t('contact_wa')}</a>
              <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center rounded-full border border-brick-50/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/5">{t('contact_email')}</a>
              <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-brick-50/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/5">{t('contact_map')}</a>
              <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-brick-50/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/5">{t('contact_fb')}</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-sm border-2 border-brick-50/10 shadow-2xl">
              <iframe title="Brick Design Group map"
                src="https://maps.google.com/maps?q=Brick%20Design%20Group%20Sdn%20Bhd%20Taman%20Danau%20Desa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full min-h-[240px] grayscale contrast-125 sm:h-72 md:h-full md:min-h-[320px]"
                loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-brick-800/20 bg-brick-950 px-4 py-10 text-center text-sm text-brick-200/75 md:px-6">
        <p className="mx-auto max-w-xl leading-relaxed">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-4 inline-flex min-h-11 items-center font-semibold text-brick-300 underline-offset-4 transition hover:text-brick-100 hover:underline">
          {t('footer_pitch_cta')} →
        </a>
        <p className="mt-7 text-xs text-brick-200/35">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
