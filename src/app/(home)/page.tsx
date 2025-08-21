"use client";

import HomeGrid from "./_components/home-grid";
import { useNavigation } from "./_components/navigation-provider";
import Projects from "./_components/projects";

export default function Index() {
  const { tab } = useNavigation();
  return (
    <>
      {tab == "Home" && <HomeGrid />}
      {tab === "Projects" && <Projects />}
    </>
  );
}
