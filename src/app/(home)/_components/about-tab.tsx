import { user } from "@/lib/data";
import { PersonIcon, TargetIcon } from "@phosphor-icons/react";
import Card from "./card";
import HomeFooter from "./home-footer";

export default function AboutTab() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="gap-4 px-8 md:px-12 md:py-12">
        <div className="flex flex-row items-center gap-4">
          <PersonIcon size={28} className="text-muted" weight="fill" />
          <h1 className="text-2xl font-semibold">About Me</h1>
        </div>
        <p className="text-muted">{user.about}</p>
      </Card>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex h-full flex-col gap-4 md:flex-row">
          <Card className="gap-4 px-8 md:w-[372px]">
            <div className="flex flex-row items-center gap-4">
              <TargetIcon size={28} className="text-muted" weight="fill" />
              <h1 className="text-2xl font-semibold">Career Goals</h1>
            </div>
            <p className="text-muted">{user.career_goals}</p>
          </Card>
          <Card className="flex-1 gap-4">
            <h1 className="text-2xl font-semibold">Hobbies</h1>
            <div className="flex flex-1 flex-col justify-between gap-4 pb-4 md:gap-0">
              {user.hobbies.map((item) => (
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
