import { Button } from "@chakra-ui/react";

import React from "react";

export default function HeaderButton(props) {
  return (
    <Button
      color="white"
      textDecoration="none"
      fontSize="16px"
      border="none"
      background="none"
      fontFamily="Poppins"
      _before={{
        content: "''",
        width: "0%",
        height: "2px",
        background: "white",
        display: "block",
        transition: "width 0.5s",
        position: "absolute",
        bottom: "-1px",
        left: 0,
        right: 0,
        marginLeft: "auto",
      }}
      _hover={{
        _before: {
          width: "100%",
        },
      }}
      {...props}
    />
  );
}
