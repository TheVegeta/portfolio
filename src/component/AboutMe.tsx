import { Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
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

const AboutMe = () => {
  return (
    <>
      <TypeAnimation
        className={TypedStyleCss}
        sequence={["Welcome."]}
        wrapper="span"
        cursor={false}
        repeat={1}
        // @ts-ignore
        speed={250}
      />
      <Text py="2">
        My name is Chauhan Harsh, I'm a full-stack developer living in Vadodara,
        Gujrat, India.
      </Text>
      <Text py="2">
        I'm passionate about cutting-edge technology implementation and creating
        the most challenging and difficult stuff. Programming is a hobby for me,
        so I'm always up for new challenges.
      </Text>
    </>
  );
};

export default AboutMe;
