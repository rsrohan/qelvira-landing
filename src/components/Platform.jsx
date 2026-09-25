import { useState } from "react"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { platformTabs, contact } from "../data/site"
import PlatformPreview from "./PlatformPreview"

export default function Platform() {
  const [active, setActive] = useState(platformTabs[0].id)
  const tab = platformTabs.find((t) => t.id === active)

  return (
    <section id="platform" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">The Qelvira portal</p>
          <h2 className="section-title">One portal for supplies, rooms and maintenance</h2>
          <p className="mt-4 text-lg text-slate-600">
            Replace registers, WhatsApp groups and spreadsheets with a single view of your property.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
          role="tablist"
          aria-label="Portal features"
        >
          {platformTabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={active === id}
              aria-controls={`panel-${id}`}
              onClick={() => setActive(id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                active === id
                  ? "bg-brand-800 text-white shadow-sm"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="mt-6 grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-bold">{tab.headline}</h3>
            <ul className="mt-6 space-y-4">
              {tab.points.map((p) => (
                <li key={p} className="flex gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-leaf-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={contact.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Explore the portal preview <ExternalLink size={15} />
            </a>
          </div>
          <PlatformPreview id={tab.id} />
        </div>
      </div>
    </section>
  )
}
