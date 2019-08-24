/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx, Styled, Flex } from 'theme-ui';
import Menu from './menu';

import PropTypes from 'prop-types';

const Navigation = ({ navs }) => (
  <>
    <Menu navs={navs} />
    <Flex
      as="nav"
      sx={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        order: [2, 1],
        display: ['none', 'flex']
      }}
      aria-label="Primary Navigation"
    >
      {navs.map(nav => (
        <Styled.a
          as={Link}
          sx={{
            color: 'primary',
            fontSize: 2,
            ':hover': { color: 'primary', textDecoration: 'none' }
          }}
          key={nav.slug}
          to={nav.slug}
        >
          {nav.title}
        </Styled.a>
      ))}
    </Flex>
  </>
);

Navigation.propTypes = {
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
