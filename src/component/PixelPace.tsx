import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FaEarthAsia, FaGithub } from "react-icons/fa6";
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

const PixelPace = () => {
  return (
    <>
      <TypeAnimation
        className={TypedStyleCss}
        sequence={["Pixel Pace."]}
        wrapper="span"
        cursor={false}
        repeat={1}
        // @ts-ignore
        speed={250}
      />
      <Text py="2">
        Pixel Pace is a simple car driving game implemented in three.js, Canon,
        and React to build a smaller demo game in three.js with a physics
        engine.
      </Text>

      <Text py="2">
        The game also includes features like first- or third-person view,
        collision detection, and physics simulation.
      </Text>

      <Box display="flex" gap="1rem">
        <Text
          as="a"
          href="https://github.com/TheVegeta/pixel-pace"
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

        <Text
          as="a"
          href="https://thevegeta.github.io/pixel-pace/"
          target="_blank"
          fontSize="1.3rem"
          py="2"
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <FaEarthAsia />
          Demo
        </Text>
      </Box>
    </>
  );
};

export default PixelPace;
