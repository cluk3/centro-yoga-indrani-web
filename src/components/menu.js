/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Flex, jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import Burger from './burger';

const NavMobile = ({ navs, show }) => {
  const transitions = useTransition(show, null, {
    from: {
      position: 'fixed',
      top: 0,
      left: 0,
      opacity: 0,
      transform: 'translate3d(0,0px,0)',
      height: '100vh',
      width: '100vw',
      zIndex: 9999
    },
    enter: { opacity: 1, transform: 'translate3d(0,96px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,0px,0)' }
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <Flex
            as="div"
            sx={{
              flexDirection: 'column',
              backgroundColor: 'primary',
              width: '100%',
              height: '100%',
              m: 0,
              p: 0,
              alignItems: 'center'
            }}
          >
            {navs.map(nav => (
              <Styled.a
                key={nav.slug}
                as={Link}
                sx={{
                  color: 'background',
                  fontSize: 3,
                  p: 2,
                  borderRadius: 8,
                  ':hover': {
                    backgroundColor: 'secondary',
                    textDecoration: 'none'
                  },
                  ':selection': {
                    backgroundColor: 'secondary',
                    textDecoration: 'none'
                  }
                }}
                to={nav.slug}
              >
                {nav.title}
              </Styled.a>
            ))}
          </Flex>
        </animated.div>
      )
  );
};

const Menu = ({ navs }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const toggleCollapsed = useCallback(
    () => setCollapsed(collapsed => !collapsed),
    [setCollapsed]
  );

  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: ['flex', 'none']
      }}
    >
      <Burger isCollapsed={isCollapsed} toggleCollapsed={toggleCollapsed} />
      <NavMobile navs={navs} show={isCollapsed} />
    </Flex>
  );
};

export default Menu;
