"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#173f43] text-white">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0.88 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/security-hero.jpg"
          alt="Security services hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Main dark overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#0b1d20]/58
          via-[#0b1d20]/22
          to-[#0b1d20]/18
        "
      />

      {/* Soft top overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/18
          via-transparent
          to-black/12
        "
      />

      {/* Bottom fade for grounding text */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          relative z-10
          mx-auto flex min-h-[100svh] w-full max-w-[1440px]
          flex-col
          px-5 pb-8 pt-28
          md:px-8 md:pb-10 md:pt-32
          lg:px-12
          xl:px-16
        "
      >
        {/* Main content placed lower, similar to the reference */}
        <div className="flex flex-1 items-center">
          <div className="w-full pt-[10vh]">
            <div className="max-w-[940px]">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mb-6
                  flex items-center gap-3
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-white/65
                  md:mb-8
                "
              >
                <span className="block h-[5px] w-[5px] rotate-45 bg-[#b7d6cf]" />
                24/7 Security Services
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 72, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    max-w-[900px]
                    text-[54px]
                    font-normal
                    leading-[0.93]
                    tracking-[-0.055em]
                    text-white
                    sm:text-[64px]
                    md:text-[78px]
                    lg:text-[92px]
                    xl:text-[104px]
                  "
                >
                  Protection that
                  <br />
                  never switches off.
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 md:mt-10"
              >
                <Link
                  href="/services"
                  className="
                    group inline-flex h-[54px]
                    items-center gap-6
                    rounded-full
                    bg-[#15110d]
                    py-1.5 pl-6 pr-1.5
                    text-[14px] text-white
                    transition-all duration-300
                    hover:bg-[#123033]
                  "
                >
                  <span>Explore services</span>

                  <span
                    className="
                      flex h-[42px] w-[42px]
                      items-center justify-center
                      rounded-full
                      bg-[#dcebe3]
                      text-[#15110d]
                      transition-transform duration-300
                      group-hover:rotate-[-35deg]
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
          className="
            flex items-end justify-between
            border-t border-white/12
            pt-5
          "
        >
          <p
            className="
              max-w-[220px]
              text-[12px]
              leading-[1.45]
              text-white/78
              md:text-[13px]
            "
          >
            Protect people.
            <br />
            Protect property.
          </p>

          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="
              group flex items-center gap-3
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/65
              transition-colors duration-300
              hover:text-white
            "
          >
            Discover more

            <ArrowDown
              size={14}
              className="
                transition-transform duration-300
                group-hover:translate-y-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
