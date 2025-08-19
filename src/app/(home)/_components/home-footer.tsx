"use client";

import github from "@/app/public/tech-stack/gh-light.png";
import linkedin from "@/app/public/tech-stack/linkedin-light.png";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Meteors = dynamic(
  () => import("./meteors").then((mod) => ({ default: mod.Meteors })),
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
            <PaperPlaneTiltIcon size={24} />
          </div>
          <p className="text-foreground/80 text-lg font-semibold">
            Like what you see? Reach out{" "}
            <span className="text-accent underline">via email</span> to
            collaborate!
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-md bg-[#0A66C2] px-10 py-2">
          <Image src={linkedin} alt="linkedin icon" height={38} width={38} />
        </div>
        <div className="flex items-center justify-center rounded-md bg-[#24292F] px-10 py-2">
          <Image src={github} alt="github icon" height={38} width={38} />
        </div>
      </div>
    </div>
  );
}
