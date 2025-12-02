import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@labidrahat",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@labidrahat",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2c.4 0 .7.3.7.7v.3c0 2 1.6 3.6 3.6 3.6h.3c.4 0 .7.3.7.7v2.2c0 .4-.3.7-.7.7-1.7 0-3.3-.6-4.6-1.8v6.9c0 2.8-2.3 5.1-5.1 5.1S3 17.1 3 14.3s2.3-5.1 5.1-5.1c.4 0 .7.3.7.7v2.2c0 .4-.3.7-.7.7-1.2 0-2.2 1-2.2 2.2S6 17 7.2 17s2.2-1 2.2-2.2V2.7c0-.4.3-.7.7-.7h2.4z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/labidrahat",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/labid-rahat-1093a3155/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.759h3.554v1.381c.43-.664 1.198-1.61 2.912-1.61 2.122 0 3.711 1.388 3.711 4.368v5.62zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.951.77-1.708 1.957-1.708 1.187 0 1.914.757 1.937 1.708 0 .949-.75 1.707-1.979 1.707zm1.585 11.597H3.516V9.542h3.406v10.91zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto px-4 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-8 border-b border-slate-800">
          {/* Brand Section - Takes up more space */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Labid Rahat
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Creating inspiring content and building a community around
              authentic storytelling and creative expression.
            </p>

            {/* Social Links - Moved under description */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          {/* <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest content delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Labid Rahat . All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <p className="flex justify-center items-center gap-2 py-4 text-sm text-slate-500">
        <span>Developed By </span>
        <Link
          href="https://ontonim.com"
          target="_blank"
          className="inline-flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-[#02e2cc] to-[#d4af37] font-medium hover:from-[#02e2cc]/80 hover:to-[#d4af37]/80 transition-all duration-200 group"
        >
          Ontonim
          <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-slate-300 transition-colors" />
        </Link>
      </p>
    </footer>
  );
}
