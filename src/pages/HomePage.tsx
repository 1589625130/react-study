import { FC, useState } from "react";
import "./homePage.css";

import { Animated, AnimatedProps } from "react-animated-css";
import "./assets/css/animeta.css";

const App: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const animatedProps: AnimatedProps = {
    animationIn: "bounceInLeft",
    animationOut: "bounceOutRight",
    isVisible: visible,
  };
  const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>切换</button>
      {arr.map((item) => (
        <div key={item.toString()}>
          <Animated {...animatedProps}>
            <div>hello world {item}</div>
          </Animated>
        </div>
      ))}
    </div>
  );
};
