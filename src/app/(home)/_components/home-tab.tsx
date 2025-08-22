import HomeFooter from "./home-footer";
import HomeHeader from "./home-header";
import TechStack from "./tech-stack";

export default function HomeTab() {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-6 gap-4">
      <div className="col-span-2 row-span-2">
        <HomeHeader />
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
