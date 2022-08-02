import type { NextPage } from 'next'
import LayoutLogin from '#/layouts/login/index'

const Profile: NextPage = () => {
  return <>hi Profile</>
}

export default Profile

Profile.getLayout = function (page) {
  return (
    <LayoutLogin>
      <Profile>{page}</Profile>
    </LayoutLogin>
  )
}
