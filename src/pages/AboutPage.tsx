import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default AboutPage;
