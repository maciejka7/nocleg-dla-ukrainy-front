import React from "react";
import HeroSection from "./heroSection";
import LastOfferSection from "./lastOfferSection";

type Props = {};

export const IndexPage = (props: Props) => {
  return (
    <section>
      <HeroSection />
      <LastOfferSection />
    </section>
  );
};
