import HeroSection from "@/components/templates/HeroSection/HeroSection";
import AryanawebDigitalMarketing from "@/components/templates/HpmePage/AryanawebResuems/AryanawebDigitalMarketing";
import AryanawebResuems from "@/components/templates/HpmePage/AryanawebResuems/AryanawebResuems";
import AryanaWebServices from "@/components/templates/HpmePage/AryanaWebServices";
import AryanawebTeamMember from "@/components/templates/HpmePage/AryanawebTeamMember/AryanawebTeamMember";
import ContactUsSection from "@/components/templates/HpmePage/ContactUsSection";
import WebsiteHighlits from "@/components/templates/HpmePage/WebsiteHighlits/WebsiteHighlits";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <WebsiteHighlits />
      <HeroSection />
      <AryanaWebServices />
      <AryanawebResuems />
      <AryanawebDigitalMarketing />
      <ContactUsSection />
      <AryanawebTeamMember />
    </>
  );
}
