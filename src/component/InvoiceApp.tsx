import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FaEarthAsia, FaGithub, FaTrophy } from "react-icons/fa6";
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

const InvoiceApp = () => {
  return (
    <>
      <TypeAnimation
        className={TypedStyleCss}
        sequence={["Invoice App."]}
        wrapper="span"
        cursor={false}
        repeat={1}
        // @ts-ignore
        speed={250}
      />
      <Text py="2">
        Basically, I built this application to challenge myself on designing
        lavel.
      </Text>
      <Text py="2">
        This challenge is provided by the front-end mentor on their website. I
        have implemented invoice management with inventory and completed this
        challenge by using Mantine Ui, Styled Component, Formik,formik and
        zustand.
      </Text>
      <Box display="flex" gap="1rem">
        <Text
          as="a"
          href="https://github.com/TheVegeta/invoice-app"
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
          href="https://thevegeta.github.io/invoice-app/"
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

        <Text
          as="a"
          href="https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl"
          target="_blank"
          fontSize="1.3rem"
          py="2"
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <FaTrophy />
          frontendmentor.io
        </Text>
      </Box>
    </>
  );
};

export default InvoiceApp;
