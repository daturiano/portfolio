import React from "react";
import Card from "./card";
import Image from "next/image";
import project from "@/app/public/ligtascab-1.png";
import {
  CodeSimpleIcon,
  GithubLogoIcon,
  GoogleChromeLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const stackUsed = [
  "TypeScript",
  "NextJS",
  "TailwindCSS",
  "shadcn/ui",
  "Supabase",
];

export default function Projects() {
  return (
    <Card className="h-full w-full gap-4">
      <div className="flex flex-row items-center gap-4">
        <CodeSimpleIcon size={32} />
        <h1 className="text-2xl font-bold">Featured Projects</h1>
      </div>
      <Image
        src={project}
        alt="ligtascab app landing page"
        className="rounded-md border-4 border-[#292929] shadow-md"
      />
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-2xl font-semibold">Ligtascab</p>
          <p className="text-muted">
            LigtasCab is a digital platform that makes Naga City’s tricycle
            system safer, more efficient, and transparent for commuters,
            operators, and authorities.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          {stackUsed.map((item) => (
            <div key={item} className="bg-muted/20 rounded-sm px-4 py-1">
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link
            href={"https://github.com/daturiano/ligtascab"}
            className="text-background flex w-min items-center justify-center gap-2 rounded-md bg-white px-3 py-1 text-sm font-semibold"
          >
            <GoogleChromeLogoIcon />
            <p>Website</p>
          </Link>
          <Link
            href={"https://github.com/daturiano/ligtascab"}
            className="text-background flex w-min items-center justify-center gap-2 rounded-md bg-white px-3 py-1 text-sm font-semibold"
          >
            <GithubLogoIcon />
            <p>Source</p>
          </Link>
        </div>
      </div>
    </Card>
  );
}
