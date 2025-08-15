import AboutMe from "./_components/about-me";
import GridCard from "./_components/grid-card";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4">
      <GridCard className="col-span-2 row-span-2 py-10">
        <AboutMe />
      </GridCard>
      <GridCard className="col-span-2 col-start-1 row-span-2 row-start-3"></GridCard>
      <GridCard className="col-span-2 col-start-1 row-start-5"></GridCard>
      <GridCard className="col-start-3 row-span-5 row-start-1"></GridCard>
    </div>
  );
}
