"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight text-black/90 sm:text-base">
          JC Designs &amp; Consulting
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Primary" className="hidden items-center gap-4 sm:flex sm:gap-6">
            {navItems.map((item) => (
              <span key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`relative inline-flex h-9 items-center px-1 text-xs tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 sm:text-sm ${
                    pathname === item.href
                      ? "text-black/90"
                      : "text-black/60 hover:text-black/90"
                  }`}
                >
                  {item.label}
                </Link>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-black transition-all duration-300 ${
                    pathname === item.href
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                  }`}
                />
              </span>
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
            <span key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`whitespace-nowrap px-1 py-1.5 text-xs tracking-tight transition-colors ${
                  pathname === item.href
                    ? "text-black/90"
                    : "text-black/70 hover:text-black/90"
                }`}
              >
                {item.label}
              </Link>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-black transition-all duration-300 ${
                  pathname === item.href
                    ? "w-5 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                }`}
              />
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
