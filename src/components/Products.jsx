import { ArrowRight } from "lucide-react"
import { productCategories, comingSoon } from "../data/site"

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Products</p>
            <h2 className="section-title">Everything your housekeeping team uses, from one supplier</h2>
            <p className="mt-4 text-lg text-slate-600">
              Premium, bulk-packed supplies at institutional rates, delivered and tracked through the portal.
            </p>
          </div>
          <a href="#contact" className="btn-secondary shrink-0 self-start lg:self-auto">
            Request the full catalogue <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {productCategories.map(({ icon: Icon, name, items }) => (
            <article
              key={name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-leaf-300 hover:bg-leaf-50/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-colors group-hover:bg-leaf-100 group-hover:text-leaf-700">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-bold">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{items}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-slate-900">Coming soon: facility services</p>
              <p className="mt-0.5 text-sm text-slate-600">Book services the same way you order supplies.</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {comingSoon.map(({ icon: Icon, name, when }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200"
                >
                  <Icon size={15} className="text-brand-600" />
                  {name}
                  <span className="text-xs text-slate-400">{when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
