/** @jsx jsx */
import { Link } from 'gatsby';
import { Header as ThemeHeader, jsx } from 'theme-ui';
import Navigation from './navigation';
import SocialLinks from './social-links';
import Logo from '../../static/assets/logo.svg';
import FlyingLady from '../../static/assets/flying_lady.svg';

import useNavigation from '../hooks/use-navigation';

const Header = () => {
  const navs = useNavigation();
  return (
    <ThemeHeader>
      <FlyingLady
        sx={{
          width: '100px',
          position: 'relative',
          top: [-2, -3],
          left: [-3, -4]
        }}
      />
      <Link
        to="/"
        sx={{
          display: 'flex',
          justifyContent: ['center', 'start']
        }}
      >
        <Logo
          sx={{
            width: ['120px', '150px']
          }}
        />
      </Link>
      <Navigation navs={navs} />
      {/* <SocialLinks /> */}
    </ThemeHeader>
  );
};

export default Header;
