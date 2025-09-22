"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import Avatar from "./avatar";
import Background from "./background";
import Navigation from "./navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="z-50 mb-2 flex flex-1 items-center justify-between">
        <Avatar />
        <button
          className="hover:bg-muted/10 flex cursor-pointer items-center justify-center rounded-md border border-[#292929] p-2"
          onClick={() => setIsOpen((p) => !p)}
        >
          <ListIcon size={28} />
        </button>
      </div>
      {isOpen && (
        <div className="bg-background fixed inset-0 z-50 flex min-h-screen min-w-screen flex-col items-center justify-start p-4">
          <Background />
          <div className="flex w-full justify-end">
            <button
              className="hover:bg-muted/10 flex cursor-pointer items-center justify-center rounded-md border border-[#292929] p-2"
              onClick={() => setIsOpen((p) => !p)}
            >
              <XIcon size={28} />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Navigation setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </>
  );
}
