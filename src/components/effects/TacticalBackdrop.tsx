type TacticalBackdropProps = {
  label?: string;
  number?: string;
  dark?: boolean;
};

export default function TacticalBackdrop({
  label = "MUVUTI SECURITY",
  number = "24 / 7",
  dark = false,
}: TacticalBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        ${dark ? "text-white" : "text-[#102d30]"}
      `}
    >
      {/* faint grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)]
          [background-size:46px_46px]
        "
      />

      {/* large sight */}
      <div
        className="
          absolute
          right-[7%]
          top-1/2
          hidden
          h-[260px]
          w-[260px]
          -translate-y-1/2
          rounded-full
          border
          border-current
          opacity-[0.05]
          lg:block
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[110px]
            w-[110px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-current
          "
        />

        <span
          className="
            absolute
            left-1/2
            top-[-24px]
            h-[48px]
            w-px
            -translate-x-1/2
            bg-current
          "
        />

        <span
          className="
            absolute
            bottom-[-24px]
            left-1/2
            h-[48px]
            w-px
            -translate-x-1/2
            bg-current
          "
        />

        <span
          className="
            left-[-24px]
            top-1/2
            absolute
            h-px
            w-[48px]
            -translate-y-1/2
            bg-current
          "
        />

        <span
          className="
            right-[-24px]
            top-1/2
            absolute
            h-px
            w-[48px]
            -translate-y-1/2
            bg-current
          "
        />
      </div>

      {/* scan */}
      <div
        className="
          muvuti-scan-line
          absolute
          left-0
          right-0
          top-0
          h-px
          opacity-20
        "
      />

      {/* corner calibration */}
      <div
        className="
          absolute
          left-5
          top-5
          h-4
          w-4
          border-l
          border-t
          border-current
          opacity-20
          md:left-8
          md:top-8
        "
      />

      <div
        className="
          absolute
          bottom-5
          right-5
          h-4
          w-4
          border-b
          border-r
          border-current
          opacity-20
          md:bottom-8
          md:right-8
        "
      />

      {/* technical labels */}
      <span
        className="
          absolute
          bottom-5
          left-5
          text-[7px]
          uppercase
          tracking-[0.28em]
          opacity-25
          md:bottom-8
          md:left-8
        "
      >
        {label}
      </span>

      <span
        className="
          absolute
          right-5
          top-5
          text-[7px]
          uppercase
          tracking-[0.28em]
          opacity-25
          md:right-8
          md:top-8
        "
      >
        {number}
      </span>
    </div>
  );
}
