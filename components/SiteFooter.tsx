const phoneHref = "tel:+917604955226";
const gmailComposeHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=jcdesigntnj@gmail.com";

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-sm tracking-tight text-black/90">JC Designs &amp; Consulting</p>
        <p className="text-sm tracking-tight text-black/60">
          12th Street, Anna Nagar, Thanjavur, Tamil Nadu, India - 613001
        </p>
        <p className="flex flex-wrap items-center gap-x-2 text-sm tracking-tight text-black/60">
          <a
            href={phoneHref}
            className="underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            +91 76049 55226
          </a>
          <span>|</span>
          <a
            href={gmailComposeHref}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            jcdesigntnj@gmail.com
          </a>
        </p>
        <p className="text-xs tracking-tight text-black/50">© {new Date().getFullYear()} JC Designs &amp; Consulting</p>
      </div>
    </footer>
  );
}
