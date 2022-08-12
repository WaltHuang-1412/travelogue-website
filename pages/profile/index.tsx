import type { NextPageWithLayout } from "next";
import LayoutLogin from "#/layouts/login/index";

const Profile: NextPageWithLayout = () => {
  return <>hi Profile</>;
};

export default Profile;

Profile.getLayout = function (page: any) {
  return (
    <LayoutLogin>
      <Profile>{page}</Profile>
    </LayoutLogin>
  );
};
