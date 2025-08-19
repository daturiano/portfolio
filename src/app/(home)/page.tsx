import AboutMe from "./_components/about-me";
import HomeFooter from "./_components/home-footer";
import Navigation from "./_components/navigation";
import TechStack from "./_components/tech-stack";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4">
      <div className="col-span-3 row-span-2">
        <AboutMe />
      </div>
      <div className="col-span-3 col-start-1 row-span-3 row-start-3">
        <TechStack />
      </div>
      <div className="col-span-3 col-start-1 row-start-6">
        <HomeFooter />
      </div>
      <div className="col-start-4 row-span-6 row-start-1">
        <Navigation />
      </div>
    </div>
  );
}
