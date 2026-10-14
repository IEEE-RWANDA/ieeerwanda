import { EventsBlock } from "@/app/components/Sections";
import { LandingHero, LandingIntro, LandingStory, LandingCommunities } from "@/app/components/Landing";
import "./landing.css";

export default function Home() {
  return (
    <div className="landing">
      <LandingHero />
      <LandingIntro />
      <div className="landing-events"><EventsBlock alt /></div>
      <LandingStory />
      <LandingCommunities />
    </div>
  );
}
