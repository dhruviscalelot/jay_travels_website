import React from "react";
import { Car, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 md:mt-24 bg-primary text-primary-foreground">
      <div className="wrapper py-10 md:py-14">
        <div className="flex flex-wrap -mx-4">
          {/* Brand Info */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center space-x-2 font-bold text-primary-foreground">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-brand text-brand-foreground">
                <Car className="size-5" />
              </span>
              <span className="text-lg">
                Jay<span className="text-primary-brand ml-0.5">Travels</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
              Jay Travels offers affordable, reliable 24/7 taxi services in Surat for local, outstation,
              airport transfers, and business travel — with verified drivers and clean, comfortable cars.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>
                <Link to="/" className="hover:text-primary-brand anim">Home</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-brand anim">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-brand anim">Blogs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-brand anim">Contact Jay Travels</a>
              </li>
            </ul>
          </div>

          {/* Taxi Services */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="font-semibold mb-4">Taxi Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>Surat to Ahmedabad Cabs</li>
              <li>Surat to Mumbai Cabs</li>
              <li>Surat to Pune Cabs</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
            <h4 className="font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li className="flex items-start">
                <Phone className="size-4 mt-0.5 text-primary-brand shrink-0 mr-2.5" />
                <span>(+91) 7487879679</span>
              </li>
              <li className="flex items-start">
                <Mail className="size-4 mt-0.5 text-primary-brand shrink-0 mr-2.5" />
                <span>rktt2710@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="size-4 mt-0.5 text-primary-brand shrink-0 mr-2.5" />
                <span>
                  Soham Residency, A5 302, Near Soham Circle, New City Light, Althan, Surat, Gujarat 395017.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="wrapper py-5 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 text-center md:text-left text-xs text-primary-foreground/70">
          <p>© 2026 Jaytravels.in — All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-primary-brand anim">Terms and Conditions</a>
            <a href="#" className="hover:text-primary-brand anim">Privacy Policy</a>
            <a href="#" className="hover:text-primary-brand anim">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;