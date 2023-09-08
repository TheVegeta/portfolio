import { Grid, GridItem, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { TypeAnimation } from "react-type-animation";
import AppContainer from "./component/AppContainer";

const containerStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`;

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

const App = () => {
  return (
    <AppContainer className={containerStyle}>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={8} className={containerStyle}>
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
            My name is Chauhan Harsh, I'm a front-end developer based in
            Torquay, Devon, UK. I have developed many types of front-ends from
            well know DJ applications to Ecommerce booking platforms.
          </Text>
          <Text py="2">
            I'm passionate about cutting-edge, pixel-perfect, beautiful
            interfaces and intuitively implemented UX.{" "}
          </Text>
        </GridItem>
        <GridItem colSpan={4} className={containerStyle}>
          <Text fontSize="3rem">Projects</Text>
          <Text>Pixel Pace</Text>
          <Text>Invoice App</Text>
          <Text>Gallary App</Text>
          <Text>Pixel Lite</Text>
        </GridItem>
      </Grid>
    </AppContainer>
  );
};

export default App;
