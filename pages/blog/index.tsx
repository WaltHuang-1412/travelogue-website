import type { NextPageWithLayout } from "next";
import LayoutLogin from "#/layouts/login/index";

const Blog: NextPageWithLayout = () => {
  return <>hi Home</>;
};

export default Blog;

Blog.getLayout = function (page: any) {
  return (
    <LayoutLogin>
      <Blog>{page}</Blog>
    </LayoutLogin>
  );
};
