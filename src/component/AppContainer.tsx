import { Container } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FC, ReactNode } from "react";

const borderTopCss = css`
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  & {
    position: relative;
    z-index: 0;
    width: 29%;
    height: 29vh;
    border-radius: 0px;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #00a4c1;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#7a51ac, #7a51ac),
      linear-gradient(#5fff7b, #5fff7b);
    -webkit-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 1rem;
    top: 1rem;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #1a202c;
    border-radius: 5px;
  }
`;

const borderBottomCss = css`
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  & {
    position: relative;
    z-index: 0;
    width: 29%;
    height: 29vh;
    border-radius: 0px;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
    margin-left: auto;
    margin-top: calc(40vh - 2rem);
    display: none;
  }

  @media (min-width: 992px) {
    & {
      display: block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #00a4c1;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#7a51ac, #7a51ac),
      linear-gradient(#5fff7b, #5fff7b);
    -webkit-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #1a202c;
    border-radius: 5px;
  }
`;

const contentContainerStyle = css`
  position: absolute;
  top: 0;
  padding: 2rem 2rem 0 2rem;
`;

const AppContainer: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div className={borderTopCss}></div>
      <div className={borderBottomCss}></div>
      <div className={contentContainerStyle + " " + className}>
        <Container maxW="container.md">{children}</Container>
      </div>
    </>
  );
};

export default AppContainer;
