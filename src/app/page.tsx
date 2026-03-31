import Hero from "@/components/home/Hero";
import MissionPillars from "@/components/home/MissionPillars";
import ImpactChain from "@/components/home/ImpactChain";
import FeaturedPets from "@/components/home/FeaturedPets";
import RescueHighlight from "@/components/home/RescueHighlight";
import Stats from "@/components/home/Stats";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionPillars />
      <ImpactChain />
      <FeaturedPets />
      <RescueHighlight />
      <Stats />
      <FinalCTA />
    </>
  );
}
