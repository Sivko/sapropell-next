import TextParallaxSection from "@/components/text-parallax";
import MainSection from "./main-section";
import InfoSection from "./info-section";
import Header from "@/components/header";

export default function Sections() {
  return (
    <div>
      <Header />
      <MainSection />
      <TextParallaxSection />
      <InfoSection />
    </div>
  );
}
