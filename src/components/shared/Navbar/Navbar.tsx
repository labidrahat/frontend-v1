"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Play,
  BookOpen,
  Info,
  Contact,
  ChevronRight,
  Home,
  X,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../../public/logo/logo.png";

const navigationItems = [
  { title: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { title: "About", href: "/about", icon: <Info className="h-4 w-4" /> },
  {
    title: "Blogs",
    href: "/blogs",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Team",
    href: "/team",
    icon: <Users className="h-4 w-4" />,
  },
  { title: "Contact", href: "/contact", icon: <Contact className="h-4 w-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  // Prevent body scroll when sheet is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 will-change-transform",
          isScrolled ? "navbar-scrolled" : ""
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#02590F] to-transparent opacity-50" />

        <div
          className="navbar-glass"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 md:h-20 items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-2 md:space-x-3 group relative z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#02590F]/20 blur-xl group-hover:bg-[#02590F]/30 transition-all duration-300 md:duration-500" />
                  <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden ring-2 ring-[#02590F]/50 group-hover:ring-[#02590F] transition-all duration-300 bg-gradient-to-br from-[#02590F] to-[#03701A] flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="Labid Rahat"
                      fill
                      sizes="(max-width: 768px) 40px, 48px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#02590F] via-[#03701A] to-[#04A827] bg-clip-text text-transparent group-hover:from-[#03701A] group-hover:via-[#04A827] group-hover:to-[#02590F] transition-all duration-300">
                    Labid Rahat
                  </span>
                  <span className="text-[10px] md:text-xs text-[#02590F]/60 tracking-wider hidden sm:block">
                    World History Storyteller
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <button
                      className={cn(
                        "nav-item group relative px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 rounded-lg overflow-hidden cursor-pointer",
                        pathname === item.href
                          ? "text-[#02590F]"
                          : "text-gray-600 hover:text-[#02590F]"
                      )}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#02590F]/10 via-[#03701A]/10 to-[#02590F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#02590F] to-[#03701A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                          pathname === item.href && "scale-x-100"
                        )}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                    </button>
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  href="https://youtube.com/@labidrahat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button group relative"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 rounded-lg font-semibold text-white border border-red-400/30 group-hover:border-red-400/50 transition-all duration-300">
                    <Play className="h-4 w-4" />
                    Subscribe Now
                  </span>
                </Link>
              </div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <button
                    className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-lg border border-[#02590F]/30 bg-white/50 backdrop-blur-sm hover:border-[#02590F]/50 hover:bg-white/70 transition-all duration-300 active:scale-95"
                    aria-label="Menu"
                  >
                    <Menu className="h-5 w-5 md:h-6 md:w-6 text-[#02590F]" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-white/98 backdrop-blur-xl border-l border-[#02590F]/20 shadow-2xl shadow-[#02590F]/10 p-0 overflow-hidden"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-4 py-4 border-b border-[#02590F]/20 bg-[#02590F]/5">
                      <div className="flex items-center space-x-2.5">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-[#02590F]/20 blur-lg" />
                          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-[#02590F]/50 bg-gradient-to-br from-[#02590F] to-[#03701A] flex items-center justify-center">
                            <Image
                              src={logo}
                              alt="Labid Rahat"
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-base bg-gradient-to-r from-[#02590F] to-[#03701A] bg-clip-text text-transparent">
                            Labid Rahat
                          </div>
                          <div className="text-[10px] text-[#02590F]/60">
                            World History Storyteller
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                      <div className="space-y-1.5">
                        {navigationItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                          >
                            <button
                              className={cn(
                                "w-full group relative px-3.5 py-3 rounded-lg text-left font-medium transition-all duration-200 flex items-center justify-between overflow-hidden border active:scale-98 my-2",
                                pathname === item.href
                                  ? "text-[#02590F] bg-[#02590F]/10 border-[#02590F]/30"
                                  : "text-gray-600 hover:text-[#02590F] bg-white/30 border-[#02590F]/10 hover:border-[#02590F]/30 hover:bg-[#02590F]/5"
                              )}
                            >
                              <span className="flex items-center gap-2.5 relative z-10">
                                <span
                                  className={cn(
                                    "transition-transform duration-200",
                                    pathname === item.href
                                      ? "scale-110"
                                      : "group-hover:scale-110"
                                  )}
                                >
                                  {item.icon}
                                </span>
                                <span className="text-sm">{item.title}</span>
                              </span>
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 transition-all duration-200",
                                  pathname === item.href
                                    ? "text-[#02590F]"
                                    : "text-gray-500 group-hover:text-[#02590F] group-hover:translate-x-0.5"
                                )}
                              />
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="px-4 py-4 border-t border-[#02590F]/20 bg-[#02590F]/5">
                      <Link
                        href="https://youtube.com/@labidrahat"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        <button className="w-full relative group active:scale-98 transition-transform">
                          <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                          <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 rounded-lg font-semibold text-white border border-red-400/30 group-hover:border-red-400/50 transition-all duration-200 text-sm">
                            <Play className="h-4 w-4" />
                            Subscribe Now
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#02590F]/30 to-transparent" />
      </header>
    </>
  );
}
