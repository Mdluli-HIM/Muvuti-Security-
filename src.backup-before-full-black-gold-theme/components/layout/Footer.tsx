import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { company } from "@/data/company";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Security Guarding",
    href: "/services/security-guarding",
  },
  {
    label: "Response & Patrol",
    href: "/services/response-and-patrol",
  },
  {
    label: "Surveillance",
    href: "/services/surveillance",
  },
  {
    label: "Close Protection",
    href: "/services/close-protection",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        bg-[#f3efe7]
        px-5
        pb-5
        pt-8
        text-white
        md:px-8
        md:pb-8
        lg:px-12
        xl:px-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          border
          border-white/[0.06]
          bg-[#15110d]
          px-6
          py-10
          md:px-10
          md:py-12
          lg:px-12
          lg:py-14
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.05fr_1.95fr]
            lg:gap-20
          "
        >
          {/* STATEMENT */}
          <div>
            <p
              className="
                max-w-[460px]
                text-[32px]
                font-normal
                leading-[1.04]
                tracking-[-0.04em]
                sm:text-[38px]
                md:text-[44px]
              "
            >
              Protection you can rely on.
              <span className="text-white/45">
                {" "}
                Every hour. Every day.
              </span>
            </p>

            <Link
              href="/contact"
              className="muvuti-btn-secondary
              
                tactical-target
                group
                mt-8
                inline-flex
                h-[46px]
                items-center
                gap-5
                border
                border-white/15
                px-5
                text-[10px]
                uppercase
                tracking-[0.2em]
                transition-colors
                duration-300
                hover:bg-white
                hover:text-[#15110d]
              "
            >
              Request protection

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-8
            "
          >
            {/* CONTACT */}
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                Contact
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href={company.phoneHref}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-[12px]
                    leading-[1.5]
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  <Phone
                    size={13}
                    strokeWidth={1.5}
                    className="mt-[2px] shrink-0 text-[#b28a50]"
                  />

                  {company.phone}
                </a>

                <a
                  href={company.emailHref}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-[12px]
                    leading-[1.5]
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  <Mail
                    size={13}
                    strokeWidth={1.5}
                    className="mt-[2px] shrink-0 text-[#b28a50]"
                  />

                  <span className="break-all">
                    {company.email}
                  </span>
                </a>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-[12px]
                    leading-[1.5]
                    text-white/70
                  "
                >
                  <MapPin
                    size={13}
                    strokeWidth={1.5}
                    className="mt-[2px] shrink-0 text-[#b28a50]"
                  />

                  <span>{company.location}</span>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                Company
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {companyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      w-fit
                      text-[12px]
                      text-white/70
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                Services
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      w-fit
                      text-[12px]
                      leading-[1.4]
                      text-white/70
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                Follow us
              </p>

              <div className="mt-5 flex gap-2">
                <a
                  href={company.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#15110d]
                  "
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href={company.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#15110d]
                  "
                >
                  <FaFacebookF size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/12
            pt-6
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
            md:mt-16
          "
        >
          <p>
            © {new Date().getFullYear()} Muvuti Security Services.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Protection</span>
            <span>Presence</span>
            <span>Response</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
