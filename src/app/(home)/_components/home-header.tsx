import React from "react";
import Avatar from "./avatar";
import AvailableForWork from "./contact-me";
import Card from "./card";

export default function HomeHeader() {
  return (
    <Card className="flex h-full flex-row items-center gap-6 py-10">
      <Avatar />
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-3xl font-semibold">
            Hi, I&apos;m Daniel{" "}
            <span className="inline-block hover:animate-spin"> 👋</span>
          </p>
          <p className="text-3xl font-semibold">
            I&apos;m a Junior Frontend Developer.
          </p>
        </div>
        <div className="flex flex-row items-start">
          <AvailableForWork />
        </div>
      </div>
    </Card>
  );
}
