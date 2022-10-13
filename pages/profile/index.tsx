import type { NextPageWithLayout, GetStaticProps, AppProps } from "next";
import LayoutLogin from "#/layouts/login/index";

const Profile: NextPageWithLayout = (context: AppProps) => {
  const { children } = context;
  const { props } = children;
  const { posts } = props;
  console.log("posts :>> ", posts);
  return <>hi {posts.id}</>;
};

export const getStaticProps: GetStaticProps = () => {
  const posts = {
    id: 1,
    description: "12313",
  };
  return {
    props: {
      posts,
    },
  };
};

export default Profile;

Profile.getLayout = function (page: any) {
  return (
    <LayoutLogin>
      <Profile>{page}</Profile>
    </LayoutLogin>
  );
};
