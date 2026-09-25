import WhatsAppIcon from "./WhatsAppIcon"
import { whatsappLink } from "../data/site"

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Qelvira, I'd like to know more.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Qelvira on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
