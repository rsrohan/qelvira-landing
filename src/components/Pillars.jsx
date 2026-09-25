import { pillars } from "../data/site"

export default function Pillars() {
  return (
    <section id="why" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Qelvira</p>
          <h2 className="section-title">Three problems every housekeeping manager knows. Solved.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Most properties lose money to things they can't see. Qelvira makes them visible, then fixes them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, problem, solution }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>

              <div className="mt-4 rounded-lg bg-rose-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-600">The problem</p>
                <p className="mt-1 text-sm text-slate-700">{problem}</p>
              </div>
              <div className="mt-3 flex-1 rounded-lg bg-leaf-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-leaf-700">With Qelvira</p>
                <p className="mt-1 text-sm text-slate-700">{solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
