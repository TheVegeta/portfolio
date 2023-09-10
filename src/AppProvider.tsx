import {
  ChakraProvider,
  Container,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const theme: ThemeConfig = extendTheme({
  fonts: {
    heading: `'Sriracha', sans-serif;`,
    body: `'Sriracha', sans-serif;`,
  },
  config: { initialColorMode: "dark" },
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Container maxW="container.lg" p="1rem">
          {children}
        </Container>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
