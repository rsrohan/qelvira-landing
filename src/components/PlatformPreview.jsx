// Small illustrative mock-ups of each portal module, shown beside the feature list.

const Shell = ({ title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5" aria-hidden="true">
    <div className="mb-3 flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-leaf-300" />
      <span className="ml-2 text-xs font-medium text-slate-500">{title}</span>
    </div>
    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">{children}</div>
  </div>
)

const Pill = ({ tone, children }) => {
  const tones = {
    green: "bg-leaf-50 text-leaf-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-rose-50 text-rose-700",
    blue: "bg-brand-50 text-brand-700",
    slate: "bg-slate-100 text-slate-600",
  }
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${tones[tone]}`}>{children}</span>
}

function Inventory() {
  const rows = [
    ["Floor Disinfectant 5L", 3, 10],
    ["Bath Towels (White, L)", 12, 40],
    ["Shampoo Sachets 30ml", 85, 200],
    ["Glass Cleaner 1L", 45, 20],
  ]
  return (
    <Shell title="Inventory">
      <ul className="divide-y divide-slate-100">
        {rows.map(([name, stock, reorder]) => {
          const pct = Math.min(100, Math.round((stock / (reorder * 2)) * 100))
          const low = stock < reorder
          return (
            <li key={name} className="py-2.5">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-medium text-slate-800">{name}</span>
                <Pill tone={low ? "red" : "green"}>{low ? "Low" : "OK"}</Pill>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">
                <div className={`h-1.5 rounded-full ${low ? "bg-rose-400" : "bg-leaf-500"}`} style={{ width: `${pct}%` }} />
              </div>
            </li>
          )
        })}
      </ul>
    </Shell>
  )
}

function Maintenance() {
  const rows = [
    ["#312", "AC not cooling", "High", "In progress", "amber"],
    ["#118", "Leaking bathroom tap", "Medium", "Open", "slate"],
    ["#221", "Key card reader faulty", "High", "In progress", "amber"],
    ["#405", "Wardrobe hinge broken", "Low", "Resolved", "green"],
  ]
  return (
    <Shell title="Maintenance requests">
      <ul className="divide-y divide-slate-100">
        {rows.map(([room, issue, prio, status, tone]) => (
          <li key={room} className="flex items-center gap-3 py-2.5 text-xs">
            <span className="w-10 font-semibold text-slate-900">{room}</span>
            <span className="flex-1 text-slate-700">{issue}</span>
            <span className={`hidden sm:inline ${prio === "High" ? "text-rose-600" : "text-slate-500"}`}>{prio}</span>
            <Pill tone={tone}>{status}</Pill>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

function Marketplace() {
  const items = [
    ["Toilet Paper Rolls", "₹22 / roll"],
    ["Hand Soap Refill", "₹95 / bottle"],
    ["Microfiber Cloth", "₹35 / pc"],
    ["Welcome Kit", "₹65 / kit"],
  ]
  return (
    <Shell title="Marketplace">
      <div className="grid grid-cols-2 gap-2">
        {items.map(([name, price]) => (
          <div key={name} className="rounded-lg border border-slate-100 p-2.5">
            <div className="h-10 rounded-md bg-gradient-to-br from-brand-50 to-leaf-50" />
            <p className="mt-2 text-xs font-medium text-slate-800">{name}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-900">{price}</span>
              <span className="rounded-md bg-brand-800 px-1.5 py-0.5 text-[10px] font-semibold text-white">Add</span>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function Billing() {
  const rows = [
    ["INV-8891", "₹18,650", "Paid", "green"],
    ["INV-8890", "₹4,200", "Paid", "green"],
    ["INV-8888", "₹9,800", "Overdue", "red"],
    ["INV-8887", "₹21,400", "Pending", "amber"],
  ]
  return (
    <Shell title="Invoices">
      <ul className="divide-y divide-slate-100">
        {rows.map(([id, amt, status, tone]) => (
          <li key={id} className="flex items-center justify-between py-2.5 text-xs">
            <span className="font-medium text-slate-800">{id}</span>
            <span className="font-semibold text-slate-900">{amt}</span>
            <Pill tone={tone}>{status}</Pill>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

const previews = { inventory: Inventory, maintenance: Maintenance, marketplace: Marketplace, billing: Billing }

export default function PlatformPreview({ id }) {
  const Preview = previews[id]
  return <Preview />
}
