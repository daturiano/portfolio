import React from "react";
import Avatar from "./avatar";
import AvailableForWork from "./contact-me";
import Card from "./card";
import { user } from "@/lib/data";

export default function HomeHeader() {
  return (
    <Card className="flex h-full flex-row items-center gap-6 py-10">
      <div className="hidden md:block">
        <Avatar />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-3xl font-bold">
            Hi, I&apos;m {user.first_name}.
            <span className="inline-block hover:animate-spin"> 👋</span>
          </p>
          <p className="text-2xl font-semibold text-white/85 md:text-3xl">
            I&apos;m a {user.role}.
          </p>
        </div>
        <div className="flex flex-row items-start">
          <AvailableForWork />
        </div>
      </div>
    </Card>
  );
}
