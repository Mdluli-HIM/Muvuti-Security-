import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ServicesRail from "@/components/services/ServicesRail";
import TacticalBackdrop from "@/components/effects/TacticalBackdrop";

export const metadata: Metadata = {
  title: "Services | Muvuti Security Services",
  description:
    "Explore Muvuti Security Services including guarding, patrol, close protection, surveillance, access control and event security.",
};

export default function ServicesPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#eef1ee]
        text-[#102d30]
      "
    >
      {/* INTRO */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-14
          pt-36
          md:px-8
          md:pb-20
          md:pt-40
          lg:px-12
          xl:px-16
        "
      >
        <TacticalBackdrop
          label="MUVUTI / SECURITY SERVICES"
          number="01 — 06"
        />

        <div
          className="
            relative
            z-10
            grid
            gap-10
            border-b
            border-[#102d30]/12
            pb-12
            md:pb-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end
            lg:gap-20
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

              Services / 01—06
            </div>

            <h1
              className="
                mt-6
                max-w-[860px]
                text-[54px]
                font-normal
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[64px]
                md:text-[78px]
                lg:text-[92px]
              "
            >
              Security built
              <br />
              around the situation.
            </h1>
          </div>

          <div
            className="
              max-w-[470px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[14px]
                leading-[1.65]
                text-[#687876]
                md:text-[15px]
              "
            >
              From visible guarding and patrol to surveillance,
              close protection and event security, Muvuti provides
              solutions designed around people, property and risk.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.2em]
              "
            >
              Request protection

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE RAIL */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          pl-5
          pb-24
          md:pl-8
          md:pb-32
          lg:pl-12
          xl:pl-16
        "
      >
        <ServicesRail />
      </section>

      {/* BOTTOM STATEMENT */}
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
            grid
            gap-8
            border-y
            border-[#102d30]/12
            py-10
            md:grid-cols-[1fr_auto]
            md:items-end
            md:py-14
          "
        >
          <h2
            className="
              max-w-[760px]
              text-[38px]
              font-normal
              leading-[1]
              tracking-[-0.045em]
              sm:text-[46px]
              md:text-[58px]
            "
          >
            Not sure which protection solution you need?
          </h2>

          <Link
            href="/contact"
            className="
              tactical-target
              group
              inline-flex
              h-[48px]
              w-fit
              items-center
              gap-5
              bg-[#102d30]
              px-5
              text-white
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
              "
            >
              Talk to Muvuti
            </span>

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
      </section>
    </main>
  );
}
