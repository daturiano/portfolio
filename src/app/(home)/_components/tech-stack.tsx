import React from "react";
import Card from "./card";
import cssLight from "@/app/public/tech-stack/css-light.png";
import css from "@/app/public/tech-stack/css.png";
import htmlLight from "@/app/public/tech-stack/html-light.png";
import html from "@/app/public/tech-stack/html.png";
import tsLight from "@/app/public/tech-stack/ts-light.png";
import ts from "@/app/public/tech-stack/ts.png";
import reactLight from "@/app/public/tech-stack/react-light.png";
import react from "@/app/public/tech-stack/react.png";
import nextLight from "@/app/public/tech-stack/next-light.png";
import next from "@/app/public/tech-stack/next.png";
import twLight from "@/app/public/tech-stack/tw-light.png";
import tw from "@/app/public/tech-stack/tw.png";
import sbLight from "@/app/public/tech-stack/sb-light.png";
import sb from "@/app/public/tech-stack/sb.png";
import gitLight from "@/app/public/tech-stack/git-light.png";
import git from "@/app/public/tech-stack/git.png";
import Image from "next/image";

const stacks = [
  { title: "HTML 5", imageLight: htmlLight, image: html },
  { title: "CSS", imageLight: cssLight, image: css },
  { title: "TypeScript", imageLight: tsLight, image: ts },
  { title: "React", imageLight: reactLight, image: react },
  { title: "Next.js", imageLight: nextLight, image: next },
  { title: "Tailwind", imageLight: twLight, image: tw },
  { title: "Supabase", imageLight: sbLight, image: sb },
  { title: "Git", imageLight: gitLight, image: git },
];

export default function TechStack() {
  return (
    <Card className="h-full gap-6">
      <div className="text-muted text-pretty">
        <p>
          <span className="font-semibold text-white">
            Current Technologies ·{" "}
          </span>
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions.{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-3 select-none">
        {stacks.map((item) => (
          <div
            key={item.title}
            className="group hover:bg-muted/10 flex h-full min-h-[80px] flex-col items-center justify-center gap-2 rounded-md transition-all duration-300"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                height={30}
                width={30}
                className="transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={item.imageLight}
                alt={item.title}
                height={30}
                width={30}
                className="absolute inset-0 opacity-0 duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
              />
            </div>
            <p className="text-muted group-hover:text-foreground text-sm font-semibold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
