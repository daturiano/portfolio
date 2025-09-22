import React from "react";
import Background from "./_components/background";
import NavigationProvider from "./_components/navigation-provider";
import Navigation from "./_components/navigation";
import { Meteors } from "./_components/ui/meteors";
import MobileNavigation from "./_components/mobile-navigation";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="font-raleway mx-auto flex min-h-screen max-w-[54rem] flex-col items-center justify-start space-y-4 md:justify-center">
        <Meteors number={5} />
        <Background />
        <div className="z-50 flex w-full max-w-[54rem] flex-col gap-4 p-4 md:flex-row md:px-0 md:py-0">
          <div className="block md:hidden">
            <MobileNavigation />
          </div>
          <div className="flex-1">{children}</div>
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>
        <p className="py-4 text-xs md:py-0">
          Made by{" "}
          <span className="text-accent italic">Daniel Joshua Turiano</span>
        </p>
      </div>
    </NavigationProvider>
  );
}
