import Hero from "@/components/home/Hero";
import FeaturedPets from "@/components/home/FeaturedPets";
import Stats from "@/components/home/Stats";
import MissionPillars from "@/components/home/MissionPillars";
import ImpactChain from "@/components/home/ImpactChain";
import RescueHighlight from "@/components/home/RescueHighlight";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPets />
      <Stats />
      <MissionPillars />
      <ImpactChain />
      <RescueHighlight />
      <FinalCTA />
    </>
  );
}
