import AboutMe from "./_components/about-me";
import Navigation from "./_components/navigation";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      <div className="col-span-3 row-span-2">
        <AboutMe />
      </div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-3"></div>
      <div className="col-span-3 col-start-1 row-start-5"></div>
      <div className="col-start-4 row-span-5 row-start-1 space-y-4">
        <Navigation />
      </div>
    </div>
  );
}
