"use client";

import profile from "@/app/public/profile.png";
import Image from "next/image";
import { useState } from "react";
import StoryModal from "./story-modal";

export default function Avatar() {
  const [isViewed, setIsViewed] = useState<boolean>(false);
  const [isViewing, setIsViewing] = useState<boolean>(false);

  return (
    <>
      <div
        className={`relative flex size-26 shrink-0 overflow-hidden rounded-full border-4 ${!isViewed ? "border-blue-600" : "border-muted"}`}
      >
        <div className="relative flex size-24 shrink-0 overflow-hidden rounded-full border-2 border-black">
          <Image
            onClick={() => {
              setIsViewing(true);
              setIsViewed(true);
            }}
            src={profile}
            alt="picture of a person"
            className="aspect-square size-full cursor-pointer"
          />
        </div>
      </div>
      {isViewing && <StoryModal isViewing setIsViewing={setIsViewing} />}
    </>
  );
}
