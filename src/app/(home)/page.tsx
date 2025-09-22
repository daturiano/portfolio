"use client";

import AboutTab from "./_components/about-tab";
import ContactTab from "./_components/contact-tab";
import EducationTab from "./_components/education-tab";
import HomeTab from "./_components/home-tab";
import { useNavigation } from "./_components/navigation-provider";
import ProjectsTab from "./_components/projects-tab";

export default function Index() {
  const { tab } = useNavigation();
  return (
    <div className="h-full">
      {tab == "Home" && <HomeTab />}
      {tab === "Education" && <EducationTab />}
      {tab === "Projects" && <ProjectsTab />}
      {tab == "About" && <AboutTab />}
      {tab === "Contact" && <ContactTab />}
    </div>
  );
}
