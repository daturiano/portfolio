import HomeFooter from "./home-footer";
import HomeHeader from "./home-header";
import TechStack from "./tech-stack";

export default function HomeTab() {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-6">
      <div className="col-span-2 row-span-2">
        <HomeHeader />
      </div>
      <div className="md:col-span-2 md:row-span-3">
        <TechStack />
      </div>
      <div className="md:col-span-2">
        <HomeFooter />
      </div>
    </div>
  );
}
