"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Pulse = {
  id: number;
  x: number;
  y: number;
};

export default function MobileTacticalFeedback() {
  const [enabled, setEnabled] = useState(false);
  const [pulses, setPulses] = useState<Pulse[]>([]);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    );

    function update() {
      setEnabled(media.matches);
    }

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.pointerType !== "touch" &&
        event.pointerType !== "pen"
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;

      const interactive = target?.closest<HTMLElement>(
        "a, button, [role='button'], .tactical-target, [data-tactical-target]"
      );

      if (interactive) {
        interactive.classList.add("muvuti-touch-active");

        window.setTimeout(() => {
          interactive.classList.remove("muvuti-touch-active");
        }, 260);
      }

      const pulse = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
      };

      setPulses((current) => [...current, pulse]);

      window.setTimeout(() => {
        setPulses((current) =>
          current.filter((item) => item.id !== pulse.id)
        );
      }, 520);
    }

    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {pulses.map((pulse) => (
        <motion.span
          key={pulse.id}
          aria-hidden="true"
          className="muvuti-mobile-pulse"
          style={{
            left: pulse.x,
            top: pulse.y,
          }}
          initial={{
            opacity: 0.72,
            scale: 0.2,
          }}
          animate={{
            opacity: 0,
            scale: 1.7,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </AnimatePresence>
  );
}
