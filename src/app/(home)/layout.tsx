import React from "react";
import Background from "./_components/background";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[54rem] items-center justify-center">
      <Background />
      <div className="font-raleway flex-1">{children}</div>
    </div>
  );
}
