import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

const LoginButton = (props: Props) => {
  return (
    <Link href="/login" passHref>
      <a>
        <Button colorScheme="blue" variant="outline">
          Login
        </Button>
      </a>
    </Link>
  );
};

export default LoginButton;
