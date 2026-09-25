import { useState } from "react"
import { ArrowRight, Info } from "lucide-react"

// Savings are shown as a range, not a promise. 15% is a conservative floor; 40% is the ceiling we advertise.
const LOW = 0.15
const HIGH = 0.4

const inr = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n)

export default function SavingsCalculator() {
  const [spend, setSpend] = useState(150000)

  const low = spend * LOW
  const high = spend * HIGH

  return (
    <section id="savings" className="bg-gradient-to-b from-white to-brand-50/60 py-20 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Savings estimate</p>
          <h2 className="section-title">See what you could save each month</h2>
          <p className="mt-4 text-lg text-slate-600">
            Move the slider to your current monthly spend on housekeeping supplies and consumables. We'll show a
            realistic range. Your free audit gives you the exact number.
          </p>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-500">
            <Info size={16} className="mt-0.5 shrink-0" />
            Estimate only. Actual savings depend on your current vendor rates, leakage and usage patterns.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8">
          <label htmlFor="spend" className="text-sm font-semibold text-slate-700">
            Current monthly spend
          </label>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">{inr(spend)}</p>
          <input
            id="spend"
            type="range"
            min={25000}
            max={1000000}
            step={5000}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="mt-5 w-full accent-brand-800"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>₹25k</span>
            <span>₹10L</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-leaf-50 p-4">
              <p className="text-xs font-medium text-leaf-700">Monthly saving</p>
              <p className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                {inr(low)} – {inr(high)}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-50 p-4">
              <p className="text-xs font-medium text-brand-700">Yearly saving</p>
              <p className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                {inr(low * 12)} – {inr(high * 12)}
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-primary mt-6 w-full py-3.5">
            Get my exact number with a free audit <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
