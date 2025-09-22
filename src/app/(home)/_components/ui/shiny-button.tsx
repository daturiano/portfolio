import React from "react";

const ShinyButton = ({
  children,
  icon,
  iconPosition = "right",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}) => {
  return (
    <button className="animate-shimmer border-dark-700 relative z-10 inline-flex h-12 items-center justify-center gap-2.5 self-start rounded-md border bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] bg-[length:200%_100%] px-6 text-sm font-medium text-slate-200 transition-colors hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 focus:outline-none sm:text-base">
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default ShinyButton;
