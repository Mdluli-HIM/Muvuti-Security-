"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import { company } from "@/data/company";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto =
      `${company.emailHref}` +
      `?subject=${encodeURIComponent(subject || "Security enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border
        border-[#102d30]/12
        bg-[#f4f6f4]
        p-6
        md:p-8
        lg:p-10
      "
    >
      <div>
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-[#687876]
          "
        >
          Send an enquiry
        </p>

        <h2
          className="
            mt-4
            text-[32px]
            font-normal
            leading-[1]
            tracking-[-0.04em]
            md:text-[38px]
          "
        >
          Get in touch.
        </h2>

        <p
          className="
            mt-4
            max-w-[440px]
            text-[13px]
            leading-[1.6]
            text-[#687876]
          "
        >
          Tell us what you need protected and we&apos;ll help you understand
          the security solution that best fits your requirements.
        </p>
      </div>

      <div className="mt-10">
        <label className="block border-b border-[#102d30]/15 pb-3">
          <span
            className="
              block
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#687876]
            "
          >
            Full name
          </span>

          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="
              mt-2
              w-full
              bg-transparent
              text-[15px]
              outline-none
              placeholder:text-[#102d30]/25
            "
            placeholder="Your name"
          />
        </label>

        <label className="mt-7 block border-b border-[#102d30]/15 pb-3">
          <span
            className="
              block
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#687876]
            "
          >
            Email
          </span>

          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="
              mt-2
              w-full
              bg-transparent
              text-[15px]
              outline-none
              placeholder:text-[#102d30]/25
            "
            placeholder="you@email.com"
          />
        </label>

        <label className="mt-7 block border-b border-[#102d30]/15 pb-3">
          <span
            className="
              block
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#687876]
            "
          >
            Subject
          </span>

          <input
            name="subject"
            type="text"
            className="
              mt-2
              w-full
              bg-transparent
              text-[15px]
              outline-none
              placeholder:text-[#102d30]/25
            "
            placeholder="What do you need help with?"
          />
        </label>

        <label className="mt-7 block border-b border-[#102d30]/15 pb-3">
          <span
            className="
              block
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#687876]
            "
          >
            Message
          </span>

          <textarea
            required
            name="message"
            rows={5}
            className="
              mt-3
              w-full
              resize-none
              bg-transparent
              text-[15px]
              leading-[1.6]
              outline-none
              placeholder:text-[#102d30]/25
            "
            placeholder="Tell us about your security requirements..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="
          tactical-target
          tactical-target
          group
          mt-8
          inline-flex
          h-[48px]
          items-center
          gap-5
          bg-[#102d30]
          px-5
          text-white
          transition-colors
          duration-300
          hover:bg-[#194247]
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
          "
        >
          Send enquiry
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
      </button>
    </form>
  );
}
