import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FaGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const TypedStyleCss = css`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`;

const PixelLite = () => {
  return (
    <>
      <TypeAnimation
        className={TypedStyleCss}
        sequence={["Pixel Lite."]}
        wrapper="span"
        cursor={false}
        repeat={1}
        // @ts-ignore
        speed={250}
      />
      <Text py="2">
        Pixel Lite is a desktop application built for compressing various types
        of image files to reduce and optimize the image. so the user can use it
        in multiple places without having to worry about running out of space.
        Typically, images captured with smartphones take 10mb or more of storage
        space.
      </Text>
      <Text py="2">
        This app is built using electron.js, node.js, chakra UI, and Sharp. By
        building this application, I have learned about inter-process
        communication (IPC) and how it works internally in electron.js.
      </Text>
      <Box display="flex" gap="1rem">
        <Text
          as="a"
          href="https://github.com/TheVegeta/pixellite"
          target="_blank"
          fontSize="1.3rem"
          py="2"
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <FaGithub />
          Github
        </Text>
      </Box>
    </>
  );
};

export default PixelLite;
