import {
  ShieldCheck,
  Camera,
  TrendingDown,
  Hotel,
  Stethoscope,
  Building2,
  GraduationCap,
  ClipboardCheck,
  Settings2,
  PackageCheck,
  LineChart,
  Boxes,
  Wrench,
  ShoppingBag,
  Receipt,
  Droplets,
  SprayCan,
  BedDouble,
  Gift,
  Lightbulb,
  Wind,
  Users,
  Zap,
} from "lucide-react"

export const contact = {
  phone: "+91 92636 25085",
  phoneRaw: "919263625085",
  email: "1194enterprises@gmail.com",
  // Link to the portal preview until the production portal is live.
  portalUrl: "https://rsrohan.github.io/qelvira-dummy-ui/login",
}

export const whatsappLink = (text) =>
  `https://wa.me/${contact.phoneRaw}${text ? `?text=${encodeURIComponent(text)}` : ""}`

export const navLinks = [
  { href: "#why", label: "Why Qelvira" },
  { href: "#how", label: "How it works" },
  { href: "#platform", label: "Software" },
  { href: "#products", label: "Products" },
  { href: "#savings", label: "Savings" },
  { href: "#faq", label: "FAQ" },
]

export const audiences = [
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Stethoscope, label: "Hospitals & Clinics" },
  { icon: Building2, label: "Corporate Offices" },
  { icon: GraduationCap, label: "Colleges & Hostels" },
]

export const pillars = [
  {
    icon: ShieldCheck,
    title: "Zero supply leakage",
    problem: "Chemicals and toiletries disappear from the store room and nobody can say where they went.",
    solution:
      "Every item issued is mapped to the room or area it was used in. Consumption that doesn't match gets flagged automatically.",
  },
  {
    icon: Camera,
    title: "Cleaning you can verify",
    problem: "You're told a room was cleaned, but you have no proof and no way to check quality at scale.",
    solution:
      "Staff close each task with a photo. Supervisors see task-level accountability and quality checks in real time.",
  },
  {
    icon: TrendingDown,
    title: "Up to 40% lower costs",
    problem: "Middlemen markups, over-ordering and wastage quietly inflate your monthly housekeeping bill.",
    solution:
      "Direct institutional supply plus usage-based reordering and efficiency consulting, with no drop in quality.",
  },
]

export const steps = [
  {
    icon: ClipboardCheck,
    title: "Free audit & sample kit",
    body: "We visit your property, review current consumption and leave a sample kit so your team can try our products.",
  },
  {
    icon: Settings2,
    title: "Set up your property",
    body: "We load your floors, rooms and store inventory into the Qelvira portal and train your housekeeping team.",
  },
  {
    icon: PackageCheck,
    title: "Order & track supplies",
    body: "Reorder in a few taps. Deliveries are logged against stock, and every issue is tracked down to the room.",
  },
  {
    icon: LineChart,
    title: "Verify & optimize",
    body: "Monthly reports show leakage, cost per room and staff performance, so you know exactly where the savings came from.",
  },
]

export const platformTabs = [
  {
    id: "inventory",
    icon: Boxes,
    label: "Inventory & Rooms",
    headline: "Know what's in stock and where it went",
    points: [
      "Live stock levels for every item, with reorder alerts before you run out",
      "Room-by-room status across every floor: occupied, cleaning, maintenance",
      "Issued vs. consumed tracking that flags unusual usage",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    label: "Maintenance",
    headline: "Log an issue, assign it, close it with proof",
    points: [
      "Raise requests per room with category and priority",
      "Assign to a technician and track ETA through to resolution",
      "Photo proof on completion for a full audit trail",
    ],
  },
  {
    id: "marketplace",
    icon: ShoppingBag,
    label: "Marketplace",
    headline: "Reorder supplies without the phone calls",
    points: [
      "Toiletries, cleaning chemicals, linen, amenities and spare parts in one catalogue",
      "Institutional pricing with clear minimum order quantities",
      "One-tap reorder straight from low-stock alerts",
    ],
  },
  {
    id: "billing",
    icon: Receipt,
    label: "Orders & Billing",
    headline: "Every order and invoice in one place",
    points: [
      "Track orders from processing to delivery",
      "Download GST invoices and see what's paid, pending or overdue",
      "Monthly spend reports per category and per room",
    ],
  },
]

export const productCategories = [
  {
    icon: Droplets,
    name: "Guest Toiletries",
    items: "Shampoo, conditioner, body wash, soap, dental kits, toilet rolls",
  },
  {
    icon: SprayCan,
    name: "Cleaning Chemicals",
    items: "Floor disinfectant, glass cleaner, toilet cleaner, microfiber cloths, mops",
  },
  {
    icon: BedDouble,
    name: "Linen",
    items: "Bath towels, bedsheet sets, pillow covers, bath mats",
  },
  {
    icon: Gift,
    name: "Room Amenities",
    items: "Welcome kits, slippers, shower caps, mini-bar packs",
  },
  {
    icon: Lightbulb,
    name: "Maintenance Parts",
    items: "AC filters, LED bulbs, plumbing and electrical spares",
  },
]

export const comingSoon = [
  { icon: Wind, name: "AC servicing contracts", when: "Q4 2026" },
  { icon: Users, name: "Housekeeping manpower", when: "Q4 2026" },
  { icon: Zap, name: "Electrical maintenance", when: "Q1 2027" },
]

export const faqs = [
  {
    q: "Is the software free with supplies?",
    a: "Properties that source their housekeeping supplies through Qelvira get the portal as part of the service. Talk to us for the exact plan that fits your property size.",
  },
  {
    q: "How does Qelvira actually cut costs by up to 40%?",
    a: "Three ways: we supply directly at institutional rates (no middleman markup), usage tracking stops leakage and over-ordering, and our team suggests efficiency changes based on your real consumption data. The exact saving depends on your current setup, which is why we start with a free audit.",
  },
  {
    q: "Do my housekeeping staff need training?",
    a: "The staff app is designed for quick, photo-first task updates. We onboard and train your team during setup, usually in a single session.",
  },
  {
    q: "Can I try the products before switching?",
    a: "Yes. We send a free sample kit with the audit so your team can test the toiletries and cleaning chemicals first.",
  },
  {
    q: "What kind of properties do you work with?",
    a: "Hotels, resorts, hospitals, corporate offices, colleges and hostels. Anywhere with rooms or areas that need consistent, accountable cleaning.",
  },
  {
    q: "How quickly can we get started?",
    a: "Reach out on WhatsApp or the form below. We'll schedule the audit, and most properties are live on the portal within a couple of weeks.",
  },
]
