import type { Metadata } from "next";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ContactForm from "@/components/contact/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact | Muvuti Security Services",
  description:
    "Contact Muvuti Security Services for residential, commercial, event and personal security enquiries.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#eef1ee] text-[#102d30]">
      {/* HERO */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-5
          pt-24
          md:px-8
          md:pt-28
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            relative
            min-h-[56svh]
            overflow-hidden
            border-[8px]
            border-white
            bg-[#102d30]
            md:min-h-[62svh]
          "
        >
          <Image
            src="/images/contact/contact-hero.jpg"
            alt="Muvuti Security Services"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1312px"
            className="
              object-cover
              object-center
              grayscale
              brightness-[0.55]
              contrast-[0.96]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/45
              via-black/15
              to-black/15
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/25
              via-transparent
              to-black/10
            "
          />

          <div
            className="
              relative
              z-10
              flex
              min-h-[56svh]
              flex-col
              justify-between
              px-6
              pb-6
              pt-24
              text-white
              md:min-h-[62svh]
              md:px-10
              md:pb-9
              lg:px-12
            "
          >
            <div />

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-white/60
                "
              >
                Muvuti Security Services
              </p>

              <h1
                className="
                  mt-4
                  text-[56px]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.055em]
                  sm:text-[68px]
                  md:text-[82px]
                  lg:text-[96px]
                "
              >
                Contact
              </h1>
            </div>

            <div
              className="
                flex
                items-end
                justify-between
                border-t
                border-white/15
                pt-5
              "
            >
              <p
                className="
                  max-w-[280px]
                  text-[12px]
                  leading-[1.5]
                  text-white/70
                "
              >
                Protection starts with a conversation.
              </p>

              <ArrowDown
                size={16}
                className="text-white/55"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-20
          md:px-8
          md:py-28
          lg:px-12
          lg:py-32
          xl:px-16
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* CONTACT DETAILS */}
          <div
            className="
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#687876]
                "
              >
                <span
                  className="
                    h-[5px]
                    w-[5px]
                    rotate-45
                    bg-[#638e89]
                  "
                />

                Get in touch
              </div>

              <h2
                className="
                  mt-6
                  max-w-[600px]
                  text-[46px]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.05em]
                  sm:text-[54px]
                  md:text-[64px]
                  lg:text-[72px]
                "
              >
                We&apos;re ready to help protect what matters.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[480px]
                  text-[14px]
                  leading-[1.65]
                  text-[#687876]
                  md:text-[15px]
                "
              >
                Contact Muvuti for residential, commercial, event, surveillance
                or personal protection enquiries.
              </p>
            </div>

            <div
              className="
                mt-12
                grid
                gap-0
                border-t
                border-[#102d30]/12
                sm:grid-cols-2
                lg:mt-16
              "
            >
              {/* PHONE */}
              <div
                className="
                  border-b
                  border-[#102d30]/12
                  py-6
                  sm:border-r
                  sm:pr-6
                "
              >
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#638e89]"
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#687876]
                  "
                >
                  Phone
                </p>

                <a
                  href={company.phoneHref}
                  className="
                    mt-2
                    block
                    text-[18px]
                    tracking-[-0.025em]
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  {company.phone}
                </a>
              </div>

              {/* EMAIL */}
              <div
                className="
                  border-b
                  border-[#102d30]/12
                  py-6
                  sm:pl-6
                "
              >
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#638e89]"
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#687876]
                  "
                >
                  Email
                </p>

                <a
                  href={company.emailHref}
                  className="
                    mt-2
                    block
                    break-all
                    text-[16px]
                    tracking-[-0.025em]
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  {company.email}
                </a>
              </div>

              {/* LOCATION */}
              <div
                className="
                  border-b
                  border-[#102d30]/12
                  py-6
                  sm:border-r
                  sm:pr-6
                "
              >
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#638e89]"
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#687876]
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-[16px]
                    leading-[1.45]
                  "
                >
                  {company.location}
                </p>
              </div>

              {/* SOCIAL */}
              <div
                className="
                  border-b
                  border-[#102d30]/12
                  py-6
                  sm:pl-6
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#638e89]"
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#687876]
                  "
                >
                  Social
                </p>

                <div className="mt-3 flex gap-3">
                  <a
                    href={company.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-[#102d30]/15
                      transition-colors
                      hover:bg-[#102d30]
                      hover:text-white
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
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-[#102d30]/15
                      transition-colors
                      hover:bg-[#102d30]
                      hover:text-white
                    "
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <ContactForm />
        </div>
      </section>

      {/* MAP */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-24
          md:px-8
          md:pb-32
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            border
            border-[#102d30]/12
            bg-white
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              border-b
              border-[#102d30]/12
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              md:p-6
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#687876]
                "
              >
                Our location
              </p>

              <p
                className="
                  mt-2
                  text-[19px]
                  tracking-[-0.025em]
                "
              >
                Nkowankowa Section B
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Nkowankowa+Section+B+South+Africa"
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.18em]
              "
            >
              Open map

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          <iframe
            title="Muvuti Security location"
            src="https://www.google.com/maps?q=Nkowankowa%20Section%20B%20South%20Africa&output=embed"
            loading="lazy"
            className="
              block
              h-[380px]
              w-full
              border-0
              grayscale
              md:h-[520px]
            "
          />
        </div>
      </section>
    </main>
  );
}
