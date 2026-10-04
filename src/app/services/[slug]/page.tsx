import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Crosshair,
  ShieldCheck,
} from "lucide-react";

import { services } from "@/data/services";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const serviceDetails: Record<
  string,
  {
    image?: string;
    eyebrow: string;
    intro: string;
    points: string[];
  }
> = {
  "security-guarding": {
    image: "/images/solutions/guarding.jpg",
    eyebrow: "Visible protection",
    intro:
      "Professional security personnel positioned where protection, presence and vigilance matter most.",
    points: [
      "Armed and unarmed guarding",
      "Residential protection",
      "Business and property security",
      "Professional security presence",
    ],
  },

  "response-and-patrol": {
    image: "/images/solutions/patrol.jpg",
    eyebrow: "Ready to respond",
    intro:
      "Around-the-clock patrol and response services built around dependable presence and rapid action.",
    points: [
      "24/7 patrol services",
      "Rapid security response",
      "Alarm response support",
      "Visible patrol presence",
    ],
  },

  "close-protection": {
    eyebrow: "Personal security",
    intro:
      "Professional close protection for individuals and VIPs who require a more focused level of security.",
    points: [
      "Close protection officers",
      "VIP security",
      "Private escorts",
      "Personal protection",
    ],
  },

  surveillance: {
    image: "/images/solutions/surveillance.jpg",
    eyebrow: "Observe. Detect. Protect.",
    intro:
      "Surveillance solutions designed to strengthen awareness around homes, businesses and protected spaces.",
    points: [
      "CCTV monitoring",
      "Alarm systems",
      "Security surveillance",
      "Alarm system installations",
    ],
  },

  "access-control": {
    eyebrow: "Control the entry point",
    intro:
      "Professional access management that helps control movement through gates, entrances and protected areas.",
    points: [
      "Gate management",
      "Entry-point security",
      "Controlled access",
      "Professional access personnel",
    ],
  },

  "event-security": {
    eyebrow: "Protection for the occasion",
    intro:
      "Professional security support for special events, guests and situations that require controlled protection.",
    points: [
      "Special event security",
      "Security personnel",
      "Private escorts",
      "Event protection",
    ],
  },
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service | Muvuti Security Services",
    };
  }

  return {
    title: `${service.title} | Muvuti Security Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const detail =
    serviceDetails[service.slug];

  if (!detail) {
    notFound();
  }

  return (
    <main className="bg-[#eef1ee] text-[#102d30]">
      {/* HERO */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-12
          pt-36
          md:px-8
          md:pb-16
          md:pt-40
          lg:px-12
          xl:px-16
        "
      >
        <Link
          href="/services"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#687876]
          "
        >
          <ArrowLeft
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          All services
        </Link>

        <div
          className="
            mt-10
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

              Service {service.number}
            </div>

            <h1
              className="
                mt-6
                max-w-[900px]
                text-[52px]
                font-normal
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[64px]
                md:text-[78px]
                lg:text-[92px]
              "
            >
              {service.title}
            </h1>
          </div>

          <div className="max-w-[470px] lg:justify-self-end">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#638e89]
              "
            >
              {detail.eyebrow}
            </p>

            <p
              className="
                mt-5
                text-[15px]
                leading-[1.65]
                text-[#687876]
              "
            >
              {detail.intro}
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            relative
            min-h-[440px]
            overflow-hidden
            border
            border-[#102d30]/12
            bg-[#102d30]
            md:min-h-[600px]
            lg:min-h-[680px]
          "
        >
          {detail.image ? (
            <>
              <Image
                src={detail.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1312px"
                className="
                  object-cover
                  object-center
                  grayscale
                  brightness-[0.68]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-black/10
                "
              />
            </>
          ) : (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-white
              "
            >
              <div
                className="
                  absolute
                  h-[260px]
                  w-[260px]
                  border
                  border-white/10
                  md:h-[360px]
                  md:w-[360px]
                "
              />

              <div
                className="
                  absolute
                  h-[150px]
                  w-[150px]
                  rotate-45
                  border
                  border-white/15
                  md:h-[200px]
                  md:w-[200px]
                "
              />

              <Crosshair
                size={44}
                strokeWidth={0.8}
                className="text-[#9ac7bf]"
              />
            </div>
          )}

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              flex
              items-end
              justify-between
              text-white
              md:bottom-8
              md:left-8
              md:right-8
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/55
                "
              >
                Muvuti / {service.number}
              </p>

              <p
                className="
                  mt-2
                  max-w-[500px]
                  text-[24px]
                  leading-[1.05]
                  tracking-[-0.035em]
                  md:text-[32px]
                "
              >
                {service.description}
              </p>
            </div>

            <Crosshair
              size={19}
              strokeWidth={1}
              className="hidden text-[#a9d3ca] md:block"
            />
          </div>
        </div>
      </section>

      {/* DETAILS */}
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
          xl:px-16
        "
      >
        <div
          className="
            grid
            gap-12
            border-y
            border-[#102d30]/12
            py-12
            md:py-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-[#687876]
              "
            >
              What we provide
            </p>
          </div>

          <div>
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
              Protection shaped around the situation.
            </h2>

            <div
              className="
                mt-10
                border-t
                border-[#102d30]/12
              "
            >
              {detail.points.map(
                (point, index) => (
                  <div
                    key={point}
                    className="
                      grid
                      min-h-[74px]
                      grid-cols-[38px_1fr_auto]
                      items-center
                      gap-4
                      border-b
                      border-[#102d30]/12
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        tracking-[0.18em]
                        text-[#687876]
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className="
                        text-[17px]
                        tracking-[-0.02em]
                        md:text-[19px]
                      "
                    >
                      {point}
                    </span>

                    <ShieldCheck
                      size={15}
                      strokeWidth={1.4}
                      className="text-[#638e89]"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            bg-[#102d30]
            px-6
            py-10
            text-white
            md:grid-cols-[1fr_auto]
            md:items-end
            md:px-10
            md:py-12
            lg:px-12
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/45
              "
            >
              Need this service?
            </p>

            <h2
              className="
                mt-5
                max-w-[700px]
                text-[36px]
                font-normal
                leading-[1]
                tracking-[-0.045em]
                sm:text-[44px]
                md:text-[54px]
              "
            >
              Let&apos;s talk about the protection you need.
            </h2>
          </div>

          <Link
            href={`/contact?service=${service.slug}`}
            className="
              tactical-target
              group
              inline-flex
              h-[48px]
              w-fit
              items-center
              gap-5
              bg-white
              px-5
              text-[#102d30]
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
              "
            >
              Request protection
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
