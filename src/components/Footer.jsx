import Logo from "./Logo"
import { navLinks, contact, whatsappLink } from "../data/site"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 text-brand-200">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo light className="h-7 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Smart Systems. Premium Hygiene. Institutional Excellence. Premium housekeeping supplies and the software
            to track every one of them.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`tel:+${contact.phoneRaw}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.portalUrl} className="hover:text-white">
                Portal login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-brand-300">© {new Date().getFullYear()} Qelvira. All rights reserved.</p>
      </div>
    </footer>
  )
}
