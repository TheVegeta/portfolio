import { Grid, GridItem, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useState } from "react";
import AboutMe from "./component/AboutMe";
import AppContainer from "./component/AppContainer";
import GalleryApp from "./component/GalleryApp";
import InvoiceApp from "./component/InvoiceApp";
import PixelLite from "./component/PixelLite";
import PixelPace from "./component/PixelPace";

const containerStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 60vh;

  & {
    /* margin-top: 1rem; */
  }

  @media (min-width: 992px) {
    & {
      margin-top: unset;
    }
  }
`;

const bottomContainerStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 60vh;

  @media (max-width: 992px) {
    & {
      align-items: flex-start !important;
      justify-content: flex-start !important;
    }
  }
`;

const gridStyle = css`
  & {
    display: flex !important;
    flex-direction: column !important;
  }

  @media (min-width: 992px) {
    & {
      display: grid !important;
      flex-direction: unset !important;
    }
  }
`;

const App = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const changeCurrIndex = (id: number) => () => {
    window.scrollTo({ top: -100, behavior: "smooth" });
    setCurrIndex(id);
  };

  return (
    <AppContainer className={containerStyle}>
      <Grid templateColumns="repeat(12, 1fr)" className={gridStyle}>
        <GridItem colSpan={8} className={containerStyle}>
          {currIndex === 0 && <AboutMe />}
          {currIndex === 1 && <GalleryApp />}
          {currIndex === 2 && <PixelLite />}
          {currIndex === 3 && <PixelPace />}
          {currIndex === 4 && <InvoiceApp />}
        </GridItem>
        <GridItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          colSpan={4}
          className={bottomContainerStyle}
        >
          <Text fontSize="3rem">Projects</Text>
          <Text
            mt="1"
            _hover={{ cursor: "pointer" }}
            sx={{ textDecoration: "underline" }}
            onClick={changeCurrIndex(1)}
          >
            Gallary App
          </Text>
          <Text
            mt="1"
            _hover={{ cursor: "pointer" }}
            sx={{ textDecoration: "underline" }}
            onClick={changeCurrIndex(2)}
          >
            Pixel Lite
          </Text>
          <Text
            mt="1"
            _hover={{ cursor: "pointer" }}
            sx={{ textDecoration: "underline" }}
            onClick={changeCurrIndex(3)}
          >
            Pixel Pace
          </Text>
          <Text
            mt="1"
            _hover={{ cursor: "pointer" }}
            sx={{ textDecoration: "underline" }}
            onClick={changeCurrIndex(4)}
          >
            Invoice App
          </Text>
        </GridItem>
      </Grid>
    </AppContainer>
  );
};

export default App;
