import { useEffect, useState } from "react"
import { Menu, X, LogIn } from "lucide-react"
import Logo from "./Logo"
import { navLinks, contact } from "../data/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm ring-1 ring-slate-200" : ""
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-600 hover:text-brand-700">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.portalUrl}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-700"
          >
            <LogIn size={16} /> Portal login
          </a>
          <a href="#contact" className="btn-primary py-2.5">
            Book a free audit
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                Book a free audit
              </a>
              <a href={contact.portalUrl} className="btn-secondary">
                <LogIn size={16} /> Portal login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
