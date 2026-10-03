import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  "Visible presence",
  "Prepared personnel",
  "Dependable response",
];

export default function AboutPreview() {
  return (
    <section className="bg-[#dfece5] text-[#102d30]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-20
          md:px-8
          md:py-28
          lg:px-12
          lg:py-36
          xl:px-16
        "
      >
        {/* Top editorial layout */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >
          {/* Main statement */}
          <div>
            <div
              className="
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.26em]
                text-[#687876]
              "
            >
              <span className="h-[5px] w-[5px] rotate-45 bg-[#638e89]" />
              About Muvuti
            </div>

            <h2
              className="
                mt-6
                max-w-[760px]
                text-[43px]
                font-normal
                leading-[0.97]
                tracking-[-0.05em]
                sm:text-[52px]
                md:text-[62px]
                lg:text-[72px]
                xl:text-[80px]
              "
            >
              Security isn&apos;t
              <br />
              about being seen.
              <br />
              <span className="text-[#102d30]/45">
                It&apos;s about being ready.
              </span>
            </h2>
          </div>

          {/* Supporting content */}
          <div
            className="
              flex
              flex-col
              justify-end
              lg:pb-2
            "
          >
            <p
              className="
                max-w-[470px]
                text-[15px]
                leading-[1.65]
                text-[#586a68]
                md:text-[16px]
              "
            >
              Muvuti Security Services provides professional protection for
              homes, businesses, individuals and events. Our approach combines
              visible security personnel, vigilance and responsive service to
              help protect people and property around the clock.
            </p>

            {/* Principles */}
            <div
              className="
                mt-9
                border-t
                border-[#102d30]/15
              "
            >
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="
                    grid
                    min-h-[54px]
                    grid-cols-[36px_1fr]
                    items-center
                    border-b
                    border-[#102d30]/15
                  "
                >
                  <span
                    className="
                      text-[9px]
                      tracking-[0.18em]
                      text-[#687876]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[15px]
                      tracking-[-0.015em]
                      md:text-[16px]
                    "
                  >
                    {principle}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="
                group
                mt-8
                inline-flex
                w-fit
                items-center
                gap-3
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-[#102d30]
              "
            >
              Learn about Muvuti

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#102d30]/20
                  transition-all
                  duration-300
                  group-hover:bg-[#102d30]
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Large image */}
        <div
          className="
            relative
            mt-14
            min-h-[360px]
            overflow-hidden
            md:mt-20
            md:min-h-[520px]
            lg:min-h-[650px]
          "
        >
          <Image
            src="/images/about/about-security.jpg"
            alt="Muvuti security personnel"
            fill
            className="
              object-cover
              object-center
              grayscale
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-black/5
            "
          />

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              flex
              items-end
              justify-between
              gap-5
              text-white
              md:bottom-8
              md:left-8
              md:right-8
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-white/60
                "
              >
                Muvuti Security Services
              </p>

              <p
                className="
                  mt-2
                  max-w-[460px]
                  text-[22px]
                  font-normal
                  leading-[1.05]
                  tracking-[-0.035em]
                  md:text-[30px]
                "
              >
                Protection built around presence, preparedness and response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
