import { css } from "@emotion/css";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import spaceLoading from "../assets/Loading.json";

const lottieContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  color: #fff;
  font-family: "Sriracha", sans-serif;

  span {
    font-size: 2rem;
  }
`;

const lotieCss = css`
  height: 18rem;
  width: 18rem;
`;

const Loading = () => {
  return (
    <div className={lottieContainer}>
      <Lottie className={lotieCss} animationData={spaceLoading} loop={true} />
      <TypeAnimation
        sequence={[
          "Loading.",
          1000,
          "Loading..",
          1000,
          "Loading...",
          1000,
          "Loading....",
          1000,
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        // @ts-ignore
        speed={250}
      />
    </div>
  );
};

export default Loading;
