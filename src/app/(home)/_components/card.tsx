import { cn } from "@/lib/utils";
import React from "react";

export default function Card({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col rounded-md border border-[#292929] p-6",
        className,
      )}
      {...props}
    />
  );
}
