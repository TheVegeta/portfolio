import { Box, Text, useToast } from "@chakra-ui/react";
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

const linkContainerStyle = css`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    gap: 1rem;
  }
`;

const GalleryApp = () => {
  const toast = useToast();

  return (
    <>
      <TypeAnimation
        className={TypedStyleCss}
        sequence={["Gallary App."]}
        wrapper="span"
        cursor={false}
        repeat={1}
        // @ts-ignore
        speed={250}
      />
      <Text py="2">
        A simple gallery app built using Graphql, Nextjs, Typeorm, Postgresql
        and Imgbb as image hosting providers.
      </Text>
      <Text py="2">
        In this app, users can register, browse images with pagination, upload
        images, and add other people's images to their favorites if they like
        them.
      </Text>
      <Box className={linkContainerStyle}>
        <Text
          as="a"
          href="https://github.com/TheVegeta/gallary-app-next"
          target="_blank"
          fontSize="1.3rem"
          py="2"
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <FaGithub />
          Github Next.js
        </Text>

        <Text
          as="a"
          href="https://github.com/TheVegeta/gallary-app-api"
          target="_blank"
          fontSize="1.3rem"
          py="2"
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <FaGithub />
          Github Graphql
        </Text>

        <Text
          as="a"
          href="https://gallery-kf0q.onrender.com/"
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

export default GalleryApp;
