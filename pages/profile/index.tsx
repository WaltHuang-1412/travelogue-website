import type { ReactElement } from "react";
import DefaultLayout from "#/layouts/default";
import type { NextPageWithLayout } from "~/pages/_app";

const Profile: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Profile;
