import type { ReactElement } from "react";
import Layout from "../layouts/default";
import type { NextPageWithLayout } from "~/pages/_app";

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
