"use client";

import React from "react";
import profile from "@/app/public/profile.png";
import story from "@/app/public/image-1.jpeg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

type StoryModalProps = {
  isViewing: boolean;
  setIsViewing: (args: boolean) => void;
};

export default function StoryModal({
  isViewing,
  setIsViewing,
}: StoryModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const duration = 5;

  useEffect(() => {
    if (isViewing) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true);
      }, 100);
    } else {
      setIsAnimating(false);
    }
  }, [isViewing]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsViewing(false);
    }
  };

  return (
    <div
      className="bg-background/90 fixed inset-0 z-50 flex min-h-screen min-w-screen items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="relative flex h-[600px] w-[480px] flex-col items-center px-4">
        <Image
          objectFit="contain"
          src={story}
          alt="picture of a person"
          className="absolute -z-50 rounded-md"
        />
        <div className="mt-2 h-[5px] w-full rounded-full bg-white/30">
          <div
            className={`h-full rounded-full bg-white transition-all ease-linear ${
              isAnimating ? "w-full" : "w-0"
            }`}
            style={{
              transitionDuration: isAnimating ? `${duration}s` : "0s",
            }}
          />
        </div>
        <div className="flex w-full flex-1 flex-row items-start justify-between px-2 py-4">
          <div className="flex flex-row items-center gap-3">
            <div className="size-10 shrink-0 items-start overflow-hidden rounded-full">
              <Image src={profile} alt="picture of a person" />
            </div>
            <p className="font-semibold">Daniel Joshua Turiano</p>
          </div>
          <button
            onClick={() => setIsViewing(false)}
            className="cursor-pointer"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}
