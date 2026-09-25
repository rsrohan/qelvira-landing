import { ArrowRight, Check } from "lucide-react"
import DashboardMock from "./DashboardMock"
import WhatsAppIcon from "./WhatsAppIcon"
import { whatsappLink } from "../data/site"

const highlights = ["Free on-site audit", "Free sample kit", "Live portal demo"]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-leaf-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-800">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
            Smart Systems. Premium Hygiene. Institutional Excellence.
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            Cut housekeeping costs by <span className="text-leaf-600">up to 40%</span>, without cutting corners.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Qelvira supplies premium hygiene products <strong className="font-semibold text-slate-800">and</strong>{" "}
            gives you a simple portal that tracks every item from store room to guest room, so leakage stops,
            every clean is photo-verified, and you only pay for what you use.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary px-6 py-3.5 text-base">
              Get a free sample kit & demo <ArrowRight size={18} />
            </a>
            <a
              href={whatsappLink("Hi Qelvira, I'd like to know more about your supplies and software.")}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3.5 text-base"
            >
              <WhatsAppIcon className="text-[#25D366]" /> Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-1.5 text-sm text-slate-600">
                <Check size={16} className="text-leaf-600" /> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md sm:pb-10 lg:max-w-none">
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}
