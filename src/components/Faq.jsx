import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "../data/site"

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions we hear a lot</h2>
          <p className="mt-4 text-slate-600">
            Something else on your mind?{" "}
            <a href="#contact" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Ask us directly
            </a>
            .
          </p>
        </div>

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <li key={q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-slate-900"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    {q}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!isOpen} className="pb-5 pr-10 leading-relaxed text-slate-600">
                  {a}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
