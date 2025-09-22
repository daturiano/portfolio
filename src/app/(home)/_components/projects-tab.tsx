import project from "@/app/public/ligtascab-1.png";
import { CodeSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Card from "./card";

const stackUsed = [
  { tech: "TypeScript", link: "https://www.typescriptlang.org/" },
  { tech: "NextJS", link: "https://nextjs.org/" },
  { tech: "TailwindCSS", link: "https://tailwindcss.com/" },
  { tech: "shadcn", link: "https://ui.shadcn.com/" },
  { tech: "Supabase", link: "https://supabase.com/" },
];

export default function ProjectsTab() {
  return (
    <Card className="h-full w-full gap-4">
      <div className="flex flex-row items-center gap-4">
        <CodeSimpleIcon size={28} className="text-muted" />
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
        <div className="flex flex-row flex-wrap gap-4">
          {stackUsed.map((item) => (
            <Link
              href={item.link}
              key={item.tech}
              className="bg-muted/20 hover:bg-muted/30 cursor-pointer rounded-sm px-4 py-1"
            >
              <p className="text-sm">{item.tech}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link
            href={"https://github.com/daturiano/ligtascab"}
            className="text-background flex w-min items-center justify-center gap-2 rounded-md bg-white px-3 py-1 text-sm font-semibold hover:bg-white/90"
          >
            <GithubLogoIcon />
            <p>Source</p>
          </Link>
        </div>
      </div>
    </Card>
  );
}
