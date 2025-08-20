import React from "react";
import Background from "./_components/background";
import NavigationProvider from "./_components/navigation-provider";
import Navigation from "./_components/navigation";
import { Meteors } from "./_components/ui/meteors";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="font-raleway mx-auto flex min-h-screen max-w-[54rem] flex-col items-center justify-center space-y-4">
        <Meteors number={5} />
        <Background />
        <div className="z-50 flex flex-row">
          <div className="flex flex-row gap-4">
            {children}
            <Navigation />
          </div>
        </div>
        <p className="text-xs">
          Made by{" "}
          <span className="text-accent italic">Daniel Joshua Turiano</span>
        </p>
      </div>
    </NavigationProvider>
  );
}
