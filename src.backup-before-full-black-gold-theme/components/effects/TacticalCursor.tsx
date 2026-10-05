"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Pulse = {
  id: number;
  x: number;
  y: number;
};

export default function TacticalCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const targetX = useRef(0);
  const targetY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const initialized = useRef(false);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [overEmbed, setOverEmbed] = useState(false);
  const [pulses, setPulses] = useState<Pulse[]>([]);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)"
    );

    function update() {
      const shouldEnable = media.matches;

      setEnabled(shouldEnable);

      document.documentElement.classList.toggle(
        "muvuti-custom-cursor",
        shouldEnable
      );
    }

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);

      document.documentElement.classList.remove(
        "muvuti-custom-cursor"
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function renderCursor() {
      if (!cursorRef.current) {
        animationFrameRef.current =
          requestAnimationFrame(renderCursor);

        return;
      }

      if (!initialized.current) {
        currentX.current = targetX.current;
        currentY.current = targetY.current;

        initialized.current = true;
      }

      /*
       * Controlled smoothing.
       * Higher = faster/snappier.
       */
      const follow = 0.32;

      currentX.current +=
        (targetX.current - currentX.current) * follow;

      currentY.current +=
        (targetY.current - currentY.current) * follow;

      cursorRef.current.style.transform =
        `translate3d(${currentX.current}px, ${currentY.current}px, 0)`;

      animationFrameRef.current =
        requestAnimationFrame(renderCursor);
    }

    animationFrameRef.current =
      requestAnimationFrame(renderCursor);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    function handleMove(event: MouseEvent) {
      targetX.current = event.clientX;
      targetY.current = event.clientY;

      setVisible(true);
      setOverEmbed(false);
    }

    function handleMouseOver(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      const embed = Boolean(
        target.closest("iframe, video[controls]")
      );

      const textInput = Boolean(
        target.closest(
          "input, textarea, select, [contenteditable='true']"
        )
      );

      const actionable = Boolean(
        target.closest(
          "a, button, [role='button'], [data-tactical-target], .tactical-target"
        )
      );

      setOverEmbed(embed);
      setInteractive(actionable && !textInput);
    }

    function handleMouseLeave() {
      setVisible(false);
    }

    function handleMouseEnter() {
      setVisible(true);
    }

    function handleWindowBlur() {
      setVisible(false);
    }

    function handleWindowFocus() {
      setVisible(true);
    }

    function handleClick(event: PointerEvent) {
      const target = event.target as HTMLElement | null;

      if (
        target?.closest(
          "input, textarea, select, [contenteditable='true'], iframe"
        )
      ) {
        return;
      }

      const pulse: Pulse = {
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

    document.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    document.addEventListener("mouseover", handleMouseOver);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("pointerdown", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("pointerdown", handleClick);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`
          muvuti-reticle
          ${visible && !overEmbed ? "is-visible" : ""}
          ${interactive ? "is-interactive" : ""}
        `}
      >
        <span className="muvuti-reticle-ring" />

        <span className="muvuti-reticle-dot" />

        <span className="muvuti-reticle-line line-top" />
        <span className="muvuti-reticle-line line-right" />
        <span className="muvuti-reticle-line line-bottom" />
        <span className="muvuti-reticle-line line-left" />

        <span className="muvuti-reticle-corner corner-tl" />
        <span className="muvuti-reticle-corner corner-tr" />
        <span className="muvuti-reticle-corner corner-bl" />
        <span className="muvuti-reticle-corner corner-br" />
      </div>

      <AnimatePresence>
        {pulses.map((pulse) => (
          <motion.span
            key={pulse.id}
            aria-hidden="true"
            className="muvuti-click-pulse"
            style={{
              left: pulse.x,
              top: pulse.y,
            }}
            initial={{
              opacity: 0.7,
              scale: 0.25,
            }}
            animate={{
              opacity: 0,
              scale: 1.8,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
