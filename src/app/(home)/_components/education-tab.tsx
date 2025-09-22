import React from "react";
import HomeFooter from "./home-footer";
import Card from "./card";
import { GraduationCapIcon } from "@phosphor-icons/react";
import Image from "next/image";
import uncLogo from "@/app/public/unc.png";
import udemyLogo from "@/app/public/udemy.png";
import Link from "next/link";

export default function EducationTab() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="flex-1 gap-4 px-8 py-8">
        <div className="flex flex-row items-center gap-4">
          <GraduationCapIcon size={28} className="text-muted" weight="fill" />
          <h1 className="text-2xl font-semibold">Education</h1>
        </div>
        <p className="text-muted md:text-justify">
          My educational background has provided me with a solid foundation of
          software engineering principles.
        </p>
        <div className="relative flex flex-1 flex-col">
          <div className="bg-muted absolute inset-0 left-7 z-10 h-full w-[1px] md:left-13"></div>
          <div className="relative flex flex-row gap-4 py-4 md:px-6">
            <Image src={uncLogo} alt="unc logo" className="z-25 mt-1 size-14" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col leading-5">
                <p className="text-muted text-sm">August 2022 - Present</p>
                <Link
                  href={"https://unc.edu.ph/"}
                  className="font-semibold hover:text-blue-500"
                >
                  University of Nueva Caceres
                </Link>
                <p className="text-muted">
                  Bachelor of Science in Information Technology
                </p>
              </div>
              <div>
                <p className="text-sm">
                  Frontend Development, Backend & Database Management,
                  Programming Foundations, Web Development, Software Engineering
                  Practices.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row gap-4 md:px-6">
            <Image
              src={udemyLogo}
              alt="udemy logo"
              className="z-25 mt-1 size-14"
            />
            <div className="flex flex-col gap-5">
              {udemy.map((item) => (
                <div className="flex flex-col leading-5" key={item.title}>
                  <Link
                    href={item.link}
                    className="font-semibold hover:text-blue-500"
                  >
                    {item.title}
                  </Link>
                  <p className="text-muted text-sm">By {item.by}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <HomeFooter />
    </div>
  );
}

const udemy = [
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    by: "Jonas Schmedtmann",
    link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
  },
  {
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    by: "Jonas Schmedtmann",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, & More",
    by: "Jonas Schmedtmann",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
];
