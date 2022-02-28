import Image from "next/image";
import React from "react";
import { Navigation } from "..";
import { Container } from "./TopBar.styles";

import UAFlag from "../../../public/assets/images/flag-ukraine.png";
import Link from "next/link";

export const TopBar = () => {
  
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Image
            src={UAFlag}
            alt="Ukraine flag"
            height={40}
            width={40}
            placeholder="blur"
          />
        </a>
      </Link>
      <Navigation />
    </Container>
  );
};
