import {
  BarbellIcon,
  BasketballIcon,
  GameControllerIcon,
  PersonIcon,
  TargetIcon,
} from "@phosphor-icons/react";
import Card from "./card";
import HomeFooter from "./home-footer";

export default function AboutTab() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="gap-4 px-12 py-12">
        <div className="flex flex-row items-center gap-4">
          <PersonIcon size={28} className="text-muted" weight="fill" />
          <h1 className="text-2xl font-semibold">About Me</h1>
        </div>
        <p className="text-muted text-justify">
          I’m a junior frontend developer passionate about building clean,
          responsive, and user-friendly applications. Currently, I’m finishing
          my Bachelor of Information Technology (expected graduation: 2026) and
          actively looking for opportunities to grow as a developer.
        </p>
      </Card>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex h-full flex-row gap-4">
          <Card className="w-[372px] gap-4 px-8">
            <div className="flex flex-row items-center gap-4">
              <TargetIcon size={28} className="text-muted" weight="fill" />
              <h1 className="text-2xl font-semibold">Career Goals</h1>
            </div>
            <p className="text-muted text-justify">
              I’m eager to gain real-world experience through internships,
              junior roles, or collaborations. My current focus is frontend
              development, but I’m also exploring backend integrations to become
              more well-rounded.
            </p>
          </Card>
          <Card className="flex-1 gap-4">
            <h1 className="text-2xl font-semibold">Hobbies</h1>
            <div className="flex flex-1 flex-col justify-between pb-4">
              {hobbies.map((item) => (
                <div
                  className="text-muted flex flex-row items-center justify-start gap-4"
                  key={item.title}
                >
                  <item.icon size={28} className="text-muted" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}

const hobbies = [
  { title: "Basketball", icon: BasketballIcon },
  { title: "Gym", icon: BarbellIcon },
  { title: "Gaming", icon: GameControllerIcon },
];
