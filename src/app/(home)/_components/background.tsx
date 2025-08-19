import React from "react";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 -z-10 h-full w-full">
      {/* <div className="absolute h-64 w-full bg-gradient-to-b from-[#63e]/10 to-transparent"></div> */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_85%_at_50%_35%,#171717_10%,transparent_100%)] bg-[size:32px_32px]"></div>
    </div>
  );
}
