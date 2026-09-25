import { steps } from "../data/site"

export default function HowItWorks() {
  return (
    <section id="how" className="bg-brand-950 py-20 text-brand-100 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-leaf-300">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">From first visit to measurable savings</h2>
          <p className="mt-4 text-lg text-brand-200">
            No big migration. We do the setup, your team keeps working.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-600 to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-500 text-white">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-leaf-300">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
