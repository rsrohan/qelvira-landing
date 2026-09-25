import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"
import WhatsAppIcon from "./WhatsAppIcon"
import { contact, whatsappLink } from "../data/site"

const propertyTypes = ["Hotel / Resort", "Hospital / Clinic", "Corporate Office", "College / Hostel", "Other"]

// No backend yet: the form composes a WhatsApp message so enquiries land straight in the sales chat.
export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", property: "", type: propertyTypes[0], rooms: "", city: "" })
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const msg = [
      "Hi Qelvira, I'd like a free sample kit & software demo.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Property: ${form.property} (${form.type})`,
      form.rooms && `Rooms / beds: ${form.rooms}`,
      form.city && `City: ${form.city}`,
    ]
      .filter(Boolean)
      .join("\n")
    window.open(whatsappLink(msg), "_blank", "noopener")
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"

  return (
    <section id="contact" className="bg-brand-950 py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="text-brand-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-leaf-300">Get started</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Get a free sample kit & software demo</h2>
          <p className="mt-4 text-lg text-brand-200">
            Tell us a little about your property. We'll set up a visit, bring samples, and show you the portal with
            your own rooms loaded in.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={whatsappLink("Hi Qelvira, I'd like to know more.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <WhatsAppIcon size={22} />
                </span>
                <span>
                  <span className="block text-sm text-brand-300">WhatsApp (fastest)</span>
                  <span className="font-semibold text-white">{contact.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:+${contact.phoneRaw}`}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-sm text-brand-300">Call us</span>
                  <span className="font-semibold text-white">{contact.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Mail size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-brand-300">Email</span>
                  <span className="block truncate font-semibold text-white">{contact.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          <h3 className="text-xl font-bold">Request your free audit</h3>
          <p className="mt-1 text-sm text-slate-500">Takes 30 seconds. We'll get back to you to schedule a visit.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Your name
              <input required value={form.name} onChange={update("name")} className={field} autoComplete="name" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                className={field}
                placeholder="+91"
                autoComplete="tel"
              />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Property name
              <input required value={form.property} onChange={update("property")} className={field} />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Property type
              <select value={form.type} onChange={update("type")} className={field}>
                {propertyTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              Rooms / beds <span className="font-normal text-slate-400">(optional)</span>
              <input
                type="number"
                min="1"
                inputMode="numeric"
                value={form.rooms}
                onChange={update("rooms")}
                className={field}
              />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              City <span className="font-normal text-slate-400">(optional)</span>
              <input value={form.city} onChange={update("city")} className={field} autoComplete="address-level2" />
            </label>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full py-3.5 text-base">
            <Send size={18} /> Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">
            Opens WhatsApp with your details filled in. Nothing is sent until you tap send.
          </p>
        </form>
      </div>
    </section>
  )
}
