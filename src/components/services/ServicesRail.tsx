"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Crosshair } from "lucide-react";
import {
  PointerEvent,
  useRef,
  useState,
} from "react";

import { services } from "@/data/services";

const visualMap: Record<
  string,
  {
    image?: string;
    tone: "light" | "mint" | "dark";
  }
> = {
  guarding: {
    image: "/images/solutions/guarding.jpg",
    tone: "light",
  },

  response: {
    image: "/images/solutions/patrol.jpg",
    tone: "mint",
  },

  surveillance: {
    image: "/images/solutions/surveillance.jpg",
    tone: "light",
  },

  protection: {
    tone: "dark",
  },

  "access-control": {
    tone: "mint",
  },

  events: {
    tone: "light",
  },
};

function getTone(tone: "light" | "mint" | "dark") {
  if (tone === "dark") {
    return {
      card: "bg-[#102d30] text-white",
      muted: "text-white/55",
      border: "border-white/12",
      circle:
        "border-white/20 bg-white text-[#102d30]",
    };
  }

  if (tone === "mint") {
    return {
      card: "bg-[#dfece5] text-[#102d30]",
      muted: "text-[#687876]",
      border: "border-[#102d30]/12",
      circle:
        "border-[#102d30]/15 bg-white text-[#102d30]",
    };
  }

  return {
    card: "bg-[#f7f8f6] text-[#102d30]",
    muted: "text-[#687876]",
    border: "border-[#102d30]/12",
    circle:
      "border-[#102d30]/15 bg-white text-[#102d30]",
  };
}

export default function ServicesRail() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragged = useRef(false);

  const [dragging, setDragging] = useState(false);

  function handlePointerDown(
    event: PointerEvent<HTMLDivElement>
  ) {
    const rail = railRef.current;

    if (!rail) return;

    startX.current = event.clientX;
    startScroll.current = rail.scrollLeft;

    dragged.current = false;

    rail.setPointerCapture(event.pointerId);

    setDragging(true);
  }

  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    const rail = railRef.current;

    if (!rail || !dragging) return;

    const distance =
      event.clientX - startX.current;

    if (Math.abs(distance) > 5) {
      dragged.current = true;
    }

    rail.scrollLeft =
      startScroll.current - distance;
  }

  function endDrag(
    event: PointerEvent<HTMLDivElement>
  ) {
    const rail = railRef.current;

    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }

    setDragging(false);
  }

  return (
    <div className="relative">
      {/* DRAG INDICATOR */}
      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-[-26px]
          z-20
          hidden
          h-[58px]
          w-[58px]
          items-center
          justify-center
          border
          border-[#102d30]/12
          bg-white/95
          text-[#102d30]
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          backdrop-blur
          md:flex
          lg:right-10
        "
      >
        <div className="text-center">
          <Crosshair
            size={13}
            strokeWidth={1.4}
            className="mx-auto"
          />

          <span
            className="
              mt-1
              block
              text-[7px]
              uppercase
              tracking-[0.18em]
            "
          >
            Drag
          </span>
        </div>
      </div>

      <div
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (dragged.current) {
            event.preventDefault();
            event.stopPropagation();

            dragged.current = false;
          }
        }}
        className={`
          flex
          select-none
          gap-3
          overflow-x-auto
          overscroll-x-contain
          pb-4
          pr-[10vw]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          ${
            dragging
              ? "cursor-grabbing"
              : "cursor-grab"
          }
        `}
      >
        {services.map((service) => {
          const visual =
            visualMap[service.id] ??
            visualMap.guard;

          const tone = getTone(visual.tone);

          return (
            <article
              key={service.id}
              className={`
                tactical-target
                relative
                flex
                h-[510px]
                w-[82vw]
                max-w-[380px]
                shrink-0
                flex-col
                overflow-hidden
                border
                sm:w-[360px]
                lg:h-[560px]
                lg:w-[390px]
                ${tone.card}
                ${tone.border}
              `}
            >
              {/* IMAGE / VISUAL */}
              {visual.image ? (
                <div
                  className="
                    relative
                    h-[48%]
                    overflow-hidden
                    border-b
                    border-inherit
                  "
                >
                  <Image
                    src={visual.image}
                    alt={service.title}
                    fill
                    draggable={false}
                    sizes="(max-width: 639px) 82vw, 390px"
                    className="
                      pointer-events-none
                      object-cover
                      grayscale
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-[1.025]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-black/5
                    "
                  />
                </div>
              ) : (
                <div
                  className="
                    relative
                    flex
                    h-[48%]
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-inherit
                  "
                >
                  {/* Tactical visual instead of fake photography */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[140px]
                      w-[140px]
                      -translate-x-1/2
                      -translate-y-1/2
                      border
                      border-current
                      opacity-[0.08]
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[74px]
                      w-[74px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      border
                      border-current
                      opacity-[0.12]
                    "
                  />

                  <Crosshair
                    size={28}
                    strokeWidth={1}
                    className="opacity-30"
                  />

                  <span
                    className="
                      absolute
                      bottom-5
                      left-5
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      opacity-40
                    "
                  >
                    Muvuti / {service.number}
                  </span>
                </div>
              )}

              {/* CONTENT */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-between
                  p-6
                  md:p-7
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className={`
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        ${tone.muted}
                      `}
                    >
                      Service {service.number}
                    </span>

                    <span
                      className={`
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        ${tone.muted}
                      `}
                    >
                      24 / 7
                    </span>
                  </div>

                  <h2
                    className="
                      mt-6
                      text-[32px]
                      font-normal
                      leading-[0.98]
                      tracking-[-0.045em]
                      md:text-[35px]
                    "
                  >
                    {service.title}
                  </h2>

                  <p
                    className={`
                      mt-5
                      max-w-[300px]
                      text-[13px]
                      leading-[1.6]
                      ${tone.muted}
                    `}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <p
                    className={`
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      ${tone.muted}
                    `}
                  >
                    Protection / Response
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={`Enquire about ${service.title}`}
                    className={`
                      tactical-target
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      border
                      transition-transform
                      duration-300
                      hover:-translate-y-1
                      ${tone.circle}
                    `}
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
