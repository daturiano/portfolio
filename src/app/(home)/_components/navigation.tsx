"use client";

import {
  AtIcon,
  CodeIcon,
  FileArrowDownIcon,
  HouseIcon,
  Icon,
  StudentIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import Card from "./card";
import { Tab, useNavigation } from "./navigation-provider";
import { SpotlightButton } from "./ui/spotlight-btn";

interface NavigationItem {
  icon: Icon;
  title: Tab;
}

const navigation: NavigationItem[] = [
  { icon: HouseIcon, title: "Home" },
  { icon: UserCircleIcon, title: "About" },
  { icon: StudentIcon, title: "Education" },
  { icon: CodeIcon, title: "Projects" },
  { icon: AtIcon, title: "Contact" },
];

export default function Navigation() {
  const { tab, setTab } = useNavigation();

  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="flex flex-1 flex-col items-end justify-between px-4 py-8">
        {navigation.map((item) => (
          <button
            key={item.title}
            onClick={() => setTab(item.title)}
            className={`${tab == item.title ? "text-accent font-semibold" : "text-muted/60 hover:text-foreground"} $ flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-2`}
          >
            <p>{item.title}</p>
            {tab == item.title ? (
              <item.icon size={22} weight="fill" />
            ) : (
              <item.icon size={22} />
            )}
          </button>
        ))}
      </Card>
      <div className="flex max-w-[204px] min-w-[204px] flex-col justify-between gap-4">
        <SpotlightButton
          spotlightColor="#3b82f6"
          className="bg-muted/10 flex flex-row items-center justify-center gap-2 rounded-md border border-[#292929] py-2"
        >
          <p className="text-sm font-semibold">Resume</p>
          <FileArrowDownIcon />
        </SpotlightButton>
        <div className="flex flex-row items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-1">
          <p className="text-lg">🇵🇭</p>
          <p className="text-xs whitespace-nowrap">Based in Philippines</p>
        </div>
      </div>
    </div>
  );
}
