import type { NextPageWithLayout } from "next";
import LayoutLogin from "#/layouts/login/index";

const Home: NextPageWithLayout = () => {
  return <>hi Home</>;
};

export default Home;

Home.getLayout = function (page: any) {
  return (
    <LayoutLogin>
      <Home>{page}</Home>
    </LayoutLogin>
  );
};
