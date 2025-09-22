"use client";

import { PaperclipIcon } from "@phosphor-icons/react";
import { useNavigation } from "./navigation-provider";

export default function AvailableForWork() {
  const { setTab } = useNavigation();
  return (
    <div className="relative inline-block overflow-hidden">
      <div className="group cursor-pointer">
        <div className="flex flex-row items-center gap-2 transition-all duration-300 ease-in-out">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="border-muted flex items-center gap-2 transition-transform duration-1000 ease-in-out group-hover:-translate-y-full group-hover:opacity-50">
            <span className="text-muted text-sm font-medium whitespace-nowrap md:text-base">
              Available for work
            </span>
          </div>
          <button
            className="absolute inset-0 flex translate-y-full cursor-pointer items-center justify-center gap-1 opacity-0 transition-transform duration-1000 ease-in-out group-hover:-translate-y-0 group-hover:opacity-100"
            onClick={() => setTab("Contact")}
          >
            <span className="text-muted text-sm font-medium whitespace-nowrap md:text-base">
              Contact me
            </span>
            <PaperclipIcon className="text-muted" />
          </button>
        </div>
      </div>
    </div>
  );
}
