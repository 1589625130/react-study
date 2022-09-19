import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import ClickCounter from "../components/ClickCounter";

interface IndexPageProps {
  content?: string;
  onchange?: (content: string) => void;
}

const IndexPage: FC<IndexPageProps> = (props): ReactElement => {
  const {} = props;
  console.log("渲染");
  return (
    <div>
      <Link to="/about">aboutPage</Link>
      <ClickCounter />
    </div>
  );
};
IndexPage.defaultProps = {
  content: "hello world",
};
export default IndexPage;
