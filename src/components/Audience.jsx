import { audiences } from "../data/site"

export default function Audience() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-x flex flex-col items-center gap-5 py-8 lg:flex-row lg:justify-between">
        <p className="text-sm font-medium text-slate-500">Built for properties where cleanliness is non-negotiable</p>
        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 lg:w-auto lg:gap-8">
          {audiences.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Icon size={18} className="shrink-0 text-leaf-600" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
