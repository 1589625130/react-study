import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import ClickCounter from "@/components/ClickCounter";
import ViewCounter from "@/components/ViewCounter";
import ReduxCounter from "@/components/reduxCounter";
import { getPosts } from "@/api/posts";
import { Button } from "antd";

const IndexPage: FC = (): ReactElement => {
  return (
    <div>
      <Link to="/about">aboutPage</Link>
      <ClickCounter />
      <ViewCounter />
      <ReduxCounter />
      <Button onClick={getPosts}>getPosts</Button>
    </div>
  );
};

export default IndexPage;
