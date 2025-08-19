"use client";

import { PaperclipIcon } from "@phosphor-icons/react";

export default function AvailableForWork() {
  return (
    <div className="relative inline-block overflow-hidden">
      <div className="group cursor-pointer">
        <div className="flex flex-row items-center gap-2 transition-all duration-300 ease-in-out">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="border-muted flex items-center gap-2 transition-transform duration-1000 ease-in-out group-hover:-translate-y-full group-hover:opacity-50">
            <span className="text-muted font-medium whitespace-nowrap">
              Available for work
            </span>
          </div>
          <div className="absolute inset-0 flex translate-y-full items-center justify-center gap-1 opacity-0 transition-transform duration-1000 ease-in-out group-hover:-translate-y-0 group-hover:opacity-100">
            <span className="text-muted font-medium whitespace-nowrap">
              Contact me
            </span>
            <PaperclipIcon className="text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
