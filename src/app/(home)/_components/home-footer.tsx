"use client";

import github from "@/app/public/tech-stack/gh-light.png";
import linkedin from "@/app/public/tech-stack/linkedin.png";
import { FileArrowDownIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SpotlightButton } from "./ui/spotlight-btn";

const Meteors = dynamic(
  () => import("./ui/meteors").then((mod) => ({ default: mod.Meteors })),
  {
    ssr: false,
  },
);

export default function HomeFooter() {
  return (
    <div className="flex h-full w-full flex-row justify-end gap-4">
      <div className="relative flex-1 gap-4 overflow-hidden rounded-lg border border-[#292929] px-6 py-4 shadow-md">
        <Meteors number={15} />
        <div className="relative z-10 flex items-center justify-center gap-4">
          <div className="border-muted/60 bg-muted/10 rounded-md border px-2 py-2">
            <PaperPlaneTiltIcon size={24} className="text-[#3b82f6]" />
          </div>
          <p className="text-foreground/80 text-lg font-semibold">
            Like what you see? Reach out{" "}
            <span className="text-accent underline">via email</span> to
            collaborate!
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="group flex items-center justify-center rounded-md border border-[#292929] px-10 py-2 transition-all duration-300">
          <Image
            src={linkedin}
            alt="linkedin icon"
            className="duration-300 group-hover:-translate-y-2"
            height={38}
            width={38}
          />
        </div>
        <div className="group flex items-center justify-center rounded-md border border-[#292929] px-10 py-2 transition-all duration-300">
          <Image
            src={github}
            alt="github icon"
            className="duration-300 group-hover:-translate-y-2"
            height={38}
            width={38}
          />
        </div>
      </div>
      <div className="flex max-w-[204px] min-w-[204px] flex-col justify-between gap-4">
        <SpotlightButton
          spotlightColor="#3b82f6"
          className="bg-muted/10 flex flex-row items-center justify-center gap-2 rounded-md border border-[#292929]"
        >
          <p className="text-sm font-semibold">Resume</p>
          <FileArrowDownIcon />
        </SpotlightButton>
        <div className="flex flex-row items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-1">
          <p className="text-lg">🇵🇭</p>
          <p className="text-xs whitespace-nowrap">Based in Philippines</p>
        </div>
      </div>
    </div>
  );
}
