import AboutMe from "./about-me";
import HomeFooter from "./home-footer";
import TechStack from "./tech-stack";

export default function HomeGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-6 gap-4">
      <div className="col-span-2 row-span-2">
        <AboutMe />
      </div>
      <div className="col-span-2 row-span-3">
        <TechStack />
      </div>
      <div className="col-span-2">
        <HomeFooter />
      </div>
    </div>
  );
}
