import { useState } from 'react'
import { useI18n } from './i18n'
import {
  phone, wa, email, maps, facebook, pitchWa, projects, asset,
} from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex items-center gap-1 rounded-full border border-brick-800/20 bg-white/90 p-1 text-xs font-semibold tracking-wide">
      <button type="button" onClick={() => setLang('en')}
        className={`min-h-9 min-w-9 rounded-full px-2.5 transition ${lang === 'en' ? 'bg-brick-700 text-white' : 'text-charcoal/70'}`}
        aria-pressed={lang === 'en'}>{t('lang_en')}</button>
      <button type="button" onClick={() => setLang('ms')}
        className={`min-h-9 min-w-9 rounded-full px-2.5 transition ${lang === 'ms' ? 'bg-brick-700 text-white' : 'text-charcoal/70'}`}
        aria-pressed={lang === 'ms'}>{t('lang_ms')}</button>
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brick-900/10 bg-brick-50/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight text-brick-900 sm:text-lg">
          <span className="inline-block h-7 w-7 shrink-0 rounded bg-brick-700" aria-hidden />
          <span className="truncate">Brick Design</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/80 lg:flex">
          {links.map(([href, key]) => (
            <a key={href} href={href} className="hover:text-brick-700">{t(key)}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <a href={`https://wa.me/${wa}`}
            className="hidden min-h-11 items-center rounded-full bg-brick-700 px-4 py-2 text-sm font-semibold text-white sm:inline-flex hover:bg-brick-800">
            {t('nav_cta')}
          </a>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brick-800/15 lg:hidden"
            aria-expanded={open} aria-label={open ? t('menu_close') : t('menu_open')}
            onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">{open ? t('menu_close') : t('menu_open')}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-brick-900/10 bg-brick-50 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([href, key]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                className="min-h-11 rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-brick-100">
                {t(key)}
              </a>
            ))}
            <a href={`https://wa.me/${wa}`} onClick={() => setOpen(false)}
              className="mt-2 min-h-11 rounded-full bg-brick-700 px-4 py-3 text-center text-sm font-semibold text-white">
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

      <section className="relative overflow-hidden border-b-4 border-brick-800 pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brick-200/60 via-brick-50 to-brick-50" />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:gap-10 md:grid-cols-12 md:px-6 md:pb-24">
          <div className="md:col-span-7">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brick-700 sm:mb-4 sm:text-xs sm:tracking-[0.2em]">
              {t('hero_kicker')}
            </p>
            <h1 className="font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
              {t('hero_title')}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75 sm:mt-6 sm:text-lg">{t('hero_sub')}</p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a href={`https://wa.me/${wa}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brick-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brick-800">
                {t('hero_cta')}
              </a>
              <a href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-brick-800/20 bg-white px-6 py-3 text-sm font-semibold text-charcoal hover:border-brick-700">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border-4 border-brick-800 shadow-2xl shadow-brick-900/20 md:max-w-none">
              <img src={asset('images/hero.jpg')} alt="" className="h-full w-full object-cover" width={800} height={1000} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brick-950/80 to-transparent p-4 text-sm text-brick-50">
                Brick Design Group · KL
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('about_label')}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-charcoal sm:text-3xl md:text-4xl">{t('about_title')}</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">{t('about_body')}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t-2 border-brick-800/15 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
              {([['about_stat1','about_stat1_label'],['about_stat2','about_stat2_label'],['about_stat3','about_stat3_label']] as const).map(([v,l]) => (
                <div key={v}>
                  <p className="font-display text-2xl font-semibold text-brick-700 sm:text-3xl">{t(v)}</p>
                  <p className="mt-1 text-xs text-charcoal/60 sm:text-sm">{t(l)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y-4 border-brick-800 bg-charcoal text-brick-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-300">{t('services_label')}</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-3xl md:text-4xl">{t('services_title')}</h2>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {[1,2,3,4].map((n) => (
              <article key={n} className="border border-brick-50/15 bg-brick-950/40 p-5 sm:p-6">
                <p className="font-display text-4xl font-semibold text-brick-600/80 sm:text-5xl">0{n}</p>
                <h3 className="mt-3 font-display text-lg font-semibold sm:mt-4 sm:text-xl">{t(`svc${n}_title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brick-100/70">{t(`svc${n}_body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('work_label')}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">{t('work_title')}</h2>
          </div>
          <p className="max-w-md text-sm text-charcoal/55">{t('work_note')}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.titleEN} className="overflow-hidden border-2 border-brick-800/10 bg-white shadow-sm">
              <img src={asset(p.img)} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" width={800} height={600} />
              <figcaption className="border-t-2 border-brick-800/10 px-4 py-3">
                <p className="font-display text-base font-semibold sm:text-lg">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-sm text-charcoal/55">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="process" className="bg-brick-100/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('process_label')}</p>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">{t('process_title')}</h2>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-4">
            {[1,2,3,4].map((n) => (
              <li key={n} className="relative border-l-4 border-brick-700 bg-white p-5 shadow-sm">
                <span className="font-display text-4xl font-bold text-brick-200">{n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold sm:text-xl">{t(`step${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{t(`step${n}_b`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('testimonials_label')}</p>
        <h2 className="mt-3 font-display text-xl font-semibold sm:text-2xl md:text-3xl">{t('testimonials_title')}</h2>
        <blockquote className="mt-6 font-display text-lg italic leading-relaxed text-charcoal/85 sm:mt-8 sm:text-xl md:text-2xl">
          “{t('test1')}”
        </blockquote>
        <p className="mt-4 text-sm font-medium text-brick-700">Google · 5.0 ★</p>
      </section>

      <section id="contact" className="border-t-4 border-brick-800 bg-charcoal text-brick-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:gap-12 sm:py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-300">{t('contact_label')}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">{t('contact_title')}</h2>
            <p className="mt-5 text-sm text-brick-100/70 sm:mt-6 sm:text-base">{t('contact_hours')}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brick-100/80 sm:text-base">{t('contact_address')}</p>
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center rounded-full bg-brick-600 px-5 py-2.5 text-sm font-semibold hover:bg-brick-500">{t('contact_phone')}</a>
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-500">{t('contact_wa')}</a>
              <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">{t('contact_email')}</a>
              <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">{t('contact_map')}</a>
              <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">{t('contact_fb')}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border-2 border-brick-50/10">
            <iframe title="Brick Design Group map"
              src="https://maps.google.com/maps?q=Brick%20Design%20Group%20Sdn%20Bhd%20Taman%20Danau%20Desa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full min-h-[240px] grayscale contrast-125 sm:h-72 md:h-full"
              loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="border-t border-brick-800/20 bg-brick-950 px-4 py-8 pb-10 text-center text-sm text-brick-200/80 md:px-6">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-brick-300 underline-offset-4 hover:underline">
          {t('footer_pitch_cta')} →
        </a>
        <p className="mt-6 text-xs text-brick-200/40">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
