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
    <Card className="flex h-full flex-1 flex-col items-end justify-between px-4 py-8">
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
    </Card>
  );
}
