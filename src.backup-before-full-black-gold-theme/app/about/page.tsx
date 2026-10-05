import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Eye,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Muvuti Security Services",
  description:
    "Learn about Muvuti Security Services, our principles, approach and leadership.",
};

const principles = [
  {
    title: "Prepared",
    description:
      "Protection starts before an incident happens. We focus on readiness, presence and professional security planning.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive",
    description:
      "Security situations change quickly. Our approach is built around dependable communication and responsive service.",
    icon: RadioTower,
  },
  {
    title: "Vigilant",
    description:
      "Attention matters. We remain alert to the people, property and environments entrusted to our protection.",
    icon: Eye,
  },
];

const team = [
  {
    name: "Vuthu Nkuna",
    role: "Director",
    initials: "VN",
    image: null as string | null,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f3efe7] text-[#17130e]">
      {/* ABOUT HERO */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          pb-4
          pt-24
          sm:px-5
          md:px-8
          md:pt-28
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            relative
            min-h-[52svh]
            overflow-hidden
            
            border-[7px]
            border-white
            bg-[#17130e]
            sm:min-h-[58svh]
            
            md:border-[8px]
            lg:min-h-[66svh]
          "
        >
          <Image
            src="/images/about/about-security.jpg"
            alt="Muvuti Security"
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

          <div className="absolute inset-0 bg-black/20" />

          <div
            className="
              relative
              z-10
              flex
              min-h-[52svh]
              items-center
              justify-center
              px-5
              text-center
              sm:min-h-[58svh]
              lg:min-h-[66svh]
            "
          >
            <div>
              <p
                className="
                  mb-5
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-white/55
                "
              >
                Muvuti Security Services
              </p>

              <h1
                className="
                  text-[52px]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[64px]
                  md:text-[78px]
                  lg:text-[92px]
                "
              >
                About us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-4
          sm:px-5
          md:px-8
          md:py-6
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            bg-[#f7f3ec]
            px-5
            py-16
            sm:px-7
            md:px-10
            md:py-20
            lg:px-14
            lg:py-24
          "
        >
          <span
            className="
              inline-flex
              rounded-[4px]
              bg-[#e8ebe8]
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#756b5b]
            "
          >
            Principles
          </span>

          <h2
            className="
              mt-7
              max-w-[830px]
              text-[36px]
              font-normal
              leading-[1.02]
              tracking-[-0.045em]
              sm:text-[44px]
              md:text-[52px]
              lg:text-[58px]
            "
          >
            Muvuti is built around a simple idea:
            <span className="text-[#17130e]/45">
              {" "}
              protection should feel dependable, prepared and clear.
            </span>
            <br />
            We focus on what security requires in the real world.
          </h2>

          <div
            className="
              mt-12
              grid
              gap-3
              md:mt-16
              md:grid-cols-3
              md:gap-4
            "
          >
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    flex
                    min-h-[280px]
                    flex-col
                    justify-between
                    border
                    border-[#17130e]/12
                    bg-white
                    p-6
                    md:min-h-[330px]
                    md:p-7
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-[#17130e]/15
                      bg-[#17130e]
                      text-white
                    "
                  >
                    <Icon size={17} strokeWidth={1.6} />
                  </span>

                  <div>
                    <h3
                      className="
                        text-[25px]
                        font-normal
                        tracking-[-0.035em]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-[300px]
                        text-[13px]
                        leading-[1.55]
                        text-[#756b5b]
                        md:text-[14px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
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
            gap-10
            border-y
            border-[#17130e]/12
            py-12
            md:py-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          <div>
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#756b5b]
              "
            >
              Our approach
            </span>
          </div>

          <div>
            <h2
              className="
                max-w-[780px]
                text-[38px]
                font-normal
                leading-[1]
                tracking-[-0.045em]
                sm:text-[46px]
                md:text-[56px]
                lg:text-[64px]
              "
            >
              Protection built around presence, vigilance and response.
            </h2>

            <div
              className="
                mt-8
                grid
                gap-6
                text-[14px]
                leading-[1.65]
                text-[#756b5b]
                md:grid-cols-2
                md:text-[15px]
              "
            >
              <p>
                Muvuti Security Services provides around-the-clock protection
                solutions for homes, businesses, individuals and special
                events.
              </p>

              <p>
                From guarding and patrol services to surveillance, access
                control and close protection, our work centres on protecting
                people and property.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.2em]
              "
            >
              Talk to Muvuti

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#17130e]/20
                  transition-all
                  duration-300
                  group-hover:bg-[#17130e]
                  group-hover:text-white
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div
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
          <span
            className="
              inline-flex
              rounded-[4px]
              bg-[#f3efe7]
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#756b5b]
            "
          >
            Our team
          </span>

          <h2
            className="
              mt-7
              max-w-[720px]
              text-[38px]
              font-normal
              leading-[1]
              tracking-[-0.045em]
              sm:text-[46px]
              md:text-[56px]
            "
          >
            The people behind the protection.
          </h2>

          <div
            className="
              mt-12
              grid
              gap-4
              sm:grid-cols-2
              lg:mt-16
              lg:grid-cols-3
            "
          >
            {team.map((person) => (
              <article key={person.name}>
                <div
                  className="
                    relative
                    flex
                    aspect-[0.82]
                    items-center
                    justify-center
                    overflow-hidden
                    border
                    border-[#17130e]/12
                    bg-[#dfe7e2]
                  "
                >
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <span
                      className="
                        text-[72px]
                        font-normal
                        tracking-[-0.07em]
                        text-[#17130e]/18
                        md:text-[92px]
                      "
                    >
                      {person.initials}
                    </span>
                  )}
                </div>

                <div className="pt-5">
                  <h3
                    className="
                      text-[22px]
                      font-normal
                      tracking-[-0.03em]
                    "
                  >
                    {person.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.16em]
                      text-[#756b5b]
                    "
                  >
                    {person.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
