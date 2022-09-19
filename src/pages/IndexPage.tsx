import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import ClickCounter from "../components/ClickCounter";
import ViewCounter from "../components/ViewCounter";
import ReduxCounter from "../components/reduxCounter";

const IndexPage: FC = (): ReactElement => {
  return (
    <div>
      <Link to="/about">aboutPage</Link>
      <ClickCounter />
      <ViewCounter />
      <ReduxCounter />
    </div>
  );
};

export default IndexPage;
