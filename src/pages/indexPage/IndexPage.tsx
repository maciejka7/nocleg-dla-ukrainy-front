import React from "react";
import { LastOfferSection, HeroSection } from "../../organisms";

type Props = {};

export const IndexPage = (props: Props) => {
  return (
    <section>
      <HeroSection />
      <LastOfferSection />
    </section>
  );
};
