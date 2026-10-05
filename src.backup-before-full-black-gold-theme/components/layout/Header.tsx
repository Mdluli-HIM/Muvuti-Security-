"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

function getCurrentMenuKey(pathname: string) {
  const activeItem = navigation.find((item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href)
  );

  return activeItem?.label ?? "Home";
}

export default function Header() {
  const pathname = usePathname();
  const currentMenuKey = getCurrentMenuKey(pathname);

  const [open, setOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const itemRefs = useRef<
    Record<string, HTMLAnchorElement | null>
  >({});

  /*
   * Hovered link takes priority.
   * When nothing is hovered, return to current page.
   */
  const indicatorKey = hoveredKey ?? currentMenuKey;

  /*
   * Lock page scrolling while menu is open.
   * Escape closes the menu.
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setHoveredKey(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /*
   * Reset hover state when route changes.
   */
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpen(false);
      setHoveredKey(null);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [currentMenuKey]);

  /*
   * This is the important Meroe-style interaction.
   *
   * We measure the selected link's vertical center
   * relative to the nav container.
   *
   * Framer Motion then smoothly animates ONE diamond
   * between those measured positions.
   */
  useEffect(() => {
    if (!open) return;

    const updateIndicator = () => {
      const nav = navRef.current;
      const activeItem = itemRefs.current[indicatorKey];

      if (!nav || !activeItem) {
        setIndicatorVisible(false);
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      const top =
        itemRect.top -
        navRect.top +
        itemRect.height / 2;

      setIndicatorTop(top);
      setIndicatorVisible(true);
    };

    const frame =
      window.requestAnimationFrame(updateIndicator);

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(
        "resize",
        updateIndicator
      );
    };
  }, [open, indicatorKey]);

  function closeMenu() {
    setOpen(false);
    setHoveredKey(null);
  }

  return (
    <>
      {/* COMPACT TOP NAV */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.header
            className="
              pointer-events-none
              fixed inset-x-0 top-4
              z-50
              flex justify-center
              px-5
              md:top-5
            "
            initial={{
              opacity: 0,
              y: -14,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.22,
                ease: [0.4, 0, 1, 1],
              },
            }}
          >
            <div
              className="
                pointer-events-auto
                flex
                w-full
                max-w-[340px]
                items-stretch
                border border-[rgba(178,138,80,0.22)]
                bg-[linear-gradient(180deg,rgba(21,17,13,0.96),rgba(24,19,14,0.98))]/72
                text-[#f3efe7]
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              {/* LOGO */}
              <Link
                href="/"
                aria-label="Muvuti Security homepage"
                className="
                  flex h-[48px]
                  w-[58px]
                  items-center
                  justify-center
                  border-r border-[rgba(178,138,80,0.22)]
                  transition-opacity
                  duration-300
                  hover:opacity-80
                  md:h-[50px]
                  md:w-[60px]
                "
              >
                <Image
                  src="/images/logo/muvuti-logo.png"
                  alt="Muvuti Security logo"
                  width={32}
                  height={32}
                  priority
                  className="
                    h-[30px]
                    w-[30px]
                    object-contain
                  "
                />
              </Link>

              {/* CURRENT PAGE */}
              <div
                className="
                  flex flex-1
                  items-center
                  justify-center
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#f3efe7]/85
                "
              >
                {currentMenuKey}
              </div>

              {/* MENU */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="
                  group flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  border-l border-[rgba(178,138,80,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#f3efe7]/5
                  md:h-[50px]
                "
              >
                <Menu
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* OPEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.35,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.25,
              },
            }}
          >
            {/* BACKDROP */}
            <motion.div
              className="
                absolute inset-0
                bg-[#0b2c2f]/50
                backdrop-blur-[7px]
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.35,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              onClick={closeMenu}
            />

            {/* PANEL WRAPPER */}
            <div
              className="
                relative
                flex min-h-screen
                items-center
                justify-center
                px-5
                py-16
                md:py-20
              "
            >
              <motion.div
                className="
                  relative
                  w-full
                  max-w-[460px]
                  overflow-visible
                  border border-[rgba(178,138,80,0.22)]
                  bg-[rgba(16,56,59,0.96)]
                  text-[#f3efe7]
                  shadow-[0_28px_90px_rgba(0,0,0,0.3)]
                  backdrop-blur-[18px]
                "
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 24,
                  scale: 0.99,
                  transition: {
                    duration: 0.25,
                    ease: [0.4, 0, 1, 1],
                  },
                }}
              >
                {/* FLOATING LOGO */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.88,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.55,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.94,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="
                    absolute
                    left-1/2
                muvuti-floating-logo
                    -top-[80px]
                    z-30
                    -translate-x-1/2
                  "
                >
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href="/"
                      onClick={closeMenu}
                      aria-label="Muvuti Security homepage"
                      className="
                        group
                        flex
                        h-[66px]
                        w-[66px]
                        items-center
                        justify-center
                        border
                        border-white/15
                        bg-[linear-gradient(180deg,rgba(21,17,13,0.96),rgba(24,19,14,0.98))]
                        shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        ease-[cubic-bezier(.22,1,.36,1)]
                        hover:scale-[1.03]
                      "
                    >
                      <Image
                        src="/images/logo/muvuti-logo.png"
                        alt="Muvuti Security"
                        width={48}
                        height={48}
                        priority
                        className="
                          h-[48px]
                          w-[48px]
                          object-contain
                        "
                      />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* SUBTLE SURFACE */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))]
                  "
                />

                <div className="relative p-7 md:p-8">
                  {/* TOP */}
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.45,
                          delay: 0.08,
                        },
                      }}
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.28em]
                          text-[#f3efe7]/50
                        "
                      >
                        Menu
                      </p>

                      <p
                        className="
                          mt-4
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#f3efe7]/80
                        "
                      >
                        Muvuti Security
                      </p>
                    </motion.div>

                    <motion.button
                      type="button"
                      onClick={closeMenu}
                      aria-label="Close menu"
                      className="
                        group
                        inline-flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        border border-white/20
                        text-[#f3efe7]
                        transition-all
                        duration-300
                        hover:border-white/40
                        hover:bg-[#f3efe7]/5
                      "
                      initial={{
                        opacity: 0,
                        rotate: -8,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                        transition: {
                          duration: 0.45,
                          delay: 0.1,
                        },
                      }}
                    >
                      <X
                        size={16}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-90
                        "
                      />
                    </motion.button>
                  </div>

                  {/* NAVIGATION */}
                  <nav
                    ref={navRef}
                    className="
                      relative
                      mt-9
                      flex
                      flex-col
                    "
                    onMouseLeave={() =>
                      setHoveredKey(null)
                    }
                  >
                    {/* ONE MOVING DIAMOND */}
                    <motion.span
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute left-0
                        h-[7px]
                        w-[7px]
                        -translate-y-1/2
                        rotate-45
                        rounded-[1px]
                        bg-[#8fc7bf]
                        ${
                          indicatorVisible
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                      animate={{
                        top: indicatorTop,
                        opacity: indicatorVisible ? 1 : 0,

                        transition: {
                          top: {
                            duration: 0.32,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          },

                          opacity: {
                            duration: 0.2,
                          },
                        },
                      }}
                    />

                    {navigation.map(
                      (item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{
                            opacity: 0,
                            y: 16,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,

                            transition: {
                              duration: 0.45,
                              delay:
                                0.1 +
                                index * 0.05,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            },
                          }}
                        >
                          <Link
                            href={item.href}
                            ref={(element) => {
                              itemRefs.current[
                                item.label
                              ] = element;
                            }}
                            onClick={closeMenu}
                            onMouseEnter={() =>
                              setHoveredKey(
                                item.label
                              )
                            }
                            onFocus={() =>
                              setHoveredKey(
                                item.label
                              )
                            }
                            className="
                              group
                              relative
                              block
                              border-b
                              border-white/[0.08]
                              py-2.5
                              pl-7
                              text-[clamp(2rem,5vw,2.8rem)]
                              font-light
                              leading-[0.96]
                              tracking-[-0.055em]
                              text-[#f3efe7]
                              transition-colors
                              duration-300
                              hover:text-[#f3efe7]/80
                            "
                          >
                            <span
                              className="
                                inline-block
                                transition-transform
                                duration-300
                                ease-out
                                group-hover:translate-x-[6px]
                              "
                            >
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      )
                    )}
                  </nav>

                  {/* INFO */}
                  <motion.div
                    className="
                      mt-9
                      grid
                      gap-5
                      border-t
                      border-[rgba(178,138,80,0.22)]
                      pt-6
                      text-[10px]
                      leading-[1.65]
                      text-[#f3efe7]/60
                      sm:grid-cols-2
                    "
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,

                      transition: {
                        duration: 0.45,
                        delay: 0.32,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      },
                    }}
                  >
                    <div>
                      <p className="text-[#f3efe7]/80">
                        Protection · Presence · Response
                      </p>

                      <p className="mt-2">
                        Nkowankowa Section B
                      </p>

                      <p>South Africa</p>
                    </div>

                    <div>
                      <a
                        href={company.emailHref}
                        className="
                          block
                          transition-colors
                          duration-300
                          hover:text-[#f3efe7]
                        "
                      >
                        {company.email}
                      </a>

                      <a
                        href={company.phoneHref}
                        className="
                          mt-2 block
                          transition-colors
                          duration-300
                          hover:text-[#f3efe7]
                        "
                      >
                        {company.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,

                      transition: {
                        duration: 0.45,
                        delay: 0.4,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      },
                    }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="muvuti-btn-secondary
              
                        group
                        mt-7
                        inline-flex
                        h-[44px]
                        items-center
                        gap-4
                        bg-[#eef2ef]
                        px-5
                        text-[#15110d]
                        transition-colors
                        duration-300
                        hover:bg-[#f3efe7]
                      "
                    >
                      <ArrowUpRight
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.23em]
                        "
                      >
                        Request protection
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
