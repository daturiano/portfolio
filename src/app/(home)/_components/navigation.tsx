"use client";

import {
  AtIcon,
  CodeIcon,
  HouseIcon,
  StudentIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import Card from "./card";

const navigation = [
  { icon: HouseIcon, title: "Home" },
  { icon: UserCircleIcon, title: "About" },
  { icon: StudentIcon, title: "Education" },
  { icon: CodeIcon, title: "Projects" },
  { icon: AtIcon, title: "Contact" },
];

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <>
      <Card className="flex h-full flex-1 flex-col items-end justify-between px-4">
        {navigation.map((item) => (
          <button
            key={item.title}
            onClick={() => setCurrentTab(item.title)}
            className={`${currentTab == item.title ? "text-accent font-semibold" : "text-muted/60 hover:text-foreground"} $ flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-2`}
          >
            <p>{item.title}</p>
            {currentTab == item.title ? (
              <item.icon size={22} weight="fill" />
            ) : (
              <item.icon size={22} />
            )}
          </button>
        ))}
        <div className="bg-muted/60 h-[1px] w-full px-4"></div>
        <button className="flex w-full items-center justify-center rounded-md border px-2 py-2">
          <p className="text-sm font-semibold">Download CV</p>
        </button>
      </Card>
      <Card className="flex-row items-center justify-center gap-2 border-zinc-800 px-10 py-2">
        <p className="text-xl">🇵🇭</p>
        <p className="text-sm whitespace-nowrap">Based in Philippines</p>
      </Card>
    </>
  );
}
