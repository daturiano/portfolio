"use client";

import github from "@/app/public/tech-stack/gh-light.png";
import linkedin from "@/app/public/tech-stack/linkedin.png";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function HomeFooter() {
  return (
    <div className="flex w-full flex-col justify-end gap-4 md:flex-row">
      <div className="relative order-2 flex-1 gap-4 overflow-hidden rounded-lg border border-[#292929] px-6 py-4 shadow-md">
        <div className="bg-background relative z-10 flex items-center justify-center gap-4">
          <div className="border-muted/60 bg-muted/10 rounded-md border px-2 py-2">
            <PaperPlaneTiltIcon size={24} className="text-[#3b82f6]" />
          </div>
          <p className="text-foreground/80 text-lg font-semibold">
            Like what you see? Reach out{" "}
            <a
              className="text-accent underline"
              href="mailto:dturiano.r@gmail.com"
            >
              via email
            </a>{" "}
            to collaborate!
          </p>
        </div>
      </div>
      <div className="z-40 order-1 flex w-full flex-row gap-4 md:w-max">
        <a
          className="group bg-background flex w-full items-center justify-center rounded-md border border-[#292929] px-10 py-8 transition-all duration-300 md:py-2"
          href="https://www.linkedin.com/in/daturiano/"
        >
          <Image
            src={linkedin}
            alt="linkedin icon"
            className="duration-300 group-hover:-translate-y-2"
            height={38}
            width={38}
          />
        </a>
        <a
          className="group bg-background flex w-full items-center justify-center rounded-md border border-[#292929] px-10 py-8 transition-all duration-300 md:py-2"
          href="https://github.com/daturiano"
        >
          <Image
            src={github}
            alt="github icon"
            className="duration-300 group-hover:-translate-y-2"
            height={38}
            width={38}
          />
        </a>
      </div>
    </div>
  );
}
