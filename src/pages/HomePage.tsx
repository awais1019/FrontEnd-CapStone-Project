import HeroSection from "../components/HeroSection";
import Specials from "../components/Specials";


export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <Specials/>
    </div>
  );
}

