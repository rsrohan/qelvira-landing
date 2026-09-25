import { AlertTriangle, Camera, CheckCircle2, TrendingDown } from "lucide-react"

// A lightweight illustration of the portal for the hero, drawn in markup so it stays crisp and themeable.
const rooms = Array.from({ length: 24 }, (_, i) => {
  if (i % 11 === 0) return "maintenance"
  if (i % 5 === 0) return "cleaning"
  if (i % 3 === 0) return "vacant"
  return "occupied"
})

const roomColor = {
  occupied: "bg-leaf-500",
  vacant: "bg-slate-200",
  cleaning: "bg-amber-300",
  maintenance: "bg-rose-400",
}

export default function DashboardMock() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-brand-900/10 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">The Grand Meridian</p>
            <p className="text-sm font-semibold text-slate-900">Housekeeping overview</p>
          </div>
          <span className="rounded-full bg-leaf-50 px-2.5 py-1 text-[11px] font-medium text-leaf-700">Live</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Rooms cleaned", "58 / 64"],
            ["Low stock", "3 items"],
            ["Leakage", "0.8%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-slate-50 p-2.5">
              <p className="text-[10px] text-slate-500 sm:text-[11px]">{k}</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-medium text-slate-500">Floor 2 · room status</p>
          <div className="mt-2 grid grid-cols-8 gap-1.5">
            {rooms.map((s, i) => (
              <div key={i} className={`h-5 rounded ${roomColor[s]}`} />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5">
            <Camera size={16} className="shrink-0 text-leaf-600" />
            <p className="flex-1 text-xs text-slate-700">Room #214 cleaned · photo verified</p>
            <CheckCircle2 size={16} className="text-leaf-500" />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5">
            <AlertTriangle size={16} className="shrink-0 text-amber-500" />
            <p className="flex-1 text-xs text-slate-700">Floor disinfectant: 3 cans left</p>
            <span className="text-[11px] font-semibold text-brand-700">Reorder</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-14 -left-4 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-leaf-50 text-leaf-700">
          <TrendingDown size={18} />
        </span>
        <div>
          <p className="text-[11px] text-slate-500">Monthly supply cost</p>
          <p className="text-sm font-semibold text-slate-900">Down 32% vs. last vendor</p>
        </div>
      </div>
    </div>
  )
}
