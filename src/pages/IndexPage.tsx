import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

interface IndexPageProps {
  content?: string;
  onchange?: (content: string) => void;
}

const IndexPage: FC<IndexPageProps> = (props): ReactElement => {
  console.log("渲染");
  return (
    <div>
      <Link to="/about">aboutPage</Link>
    </div>
  );
};
IndexPage.defaultProps = {
  content: "hello world",
};
export default IndexPage;
