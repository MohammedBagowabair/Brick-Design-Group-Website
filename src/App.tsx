import { useI18n } from './i18n'
import {
  phone,
  wa,
  email,
  maps,
  facebook,
  pitchWa,
  projects,
} from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex items-center gap-1 rounded-full border border-brick-800/20 bg-white/80 p-1 text-xs font-semibold tracking-wide backdrop-blur">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition ${lang === 'en' ? 'bg-brick-700 text-white' : 'text-charcoal/70 hover:text-charcoal'}`}
        aria-pressed={lang === 'en'}
      >
        {t('lang_en')}
      </button>
      <button
        type="button"
        onClick={() => setLang('ms')}
        className={`rounded-full px-2.5 py-1 transition ${lang === 'ms' ? 'bg-brick-700 text-white' : 'text-charcoal/70 hover:text-charcoal'}`}
        aria-pressed={lang === 'ms'}
      >
        {t('lang_ms')}
      </button>
    </div>
  )
}

function Nav() {
  const { t } = useI18n()
  const links = [
    ['#about', 'nav_about'],
    ['#services', 'nav_services'],
    ['#work', 'nav_work'],
    ['#process', 'nav_process'],
    ['#contact', 'nav_contact'],
  ] as const
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brick-900/10 bg-brick-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-brick-900">
          <span className="inline-block h-7 w-7 rounded bg-brick-700 shadow-sm" aria-hidden />
          Brick Design
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/80 md:flex">
          {links.map(([href, key]) => (
            <a key={href} href={href} className="hover:text-brick-700">
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href={`https://wa.me/${wa}`}
            className="hidden rounded-full bg-brick-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brick-800 sm:inline-flex"
          >
            {t('nav_cta')}
          </a>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  const { t, lang } = useI18n()

  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-brick-800 pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brick-200/60 via-brick-50 to-brick-50" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:grid-cols-12 md:px-6 md:pb-24">
          <div className="md:col-span-7">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">
              {t('hero_kicker')}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {t('hero_title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">{t('hero_sub')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${wa}`}
                className="inline-flex items-center rounded-full bg-brick-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brick-800"
              >
                {t('hero_cta')}
              </a>
              <a
                href="#work"
                className="inline-flex items-center rounded-full border-2 border-brick-800/20 bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-brick-700"
              >
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-4 border-brick-800 shadow-2xl shadow-brick-900/20">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brick-950/80 to-transparent p-4 text-sm text-brick-50">
                Brick Design Group · KL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('about_label')}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl">
              {t('about_title')}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-charcoal/80">{t('about_body')}</p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-brick-800/15 pt-8">
              {[
                ['about_stat1', 'about_stat1_label'],
                ['about_stat2', 'about_stat2_label'],
                ['about_stat3', 'about_stat3_label'],
              ].map(([v, l]) => (
                <div key={v}>
                  <p className="font-display text-3xl font-semibold text-brick-700">{t(v)}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{t(l)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y-4 border-brick-800 bg-charcoal text-brick-50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-300">{t('services_label')}</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">{t('services_title')}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <article
                key={n}
                className="border border-brick-50/15 bg-brick-950/40 p-6 transition hover:border-brick-400/40"
              >
                <p className="font-display text-5xl font-semibold text-brick-600/80">0{n}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{t(`svc${n}_title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brick-100/70">{t(`svc${n}_body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('work_label')}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{t('work_title')}</h2>
          </div>
          <p className="max-w-md text-sm text-charcoal/55">{t('work_note')}</p>
        </div>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((p) => (
            <figure key={p.titleEN} className="mb-5 break-inside-avoid overflow-hidden border-2 border-brick-800/10 bg-white shadow-sm">
              <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="border-t-2 border-brick-800/10 px-4 py-3">
                <p className="font-display text-lg font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-sm text-charcoal/55">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-brick-100/80">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('process_label')}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{t('process_title')}</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="relative border-l-4 border-brick-700 bg-white p-5 shadow-sm">
                <span className="font-display text-4xl font-bold text-brick-200">{n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{t(`step${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{t(`step${n}_b`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-700">{t('testimonials_label')}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{t('testimonials_title')}</h2>
        <blockquote className="mt-8 font-display text-xl italic leading-relaxed text-charcoal/85 md:text-2xl">
          “{t('test1')}”
        </blockquote>
        <p className="mt-4 text-sm font-medium text-brick-700">Google · 5.0 ★</p>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t-4 border-brick-800 bg-charcoal text-brick-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-300">{t('contact_label')}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{t('contact_title')}</h2>
            <p className="mt-6 text-brick-100/70">{t('contact_hours')}</p>
            <p className="mt-4 max-w-md leading-relaxed text-brick-100/80">{t('contact_address')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${phone}`} className="rounded-full bg-brick-600 px-5 py-2.5 text-sm font-semibold hover:bg-brick-500">
                {t('contact_phone')}
              </a>
              <a href={`https://wa.me/${wa}`} className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-500">
                {t('contact_wa')}
              </a>
              <a href={`mailto:${email}`} className="rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">
                {t('contact_email')}
              </a>
              <a href={maps} target="_blank" rel="noreferrer" className="rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">
                {t('contact_map')}
              </a>
              <a href={facebook} target="_blank" rel="noreferrer" className="rounded-full border border-brick-50/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">
                {t('contact_fb')}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border-2 border-brick-50/10">
            <iframe
              title="Brick Design Group map"
              src="https://maps.google.com/maps?q=Brick%20Design%20Group%20Sdn%20Bhd%20Taman%20Danau%20Desa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full grayscale contrast-125 md:h-full min-h-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pitch footer */}
      <footer className="border-t border-brick-800/20 bg-brick-950 px-4 py-8 text-center text-sm text-brick-200/80 md:px-6">
        <p>{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex font-semibold text-brick-300 underline-offset-4 hover:underline">
          {t('footer_pitch_cta')} →
        </a>
        <p className="mt-6 text-xs text-brick-200/40">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
