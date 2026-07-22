import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, Car } from "lucide-react";

const NAV = [
  { label: "Home", type: "route", to: "/" },
  { label: "About Us", type: "scroll", id: "about" },
  { label: "How It Works", type: "scroll", id: "how" },
  { label: "Our Services", type: "scroll", id: "services" },
  { label: "Why Choose Us?", type: "scroll", id: "why" },
  { label: "Places", type: "scroll", id: "places" },
  { label: "Contact Us", type: "scroll", id: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScroll = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="wrapper flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex min-w-0 items-center space-x-2 font-bold text-primary">
          <span className="icon_motion inline-flex size-9 items-center justify-center rounded-xl bg-primary text-card">
            <Car className="size-5" />
          </span>
          <span className="truncate text-lg tracking-tight font-extrabold text-primary">
            Jay<span className="text-primary-brand ml-0.5">Travels</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-14 font-medium text-primary/80">
          {NAV.map((item) =>
            item.type === "route" ? (
              <Link key={item.label} to={item.to} className="hover:text-brand anim">
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                className="hover:text-primary-brand anim"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <a href="tel:+917487879679" className="btn_outline text-sm">
            <Phone className="size-4 mr-2" /> Call Now
          </a>
          <button onClick={() => handleScroll("book")} className="btn_primary text-sm">
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-lg border border-border anim hover_lift text-primary"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-full bg-card p-5 flex flex-col space-y-6 shadow-elegant">
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary text-lg">
                Jay<span className="text-brand ml-0.5">Travels</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border anim hover_lift text-primary"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col space-y-3 text-primary font-medium">
              {NAV.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-1 hover:text-brand anim"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.id)}
                    className="py-1 text-left hover:text-brand anim"
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>
            <div className="mt-auto flex flex-col space-y-2">
              <button onClick={() => handleScroll("book")} className="btn_primary">
                Book Now
              </button>
              <a href="tel:+917487879679" className="btn_outline">
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Header;