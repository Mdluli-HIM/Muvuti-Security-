import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "Security Guarding",
    description:
      "Professional armed and unarmed guarding for homes, businesses and properties.",
    image: "/images/solutions/guarding.jpg",
    href: "/services/security-guarding",
    position: "object-center",
  },
  {
    number: "02",
    title: "Response & Patrol",
    description:
      "Around-the-clock patrol services and dependable security response.",
    image: "/images/solutions/patrol.jpg",
    href: "/services/response-and-patrol",
    position: "object-center",
  },
  {
    number: "03",
    title: "Surveillance",
    description:
      "CCTV monitoring, alarm systems and intelligent surveillance solutions.",
    image: "/images/solutions/surveillance.jpg",
    href: "/services/surveillance",
    position: "object-center",
  },
];

export default function SolutionsPreview() {
  return (
    <section
      className="
        bg-[#f3efe7]
        text-[#17130e]
      "
    >
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
          lg:py-32
          xl:px-16
        "
      >
        {/* Section introduction */}
        <div
          className="
            mb-12
            grid
            gap-6
            md:mb-16
            md:grid-cols-[1fr_1fr]
            md:items-end
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
                tracking-[0.26em]
                text-[#756b5b]
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]
                  rotate-45
                  bg-[#b28a50]
                "
              />

              Security solutions
            </div>

            <h2
              className="
                mt-5
                max-w-[620px]
                text-[42px]
                font-normal
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[64px]
              "
            >
              Protection designed
              <br />
              around the real world.
            </h2>
          </div>

          <p
            className="
              max-w-[430px]
              text-[14px]
              leading-[1.6]
              text-[#756b5b]
              md:justify-self-end
              md:text-[15px]
            "
          >
            From visible security personnel to patrol and surveillance,
            Muvuti provides protection built around the people and places
            that matter.
          </p>
        </div>

        {/* MOBILE / TABLET LIST */}
        <div className="border-t border-[#17130e]/12 lg:hidden">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                grid
                grid-cols-[92px_1fr]
                gap-4
                border-b
                border-[#17130e]/12
                py-4
                sm:grid-cols-[116px_1fr]
                sm:gap-6
                sm:py-5
              "
            >
              <div
                className="
                  relative
                  aspect-[0.9]
                  overflow-hidden
                  bg-[#dfe7e2]
                "
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 92px, (max-width: 1023px) 116px, 33vw"
                  className={`
                    object-cover
                    grayscale
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:scale-[1.04]
                    ${item.position}
                  `}
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-[18px]
                      font-normal
                      tracking-[-0.025em]
                      sm:text-[22px]
                    "
                  >
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={15}
                    className="
                      mt-1
                      shrink-0
                      text-[#17130e]/35
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#17130e]
                    "
                  />
                </div>

                <p
                  className="
                    mt-2
                    max-w-[390px]
                    text-[12px]
                    leading-[1.5]
                    text-[#756b5b]
                    sm:text-[13px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* DESKTOP CARDS */}
        <div
          className="
            hidden
            border-y
            border-[#17130e]/12
            lg:grid
            lg:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
                group
                flex
                h-full
                min-w-0
                flex-col
                px-5
                py-5
                ${index !== items.length - 1 ? "border-r border-[#17130e]/12" : ""}
              `}
            >
              {/* Equal image area */}
              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  bg-[#dfe7e2]
                "
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 92px, (max-width: 1023px) 116px, 33vw"
                  className={`
                    object-cover
                    grayscale
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:scale-[1.025]
                    ${item.position}
                  `}
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/5
                    transition-colors
                    duration-500
                    group-hover:bg-transparent
                  "
                />
              </div>

              {/* Equal content structure */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  pt-6
                "
              >
                <span
                  className="
                    block
                    h-[18px]
                    text-[9px]
                    tracking-[0.2em]
                    text-[#756b5b]
                  "
                >
                  {item.number}
                </span>

                <div
                  className="
                    mt-3
                    flex
                    min-h-[42px]
                    items-start
                    justify-between
                    gap-5
                  "
                >
                  <h3
                    className="
                      text-[26px]
                      font-normal
                      leading-[1]
                      tracking-[-0.035em]
                      xl:text-[30px]
                    "
                  >
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={17}
                    className="
                      mt-1
                      shrink-0
                      text-[#17130e]/35
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#17130e]
                    "
                  />
                </div>

                <p
                  className="
                    mt-4
                    max-w-[360px]
                    text-[13px]
                    leading-[1.6]
                    text-[#756b5b]
                  "
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* LARGE FEATURE IMAGE */}
        <div
          className="
            relative
            mt-6
            min-h-[360px]
            overflow-hidden
            sm:min-h-[440px]
            md:mt-8
            md:min-h-[520px]
            lg:mt-10
            lg:min-h-[600px]
          "
        >
          <Image
            src="/images/solutions/services-feature.jpg"
            alt="Muvuti security services"
            fill
            sizes="(max-width: 1440px) 100vw, 1312px"
            className="
              object-cover
              object-center
              grayscale
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/48
              via-black/5
              to-transparent
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              flex
              items-end
              justify-between
              gap-5
              p-5
              sm:p-6
              md:p-8
            "
          >
            <div className="hidden text-white md:block">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-white/65
                "
              >
                Muvuti Security Services
              </p>

              <p
                className="
                  mt-2
                  max-w-[420px]
                  text-[26px]
                  leading-[1.05]
                  tracking-[-0.035em]
                "
              >
                Security that stays ready when you need it.
              </p>
            </div>

            <Link
              href="/services"
              className="
                group
                inline-flex
                h-[46px]
                items-center
                gap-5
                rounded-full
                bg-[#eef2ef]/95
                py-1
                pl-5
                pr-1
                text-[12px]
                text-[#17130e]
                backdrop-blur
                transition-colors
                duration-300
                hover:bg-white
                md:h-[50px]
                md:text-[13px]
              "
            >
              Explore all services

              <span
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#15110d]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:rotate-[-35deg]
                  md:h-[42px]
                  md:w-[42px]
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
