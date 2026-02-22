export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-sm tracking-tight text-black/90">JC Designs &amp; Consulting</p>
        <p className="text-sm tracking-tight text-black/60">
          12th Street, Anna Nagar, Thanjavur, Tamil Nadu, India - 613001
        </p>
        <p className="text-sm tracking-tight text-black/60">
          +91 76049 55226 | jcdesigntnj@gmail.com
        </p>
        <p className="text-xs tracking-tight text-black/50">© {new Date().getFullYear()} JC Designs &amp; Consulting</p>
      </div>
    </footer>
  );
}
