"use client";

import Link from "next/link";

import Card from "./card";
import ShinyButton from "./ui/shiny-button";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Card className="relative flex flex-col justify-center border antialiased">
      <div>
        <div className="space-y-8 p-10">
          <h1 className="relative z-10 text-3xl font-bold md:max-w-[25ch] md:leading-[110%]">
            Like what you see? Reach out{" "}
            <Link
              href="mailto:dturiano.r@gmail.com"
              className="text-accent hover:text-accent/80 border-primary hover:border-primary/80 border-b-2 transition-colors duration-200"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h1>
          <ShinyButton>
            <Link href="mailto:dturiano.r@gmail.com">Schedule call</Link>
          </ShinyButton>
        </div>

        <div className="flex flex-row items-end justify-between border-t border-white/10 p-10">
          <h3 className="relative z-10 text-lg font-bold">
            Daniel Joshua Turiano
          </h3>
          <p className="text-muted relative z-10 text-sm">
            &copy; {currentYear} | All rights reserved.
          </p>
        </div>
      </div>
    </Card>
  );
}
