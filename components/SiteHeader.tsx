import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20want%20to%20discuss%20a%20project.";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight text-black/90 sm:text-base">
          JC Designs &amp; Consulting
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Primary" className="hidden items-center gap-4 sm:flex sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tracking-tight text-black/60 transition-colors hover:text-black/90 sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center border border-black/80 bg-black px-3 text-xs tracking-tight text-white sm:h-10 sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <nav aria-label="Mobile" className="border-t border-black/10 bg-white px-5 py-2 sm:hidden">
        <div className="flex items-center gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs tracking-tight text-black/70"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
